import Router from "next/router"
import { useState,useEffect } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/react"
export default function Profile(){
    const dummy = [
        {
            productBrand: "Azarine",
            productName: "Hydrasoothe Sunscreen Gel SPF 45 PA++++",
            productSize: 50,
            productRating: 5,
            productImage: "/azarine.png",
            productReview: "texturenya ringan banget kayak gapake apa2, no whitecast, nggak lengket juga. make up friendly juga. bagus banget, recommended banget buat yang oily skin maupun dryskin"
        }
    ]
    const [review, setReview] = useState([])
    const {data, status} = useSession()
    const {push} = useRouter()
    useEffect(() => {
        if(status == "unauthenticated")  push("/login")
        fetch("/api/profile")
            .then(res => res.json())
            .then(res => setReview(res))
    },[])
    return(
        <main
            className="bg-[#F4EBD0] py-20 flex flex-col px-[75px]"
        >
            <div
                className="flex items-center"
            >
                <img className="aspect-square w-[180px] rounded-full" src="/profPic.png" alt="" />
                <div className="ml-7">
                    <p className="font-dosis text-[#023020] text-3xl font-bold">{status == "authenticated" && data.user.firstName + " " + data.user.lastName}</p>
                    <p className="font-dosis text-[#023020] text-3xl font-medium mt-2">{status == "authenticated" && data.user.username}</p>
                </div>
            </div>
            <div
                className="flex justify-between"
            >
                <button
                    className="p-3 mt-10 mx-auto text-xl bg-[#8A9A5B] text-[#F4EBD0] w-[45%] rounded-xl"
                >
                    Edit Profile
                </button>
                <button
                    className="p-3 mt-10 mx-auto text-xl bg-[#8A9A5B] text-[#F4EBD0] w-[45%] rounded-xl"
                    onClick={() => Router.push("/select-product")}
                >
                    Write Review
                </button>
            </div>
            <div
                className="flex flex-col w-5/6 mt-10 mx-auto"
            >
                <h2
                    className="font-dosis text-3xl ml-1 text-[#023020] font-medium"
                >
                    Your Reviews
                </h2>
                <div
                    className="flex flex-col w-full"
                >
                    {
                        review.map((v,i) => (
                            <div
                                key={"ReviewList"+i}
                                className="p-5 flex-col bg-[#FCF4DB] rounded-xl mt-5"
                            >
                                <div
                                    className="flex justify-between"
                                >
                                    <div
                                        className="flex items-center"
                                    >
                                        <img className="aspect-square w-[200px]" src={v.product.productImg} alt="" />
                                        <div
                                            className="ml-5 text-[#023020] font-dosis"
                                        >
                                            <p className="font-bold text-2xl">{v.product.brand}</p>
                                            <p className="text-2xl mt-5">{v.product.productName}</p>
                                            <p className="text-2xl mt-5">{v.product.price}</p>
                                            <p className="text-2xl mt-5">{v.product.productSize}</p>
                                        </div>
                                    </div>
                                    <p
                                        className="font-lato p-2 text-[#023020] bg-[#8A9A5B] h-fit w-1/12 text-center text-xl rounded-full"
                                    >
                                        {v.rating.toFixed(1)}
                                    </p>
                                </div>
                                <p
                                    className="mt-5 font-inter text-[#023020]" 
                                >
                                    {v.review}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}