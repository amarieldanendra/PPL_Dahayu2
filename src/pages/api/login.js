import { signJwtAccessToken } from "@/lib/jwt";
import * as bcrypt from "bcrypt";
import clientPromise from "@/lib/mongodb";

export default async function handler(req,res){
    const body = JSON.parse(req.body);
    const client = await clientPromise
    const db =  client.db(process.env.MONGODB_DB)
    
    const user = await db.collection("user").findOne({
        $or: [
            {email: body.username},
            {username: body.username}
        ]        
    });

    if (user && (await bcrypt.compare(body.password, user.password))){
        const {password, ...userWithoutPass} = user;
        const accessToken = signJwtAccessToken(userWithoutPass);
        const result = {
            ...userWithoutPass,
            accessToken
        };
        console.log(result)
        return res.json(result);
    }
    else return res.json(null);
}