import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const authHandler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    // ...add more providers here
  ],
})

export {authHandler as GET, authHandler as POST}
