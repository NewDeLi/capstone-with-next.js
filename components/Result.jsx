import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

export default function Result({ inputs }) {
  return (
    <>
      <StyledDiv>
        <Bar
          data={{
            labels: inputs.map((input) => {
              return input.value;
            }),
            datasets: [
              {
                label: "",
                data: inputs.map((input) => {
                  return input.countYes;
                }),
                backgroundColor: [
                  "#ff638542",
                  "#36a3eb47",
                  "#ffcf5650",
                  "#4bc0c047",
                  "#9966ff45",
                  "#ffa04053",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                color: "black",
                borderWidth: 10,
                borderRadius: 50,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
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
                  boxWidth: 0,
                },
              },
            },
          }}
        />
      </StyledDiv>
    </>
  );
}

const StyledDiv = styled.div`
  max-width: 100%;
  width: 90%;
  margin: 1vh auto;
  border-radius: 15px;
  border: 5px solid #56a8e1;
  li {
    border-radius: 15px;
    border: 1px solid black;
  }
`;

/*{
  inputs.map((input) => {
    return (
      <ul key={input.id}>
        <li>
          {input.value}:👍{input.countYes}👎{input.countNo}
        </li>
      </ul>
    );
  });
}*/
