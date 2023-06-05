import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"

export default async function handler(req,res){
    const body = JSON.parse(req.body);
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)
    const session = await getServerSession(req,res,authOptions)

    const userInsert = await db.collection("review").insertOne({
        rating: body.rating,
        review: body.review,
        image: body.image,
        productId: new ObjectId(body.id),
        userId: new ObjectId(session.user._id)
    });

    return res.json(userInsert);
}