import firebase from "firebase/compat/app";
import "firebase/compat/database";

const increaseCountNo = async (req, res) => {
  const ref = firebase.database().ref("countsNo").child(`${req.query.id}`); //
  const { snapshot } = await ref.transaction((count) => {
    if (count === 0) {
      return 1;
    }

    return count + 1;
  });

  return res.status(200).json({
    total: snapshot.val(),
  });
};

export default increaseCountNo;