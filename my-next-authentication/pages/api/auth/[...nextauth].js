import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import {
  checkUserPassword,
  connectDb,
  findExsiteUserid,
} from "../../../helper/db-util";

export const authOptions = {
  session: {
    jwt: true,
  },
  providers: [
    credentials({
      async authorize(credentials) {
        const client = connectDb();

        const findedUser = await findExsiteUserid(
          client,
          "userInfo",
          credentials.id
        );

        if (!findedUser) {
          client.close();
          throw new Error("no user find");
        }

        const isValid = await checkUserPassword(
          credentials.password,
          findedUser.password
        );

        if (!isValid) {
          client.close();
          throw new Error("user password is wrong");
        }

        client.close();
        return {
          email: findedUser.id,
          name: "ms",
          image: null,
        };
      },
    }),
  ],
};

export default NextAuth(authOptions);
