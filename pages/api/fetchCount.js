import firebase from "firebase/compat/app";
import "firebase/compat/database";

export default (req, res) => {
  const ref = firebase.database("https://decisions-3fadc-default-rtdb.europe-west1.firebasedatabase.app").ref("counts").child(`${req.query.id}`);

  return ref.once("value", (snapshot) => {
    res.status(200).json({
      total: snapshot.val(),
    });
  });
};
