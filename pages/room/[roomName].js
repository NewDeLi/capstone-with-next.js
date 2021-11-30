import { OptionFormList } from "../../components/OptionFormList";
import React from "react";
import VoteCard from "../../components/VoteCard";
import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Result from "../../components/Result";
import "swiper/css";
import "swiper/css/pagination";

const AddCard = ({ roomName }) => {
  const [inputs, setInputs] = useState([
    { id: uuidv4(), value: "", countYes: 0, countNo: 0 },
  ]);
  const [showCreate, setShowCreate] = useState(true);

  if (showCreate) {
    return (
      <>
        <StyledMain>
          <OptionFormList
            inputs={inputs}
            setInputs={setInputs}
            roomName={roomName}
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
              roomName={roomName}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Result inputs={inputs} roomName={roomName} />
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
