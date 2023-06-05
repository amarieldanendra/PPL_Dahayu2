import * as bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb";

export default async function handler(req,res){
    const body = JSON.parse(req.body);
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)

    const userInsert = await db.collection("user").insertOne({
        username: body.username,
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: await bcrypt.hash(body.password,10)
    });

    const {password, ...result} =  userInsert;
    return res.json(result);
}