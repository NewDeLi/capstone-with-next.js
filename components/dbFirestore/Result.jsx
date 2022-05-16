import React from "react";
import { Bar } from "react-chartjs-2";
import QuestionFromDb from "./QuestionFromDb";
import "firebase/compat/firestore";

export default function Result({
  roomInputsDb,
  roomID,
  votes,
  handleToggleBack,
  handleToggleForward,
}) {
  return (
    <>
      <div className="buttonGroup">
        <QuestionFromDb roomID={roomID} />
        <div>
          <button
            onClick={() => {
              handleToggleBack();
              handleToggleForward();
            }}
          >
            Create
          </button>

          <button onClick={handleToggleForward}>Vote</button>
        </div>
      </div>

      <section>
        <Bar
          className="barChart"
          data={{
            labels: roomInputsDb?.map((optionObject) => optionObject.value),
            datasets: [
              {
                label: "yes",
                data: roomInputsDb?.map(
                  (optionObject) =>
                    votes
                      ?.map((vote) => vote)
                      .filter(
                        (yes) =>
                          yes[`${optionObject.id}`]?.vote === "yes" &&
                          yes[`${optionObject.id}`]?.id === optionObject.id
                      ).length
                ),
                backgroundColor: [
                  "rgba(255, 99, 133, 0.797)",
                  "rgba(54, 163, 235, 0.797)",
                  "rgba(255, 207, 86, 0.797)",
                  "rgba(75, 192, 192, 0.797)",
                  "rgba(153, 102, 255, 0.797)",
                  "rgba(255, 160, 64, 0.797)",
                ],

                color: "#606060",
                borderWidth: 2,
                borderRadius: 20,
              },
              {
                label: "no",
                data: roomInputsDb?.map(
                  (optionObject) =>
                    votes
                      ?.map((vote) => vote)
                      .filter(
                        (no) =>
                          no[`${optionObject.id}`]?.vote === "no" &&
                          no[`${optionObject.id}`]?.id === optionObject.id
                      ).length
                ),
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                color: "#606060",
                borderWidth: 2,
                borderRadius: 20,
              },
            ],
          }}
          options={{
            maintainAspectRatio: false,
            indexAxis: "y",
            legend: {
              labels: {
                backgroundColor: "blue",
                fontSize: 25,
              },
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
          }}
        />
      </section>
    </>
  );
}
