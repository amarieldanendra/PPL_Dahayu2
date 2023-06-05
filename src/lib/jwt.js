import jwt, { JwtPayload } from "jsonwebtoken";


const DEFAULT_SIGN_OPTION = {
    expiresIn: "4h"
}

export function signJwtAccessToken(payload, options=DEFAULT_SIGN_OPTION){
    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secret_key, options);
    return token;
}

export function verifyJwt(token){
    try {
        const secret_key = process.env.SECRET_KEY;
        const decoded = jwt.verify(token, secret_key);
        return decoded;
    }
    catch (e){
        console.log(e);
        return null;
    }
}