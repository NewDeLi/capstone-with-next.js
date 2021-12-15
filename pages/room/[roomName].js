import React, { useState } from "react";
import { OptionFormList } from "../../components/cloudFirstore/OptionFormList";
import VoteCard from "../../components/cloudFirstore/VoteCard";
import Link from "next/link";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Result from "../../components/cloudFirstore/Result";
import "swiper/css";
import "swiper/css/pagination";
import firebase from "../../firebase/config.js";
firebase;

const AddCard = ({ question, setQuestion }) => {
  const [showCreate, setShowCreate] = useState(true);
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: "", countYes: 0, countNo: 0 },
  ]);
  const [question1, setQuestion1] = useState([{ id: uuidv4(), value: "" }]);

  if (showCreate) {
    return (
      <>
        <StyledMain>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
            question1={question1}
            setQuestion1={setQuestion1}
            showCreate={showCreate}
            setShowCreate={setShowCreate}
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
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <VoteCard
              inputs={inputs}
              setInputs={setInputs}
              question1={question1}
              setQuestion1={setQuestion1}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Result
              inputs={inputs}
              question1={question1}
              setQuestion1={setQuestion1}
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
