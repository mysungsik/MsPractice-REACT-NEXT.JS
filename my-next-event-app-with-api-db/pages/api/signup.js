import { MongoClient } from "mongodb";

async function connectDb() {
  const client = await MongoClient.connect(
    "mongodb+srv://audtlr:HYbC2pH0ODGcW7D9@newletter.hrll7bz.mongodb.net/?retryWrites=true&w=majority"
  );
  return client;
}

async function insertData(client, data) {
  const insertResult = await client
    .db("events")
    .collection("newletter")
    .insertOne(data);

  return insertResult;
}

async function getSignup(req, res) {
  if (req.method === "POST") {
    const signupEmail = req.body.email;

    if (!signupEmail || !signupEmail.includes("@")) {
      res.status(422).json({ message: "invalid email" });
      return;
    }

    let client;

    try {
      client = await connectDb();
    } catch (error) {
      res.status(500).json({ message: "connect fail" });
      return;
    }

    try {
      const insertResult = await insertData(client, { email: signupEmail });
      res
        .status(201)
        .json({ message: "signup complete", feedback: signupEmail });
    } catch (error) {
      res.status(500).json({ message: "signup fail" });
    }
  }
}

export default getSignup;
