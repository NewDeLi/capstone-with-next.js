import React from "react";
import Advanced from "../../components/dbFirestore/VoteAnimation";
import QuestionFromDb from "./QuestionFromDb";

export default function VoteCard({
  roomInputsDb,
  roomID,
  user,
  handleToggleBack,
  handleToggleForward,
}) {
  return (
    <>
      <div className="buttonGroup">
        <QuestionFromDb roomID={roomID} />
        <div>
          <button type="button" onClick={handleToggleBack}>
            Create
          </button>

          <button type="button" onClick={handleToggleForward}>
            Result
          </button>
        </div>
      </div>
      <Advanced roomInputsDb={roomInputsDb} user={user} />
    </>
  );
}
