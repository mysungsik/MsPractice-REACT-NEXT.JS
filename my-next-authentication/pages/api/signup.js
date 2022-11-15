import {
  connectDb,
  insertDb,
  hashPassword,
  findSameID,
} from "../../helper/db-util";

async function handler(req, res) {
  const client = connectDb();
  if (req.method === "POST") {
    const data = req.body;

    const hashedPassword = await hashPassword(data.password);

    const insertData = {
      id: data.userid,
      password: hashedPassword,
    };

    const sameUser = await findSameID(client, "userInfo", data.userid);

    console.log(sameUser);

    if (!data) {
      res.status(422).json({ message: "invalid input"});
      client.close();
      return;
    }

    if (sameUser) {
      res.status(422).json({ message: "already "});
      client.close();
      return;
    }

    const insertResult = await insertDb(client, "userInfo", insertData);

    res.status(201).json({ message: "good", insertResult: insertData });
    client.close();
  } else {
    return;
  }
}

export default handler;
