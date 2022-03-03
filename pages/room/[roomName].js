import React, { useState } from "react";
import Head from "next/head";
import { Header } from "../../components/Header";
import { Navigation } from "../../components/Navigation";
import { OptionFormList } from "../../components/dbFirestore/OptionFormList";
import VoteCard from "../../components/dbFirestore/VoteCard";
import Result from "../../components/dbFirestore/Result";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import initFirebase from "../../firebase/config";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";
import { useUser } from "../../firebase/useUser";
import styled from "styled-components";

initFirebase();

const AddCard = () => {
  const { logout } = useUser();
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: "", countYes: 0, countNo: 0 },
  ]);
  const [showCreate, setShowCreate] = useState(true);
  const [slideChange, setSlideChange] = useState(false);

  const { query } = useRouter();
  const roomID = query.id;
  //use collection of inputs in firestore "optionsObjects" , which was written to firestore in optionformlist, to update option data
  const [options] = useCollectionData(
    firebase.firestore().collection(`${roomID}`)
  );

  const optionsCollection = options?.map((optionList) => {
    return optionList.optionObject;
  });

  const updateCountYes = (id, newValue) => {
    for (let i in optionsCollection) {
      if (optionsCollection[i].id == id) {
        optionsCollection[i].countYes = newValue;
        break;
      }
    }
  };
  const updateCountNo = (id, newValue) => {
    for (let i in optionsCollection) {
      if (optionsCollection[i].id == id) {
        optionsCollection[i].countNo = newValue;
        break;
      }
    }
  };

  if (showCreate) {
    return (
      <>
        <Head>
          <title>Create</title>
        </Head>
        <Header pageName={"CREATE"} subHeader={"Add inputs"} />
        <main>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
            showCreate={showCreate}
            setShowCreate={setShowCreate}
            roomID={roomID}
          />
        </main>
        <Navigation logout={logout} />
      </>
    );
  }
  return (
    <>
      {slideChange ? (
        <>
          <Head>
            <title>Vote</title>
          </Head>
          <Header pageName={"VOTE"} subHeader={"give a vote for each"} />
        </>
      ) : (
        <>
          <Head>
            <title>Results</title>
          </Head>
          <Header
            pageName={"RESULTS"}
            subHeader={"check the election results"}
          />
        </>
      )}
      <main>
        <StyledSection>
        <Swiper
          modules={[Pagination]}
          pagination={true}
          onSlideChange={() => setSlideChange(!slideChange)}
          className="mySwiper"
        >
          <SwiperSlide>
            <VoteCard
              optionsCollection={optionsCollection}
              updateCountYes={updateCountYes}
              updateCountNo={updateCountNo}
              roomID={roomID}
              showCreate={showCreate}
              setShowCreate={setShowCreate}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Result
              optionsCollection={optionsCollection}
              updateCountYes={updateCountYes}
              updateCountNo={updateCountNo}
              roomID={roomID}
            />
          </SwiperSlide>
        </Swiper>
        </StyledSection>
      </main>
      <Navigation logout={logout} />
    </>
  );
};
export default AddCard;

const StyledSection= styled.section`
overflow-y: scroll
height: 70vh;`