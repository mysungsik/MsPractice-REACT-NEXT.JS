import { getSession } from "next-auth/react";
import { changeUserPassword, connectDb } from "../../../helper/db-util";
import bcrypt from "bcrypt";

async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });

  if (!session) {
    res.status(401).json({ message: "not authenticated" });
    return;
  }

  const { newPasasword, id } = req.body;

  const hashedPassword = await bcrypt.hash(newPasasword, 10);

  const client = await connectDb();

  const changePassword = await changeUserPassword(client,"userInfo",id,hashedPassword);

  if (!changePassword) {
    res.status(201).json({ message: "FAIL" });
  }

  res.status(200).json({ message: "success", data: changePassword });

  client.close();
}

export default handler;

// 이후 추가할것

// user로부터 받은 정보 validation추가
// oldpassword 도 받아서, id 뿐 아니라, oldPassword 도 같은 경우만 , 비밀번호 변경되게 추가
// 또한 id 받아올때, props, props, ... 해서 Page 에서 오지 말고, 그냥 컴포넌트에서 useSession 쓰면 한번에 와짐
