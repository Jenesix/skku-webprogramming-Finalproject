import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { Account, User as AuthUser } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user";
import connectMongoDB from "@/libs/mangodb";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectMongoDB();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),

GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  }),
],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider == "credentials") {
            return true;
            }
            if (account?.provider == "google") {
            await connectMongoDB();
            try {
                const existingUser = await User.findOne({ email: user.email });
                if (!existingUser) {
                const newUser = new User({
                    email: user.email,
                    isAdmin: false,
                });
    
                await newUser.save();
                return true;
                }
                return true;
            } catch (err) {
                console.log("Error saving user", err);
                return false;
            }
            }
        },
        jwt({ token, user }) {
          if (user) {
            token.role = user.isAdmin ? 'admin' : 'user';
            token.isAdmin = user.isAdmin;
          }
          return Promise.resolve(token);
        },
        session({ session, token }) {
          session.user.role = token.role;
          session.user.isAdmin = token.isAdmin;
          return Promise.resolve(session);
        },
        },
    };


export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
