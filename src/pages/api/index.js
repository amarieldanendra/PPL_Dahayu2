import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export default async function handler(req,res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)

    const review = await db.collection("product").aggregate([
        {
          $lookup: {
            from: "review",
            localField: "_id",
            foreignField: "productId",
            as: "reviews"
          }
        },
        {
          $match: {
            "reviews": {
              $elemMatch: {
                "rating": { $gte: 4 }
              }
            }
          }
        },
        {
          $addFields: {
            averageRating: { $avg: "$reviews.rating" }
          }
        },
        {
          $match: {
            averageRating: { $gte: 4 }
          }
        }
      ]).toArray()

    return res.json(review);
}