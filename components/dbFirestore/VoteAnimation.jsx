import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

function Advanced({ roomInputsDb, user }) {
  const [currentIndex, setCurrentIndex] = useState(roomInputsDb?.length - 1);
  const [lastDirection, setLastDirection] = useState();

  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(roomInputsDb?.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < roomInputsDb?.length - 1;

  const canSwipe = currentIndex >= 0;

  const addVoteDocument = async (vote, id) => {
    try {
      await firebase
        .firestore()
        .collection("votes")
        .doc(user.id)
        .update({ [`${id}`]: { vote, id } });
    } catch (error) {
      console.log(error);
      await firebase
        .firestore()
        .collection("votes")
        .doc(user.id)
        .set({ [`${id}`]: { vote, id } });
    }
  };

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < roomInputsDb?.length) {
      await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
    }
  };

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  return (
    <div className="voteAnimation">
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Damion&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Alatsi&display=swap"
          rel="stylesheet"
        />

        <div className="cardContainer">
          {roomInputsDb?.map((roomInput, index) => {
            return (
              <TinderCard
                ref={childRefs[index]}
                className="swipe"
                key={roomInput?.id}
                onSwipe={(dir) => {
                  swiped(dir, roomInput.value, index);
                  dir === "left"
                    ? addVoteDocument("no", roomInput?.id)
                    : addVoteDocument("yes", roomInput?.id);
                }}
                onCardLeftScreen={() =>
                  outOfFrame(roomInput.value, roomInput.index)
                }
              >
                <div className="card">
                  <div className="cardContent">
                    <h1>{roomInput?.value}</h1>
                  </div>
                  <div className="cardButtons">
                    <button
                      onClick={() => {
                        swipe("left");
                        addVoteDocument("no", roomInput?.id);
                      }}
                    >
                      👎
                    </button>
                    <button
                      onClick={() => {
                        swipe("right");
                        addVoteDocument("yes", roomInput?.id);
                      }}
                    >
                      👍
                    </button>
                  </div>
                </div>
              </TinderCard>
            );
          })}
        </div>

        <button className="buttonAnimation" onClick={() => goBack()}>
          Repeat last Vote!
        </button>

        {lastDirection ? (
          <h2 key={lastDirection} className="infoText">
            You swiped {lastDirection}
          </h2>
        ) : (
          <h2 className="infoText">
            Swipe a card or press a button to get Restore Card button visible!
          </h2>
        )}
      </div>
    </div>
  );
}

export default Advanced;
