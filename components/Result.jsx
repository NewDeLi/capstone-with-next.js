import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import Head from "next/head";
import { Header } from "./Header";

export default function Result({ inputs, roomName }) {
  return (
    <>
      <Head>
        <title>Results</title>
      </Head>

      <Header pageName={"RESULTS"} />
      <StyledP>
        <span>{roomName}</span>
      </StyledP>
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

const StyledP = styled.p`
  border: 4px solid #56a8e1;
  border-radius: 25px;
  color: #606060;
  background-color: white;
  width: 60%;
  margin: auto;
  margin-bottom: 7.5vh;
  margin-top: 0;
  padding: 1vh 1vw;
`;

const StyledBar = styled.section`
  max-width: 100%;
  width: 90%;
  height: 50vh;
  margin: 1vh auto;
  border-radius: 15px;
`;
