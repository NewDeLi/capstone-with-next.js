// this is server side code, you can connect to firebase, mongo or whatever you like here, without leaking the API key to the client

export default async (request, response) => {
  // connect to firebase

  if (request.method === "POST") {
    // add new document to firebase with question from request.body.question
    // get back newly inserted id from insert operation
    // response.status(200).json({ insertedId: something })
  }

  response.status(500).json({ error: "something went wrong" });
};
