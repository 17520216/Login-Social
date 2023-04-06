import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_CLIENT_ID,
      clientId: "516256127650-5qp43uoiurrvg9ng95f53n6o4dnur677.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],

  callbacks: {
    async jwt(token, user, account) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
      }
      console.log("🚀token---->", token);
      return token.token;
    },


    async session(session, user) {
      console.log("🚀session---->", session);
    //   session.accessToken = user.accessToken;
      return session;
    },
  },
  session: {
    jwt: true, // next-auth@4.0.0-beta.2

    // strategy: 'jwt',
    maxAge: 3 * 24 * 60 * 60, // 3 days
    updateAge: 24 * 60 * 60, // 24 hours
    secret: "dOR2zfgG53Uj+KvJKV/3PFuGms8DvKF/jSfh/d2xVMc=dOR2zfgG53Uj+KvJKV/3PFuGms8DvKF/jSfh/d2xVMc=",
    // secret: process.env.NEXTAUTH_SECRET,
  },
});
