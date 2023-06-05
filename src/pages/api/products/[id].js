import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
export default async function handler(req,res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)
    
    const products = await db.collection("product").findOne({
        _id: new ObjectId(req.query.id)
    })
    const reviews = await db.collection("review").aggregate([
        {
            $match: {
                productId: new ObjectId(req.query.id)
            }
        },
        {
            $lookup: {
                from: "user",
                let: { localField: "$userId" },
                pipeline: [
                    {
                      $match: {
                        $expr: {
                          $eq: ["$_id", "$$localField"]
                        }
                      }
                    }
                ],
                as: "user"
            }
        },
        {
            $unwind: "$user"
        },
    ]).toArray()
    const jumlahAverage = await db.collection("review").aggregate([
        {
            $match: {
                productId: new ObjectId(req.query.id)
            }
        },
        {
            $group: {
                _id: "$productId",
                avgRating: {$avg: "$rating"},
                countRating: {$sum: 1}
            }
        }
    ]).toArray()
    console.log(jumlahAverage)
    return res.json({
        ...products,
        reviews: reviews,
        rating: jumlahAverage.length > 0 ? jumlahAverage[0].avgRating :  0,
        count: jumlahAverage.length > 0 ? jumlahAverage[0].countRating : 0,
    })
}