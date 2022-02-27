import firebase from "firebase/compat/app";
import "firebase/compat/database";

const increaseCountYes = async (req, res) => {
  const ref = firebase.database().ref("countsYes").child(`${req.query.id}`); //
  const { snapshot } = await ref.transaction((count) => {
    if (count === null) {
      return 1;
    }

    return count + 1;
  });

  return res.status(200).json({
    id: snapshot.val(),
    total: snapshot.val(),
    countYes: snapshot.val()
  });
};

export default increaseCountYes;
