import { MongoClient } from "mongodb";
import { connectDb, getFindAllDb } from "../../../helper/db-util";

async function resistComment(req, res) {
  const eventId = req.query.eventid;

  const client = await connectDb();

  if (req.method == "POST") {
    const { email, name, comment } = req.body;

    if (
      !email.includes("@") ||
      !email ||
      name.trim() == "" ||
      !name ||
      !comment
    ) {
      res.status(422).json({ message: "invalid input" });
      return;
    }

    const newComments = {
      email,
      name,
      comment,
      eventId,
    };

    const insertResult = await client
      .db("events")
      .collection("comments")
      .insertOne(newComments);

    // insertOne 으로, mongodb Atlas 에 "객체 변수"를 넣기만 해도, 자동으로 "객체 변수" 안에, _id 란 key 로, id값이 들어가버린다!
    console.log(newComments);

    res.status(201).json({ message: "added comment", comment: newComments });
  }

  if (req.method == "GET") {
    const helperGetResult = await getFindAllDb(
      client,
      "comments",
      { _id: -1 },
      { eventId: eventId }
    );

    console.log(helperGetResult);

    res.status(200).json({ comment: helperGetResult });
  }
  client.close();
}

export default resistComment;
