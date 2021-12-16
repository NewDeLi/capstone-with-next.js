import React, { useEffect } from "react";
import Head from "next/head";
import { Header } from "../Header";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function Result({ inputs, roomQuestion, setRoomQuestion }) {
  //fetch question data from firestore
  useEffect(() => {
    try {
      firebase
        .firestore()
        .collection("createRoom")
        .doc("room_id+question")
        .onSnapshot((doc) => {
          console.log(doc.data().question[0].value);
          const fetchedQuestion = {
            id: doc.data().question[0].id,
            value: doc.data().question[0].value,
          };
          setRoomQuestion([fetchedQuestion]);
          console.log(roomQuestion + 123);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Results</title>
      </Head>

      <Header pageName={"RESULTS"} />

      <StyledSection>
        {roomQuestion.map((single, index) => {
          return (
            <>
              <p key={index}>
                <span className="highlight">room-id:{single.id}</span>
                <span>question:{single.value}</span>
              </p>
            </>
          );
        })}
      </StyledSection>
      <StyledBar>
        <Bar
          data={{
            labels: inputs.map(({ value }) => value),
            datasets: [
              {
                label: "yes",
                data: inputs.map(({ countYes }) => countYes),
                backgroundColor: "#56a8e1",
                borderColor: "#56a8e1",
                color: "#606060",
                borderWidth: 2,
                borderRadius: 20,
              },
              {
                label: "no",
                data: inputs.map(({ countNo }) => countNo),
                backgroundColor: "#56a7e14e",
                borderColor: "#56a7e14e",
                color: "#606060",
                borderWidth: 2,
                borderRadius: 20,
              },
            ],
          }}
          height={200}
          width={300}
          options={{
            maintainAspectRatio: false,
            indexAxis: "y",
            datasets: {
              display: false,
            },
            scales: {
              y: {
                grid: {
                  display: false,
                },
              },
              x: {
                display: false,
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  boxWidth: 10,
                },
              },
            },
          }}
        />
      </StyledBar>
    </>
  );
}

const StyledSection = styled.section`
  border: 4px solid #56a8e1;
  border-radius: 25px;
  color: #606060;
  background-color: white;
  width: 60%;
  margin: auto;
  margin-bottom: 7.5vh;
  margin-top: 0;
  padding: 1vh 1vw;
  span {
    display: block;
  }
  .highlight {
    color: #56a8e1;
  }
`;

const StyledBar = styled.section`
  max-width: 100%;
  width: 90%;
  height: 50vh;
  margin: 1vh auto;
  border-radius: 15px;
`;
