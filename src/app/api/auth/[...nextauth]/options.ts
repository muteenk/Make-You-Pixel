import { NextAuthOptions } from 'next-auth';
import GithubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter"

import mongoClient from "@/lib/database/mongoClient"
import dbConnect from '@/lib/database/dbConnect'
import User from "@/models/user.model"

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
    async signIn({ user, account }) {
      await dbConnect();

      if (user){
        const userExists = await User.findOne({
          email: user.email,
        });

        if (!userExists) {

          if (account && account.provider === "github") {
            user.provider = account.provider;
            user.isVerified = true;
            user.role = "user";
          }
          else {
            const newUser = new User({
              email: user.email,
              name: user.email?.split("@")[0],
              image: "default",
              isVerified: (account && account.provider === "email") ? true : false,
              provider: (account) ? account.provider : "email",
            });
            await newUser.save();
          }
          return true;
        }
        else{
          if (account && account.provider == userExists.provider) return true;
          return false;
        }
      }
      else return false;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user._id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
        token.role = user.role;
      }
      console.log(token)
      return token
    },
    async session({ session, token, user }) {
      if (user){
        session.user = {
          id: user.id,
          name: user.name,
          email: user.email,
          image: user.image,
          role: user.role,
        };
      }
      return session
    },
  },
  //pages: {
    //newUser: '/onboarding' 
  //},
}


export default authOptions
