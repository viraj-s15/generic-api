import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI

// We know that this value will not be undefined
export const client = new MongoClient(MONGODB_URI!)
export const dataBase = client.db()
