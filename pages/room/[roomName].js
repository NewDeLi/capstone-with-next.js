import React, { useState } from "react";
import { OptionFormList } from "../../components/dbFirestore/OptionFormList";
import VoteCard from "../../components/dbFirestore/VoteCard";
import Result from "../../components/dbFirestore/Result";
import Link from "next/link";
import styled from "styled-components";
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

initFirebase();

const AddCard = () => {
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: "", countYes: 0, countNo: 0 },
  ]);
  const [showCreate, setShowCreate] = useState(true);

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
        <StyledMain>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
            showCreate={showCreate}
            setShowCreate={setShowCreate}
            roomID={roomID}
          />
        </StyledMain>
        <StyledNav>
          <Link href="/home">
            <a>
              <img
                src="/Icon/Home_grey.svg"
                alt="home"
                width="50px"
                height="50px"
              />
            </a>
          </Link>
        </StyledNav>
      </>
    );
  }
  return (
    <>
      <StyledMain>
        <Swiper
          modules={[Pagination]}
          pagination={true}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
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
      </StyledMain>
      <StyledNav>
        <Link href="/home">
          <a>
            <img
              src="/Icon/Home_grey.svg"
              alt="home"
              width="50px"
              height="50px"
            />
          </a>
        </Link>
      </StyledNav>
    </>
  );
};
export default AddCard;

const StyledNav = styled.nav`
  position: fixed;
  bottom: 0px;
  width: 100%;
  margin: 2.5vh auto;
`;
const StyledMain = styled.main`
  overflow: scroll;
  height: 90vh;
`;
