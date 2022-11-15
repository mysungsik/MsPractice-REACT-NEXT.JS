import { MongoClient } from "mongodb";
import bcrypt from "bcrypt";

export function connectDb() {
  const client = new MongoClient(
    "mongodb+srv://audtlr:nxhYrEZyYpajzBBY@cluster0.mzdaqy1.mongodb.net/?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDb(client, collectionName, data) {
  await client.connect;

  const insertResult = await client
    .db("auth-demo")
    .collection(collectionName)
    .insertOne(data);

  return insertResult;
}

export async function findExsiteUserid(client, collectionName, userid) {
  await client.connect;

  const findResult = await client
    .db("auth-demo")
    .collection(collectionName)
    .findOne({ id: userid });

  return findResult;
}

export async function checkUserPassword(password,passwordFromDb){
  const result = await bcrypt.compare(password, passwordFromDb)
  return result
}

export async function findSameID(client, collectionName, userid) {
  await client.connect;

  const existingUser = await client
    .db("auth-demo")
    .collection(collectionName)
    .findOne({ id: userid });

  if (existingUser) {
    return true;
  } else {
    return false;
  }
}

export async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
}
