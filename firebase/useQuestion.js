import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function useQuestion() {
  const [questionCollection] = useCollectionData(
    firebase.firestore().collection("createRoom")
  );

  const updateQuestionCollection = (id, newValue) => {
    for (let i in questionCollection) {
      if (questionCollection[i].id == id) {
        questionCollection[i].value = newValue;

        break;
      }
    }
  };
  return { questionCollection, updateQuestionCollection };
}

export function useRoomInputs(userId) {
  const [roomInputsDbCollection] = useCollectionData(
    firebase.firestore().collection(`roomInputs: ${userId}`)
  );

  const roomInputsDb = roomInputsDbCollection?.map((optionList) => {
    return optionList.input;
  });

  return { roomInputsDb };
}
