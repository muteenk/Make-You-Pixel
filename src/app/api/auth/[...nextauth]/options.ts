import { NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

import mongoClient from "@/lib/database/mongoClient"
import dbConnect from '@/lib/database/dbConnect'
import User from "@/models/user.model"

import DefaultAvatar from "@/assets/defaultAvatar.jpg"

const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(mongoClient),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT as string),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID || "",
      clientSecret: process.env.GITHUB_SECRET || "",
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    //async createUser({user}) {
      //console.log(user)
      //await dbConnect();
      //user.username = user.email;
      //const newUser = new User({
      //  email: user.email,
      //  username: user.email,
      //});
      //await newUser.save();
      //return user; 
    //},
    async signIn({ user, account, email }) {
     await dbConnect();

      if (account && account.provider === "github") {
        user.avatar = user.image;
        return true;
      }

     const userExists = await User.findOne({
       email: user.email,  //the user object has an email property, which contains the email the user entered.
     });
     if (!userExists) {
        const newUser = new User({
          email: user.email,
          username: "testUsername",
        });

        await newUser.save();
     }

     return true;
    },
    //async session({ session, token, user }) {
    //  // Add any additional data to the session here
    //  return session
    //},
  },
  //pages: {
    //newUser: '/onboarding' 
  //},
}


export default authOptions
