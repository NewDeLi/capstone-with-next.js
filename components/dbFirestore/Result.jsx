import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import QuestionFromDb from "./QuestionFromDb";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

export default function Result({
  optionsCollection,
  updateCountYes,
  updateCountNo,
  roomID,
}) {
  // update current voting status
  useEffect(() => {
    try {
      optionsCollection?.map((optionObject) => {
        firebase
          .firestore()
          .collection(`${roomID}`)
          .doc(`${optionObject.id}`)
          .onSnapshot((doc) => {
            const yesSir = doc.data()?.optionObject.countYes;
            const noSir = doc.data()?.optionObject.countNo;
            updateCountYes(optionObject.id, yesSir);
            updateCountNo(optionObject.id, noSir);
          });
      });
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }, [`${optionsCollection}`]);

  return (
    <>
      <QuestionFromDb roomID={roomID} />
      <StyledSection>
        <Bar
          data={{
            labels: optionsCollection?.map(({ value }) => value),
            datasets: [
              {
                label: "yes",
                data: optionsCollection?.map(({ countYes }) => countYes),
                backgroundColor: "#56a8e1",
                borderColor: "#56a8e1",
                color: "#606060",
                borderWidth: 2,
                borderRadius: 20,
              },
              {
                label: "no",
                data: optionsCollection?.map(({ countNo }) => countNo),
                backgroundColor: "#56a7e14e",
                borderColor: "#56a7e14e",
                color: "#606060",
                borderWidth: 2,
                borderRadius: 20,
              },
            ],
          }}
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
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  height: 55vh;
  margin: 1vh auto;
`;
