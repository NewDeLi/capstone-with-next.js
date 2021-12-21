import React from "react";
import Head from "next/head";
import { Header } from "./Header";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";
import QuestionFromDb from "./dbFirestore/questionFromDb";

export default function Result({ inputs }) {
  return (
    <>
      <Head>
        <title>Results</title>
      </Head>

      <Header pageName={"RESULTS"} />

      <QuestionFromDb />
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

const StyledBar = styled.section`
  max-width: 100%;
  width: 90%;
  height: 50vh;
  margin: 1vh auto;
  border-radius: 15px;
`;
