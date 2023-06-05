import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"

export default async function handler(req,res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)
    const session = await getServerSession(req,res,authOptions)

    const review = await db.collection("review").aggregate([
        {
            $match: {
                userId: new ObjectId(session.user._id)
            }
        },
        {
            $lookup: {
                from: "product",
                let: { localField: "$productId" },
                pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ["$_id", "$$localField"]
                        }
                      }
                    }
                ],
                as: "product"
            }
        },
        {
            $unwind: "$product"
        }
    ]).toArray()

    return res.json(review);
}