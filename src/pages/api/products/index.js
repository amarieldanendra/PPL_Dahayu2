import clientPromise from "@/lib/mongodb";
export default async function handler(req,res){
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)
    
    const products = await db.collection("product").find().toArray()
    return res.json(products)
}