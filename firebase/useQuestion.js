import { useCollectionData } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

export function useQuestion() {
  const [question] = useCollectionData(
    firebase.firestore().collection("createRoom")
  );
  const questionCollection = question?.map((questionObject) => {
    return questionObject.question;
  });
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
