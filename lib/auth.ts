import { betterAuth } from "better-auth";

import { MongoClient } from "mongodb";

import { mongodbAdapter } from "@better-auth/mongo-adapter";



const dbUrl = process.env.BETTER_AUTH_DB_URL || "mongodb://localhost:27017/bazardor";

const client = new MongoClient(dbUrl);

const db = client.db();


export const auth = betterAuth({

  emailAndPassword: {

    enabled: true,

  },




  socialProviders: {



    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || "mock-google-client-id",



      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "mock-google-client-secret",



    },
    github: {



      clientId: process.env.GITHUB_CLIENT_ID || "mock-github-client-id",



      clientSecret: process.env.GITHUB_CLIENT_SECRET || "mock-github-client-secret",



    },
  },



  database: mongodbAdapter(db, {



    client,

    
  }),
});
