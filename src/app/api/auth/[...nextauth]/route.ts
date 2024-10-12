import NextAuth from "next-auth"
import mongoose from 'mongoose'
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import dbConnect from "@/lib/dbConnect"


const authHandler = NextAuth({
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(mongoose.connection),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, email }) {
      await db.connect();
      const userExists = await User.findOne({
        email: user.email,  //the user object has an email property, which contains the email the user entered.
      });
      if (userExists) {
        return true;   //if the email exists in the User collection, email them a magic login link
      } else {
       return "/register";
      }
    },
    async session({ session, token, user }) {
      // Add any additional data to the session here
      return session
    },
  },
})

export {authHandler as GET, authHandler as POST}
