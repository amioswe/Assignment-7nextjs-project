import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const dbUrl = process.env.BETTER_AUTH_DB_URL || "mongodb://localhost:27017/bazardor";

const client = new MongoClient(dbUrl);

// Specify the database name explicitly — avoids the "test" default
const db = client.db("bazardor");

export const auth = betterAuth({
  // Explicitly set secret from env var so sessions/cookies work correctly
  secret: process.env.BETTER_AUTH_SECRET,

  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    // Auto sign-in after sign-up so user doesn't have to manually sign in again
    autoSignIn: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    },
  },

  database: mongodbAdapter(db, {
    client,
    // Set to false if your MongoDB is a standalone server without replica set
    transaction: false,
  }),
});
