import { useEffect, useState } from "react"
import Router from "next/router"
import { useRouter } from "next/router"

export default function Product(){
    const [descriptionState, setDescriptionState] = useState(0)
    const {push,query} = useRouter()
    const [data, setData] = useState({})
    useEffect(() => {
        fetch("/api/products/"+query.id)
            .then(res => res.json())
            .then(res => setData(res))
    },[query])
    const props = {
        productName: "AZARINE",
        productImg: "/azarine.png",
        productJargon: "Hydrasoothe Sunscreen Gel SPF 45 PA++++",
        productRating: 4.9,
        productReviewCount: 150,
        productDescription: "Tabir surya wajah dalam bentuk gel (water base) yang sangat ringan, dingin, dan mudah meresap untuk seluruh jenis kulit termasuk kulit berminyak dan acne prone skin. Diformulasikan dengan kandungan bahan alami propolis, aloe vera, green tea, dan delima untuk melinfungi kulit dari sinar UV A & UV B serta menutrisi kulit.",
        productIngredient: "Aqua, Glycerin, Propanediol, Ethylhexyl Methoxycinnamate, Butyl Methoxydibenzoylmethane, Aloe Barbadensis Leaf Extract, Polymethyl methacrylate, Portulaca Oleracea Extract, Sodium Hyaluronate, Niacinamide, Cucumis Sativus (Cucumber) Extract, Tea (Camelia Sinensis) Extract, Punica Granatum Fruit Extract, Phenoxyethanol, Octocrylene, Butylene Glycol, Sodium Acrylates/C10-30 Alkyl Acrylates Crosspolymer, Propolis, Picea Abies Extract, Allantoin, Xanthan Gum*, Panthenol, Disodium EDTA, Fragrance, Lechitin.(Note: *Ingredients From Natural Resources)",
        productReview: [
            {
                username: "@muthiaazzhr",
                review: "texturenya ringan banget kayak gapake apa2, no whitecast, nggak lengket juga. make up friendly juga. bagus banget, recommended banget buat yang oily skin maupun dryskin",
                rating: 5.0
            },
            {
                username: "@olabola",
                review: "ga cocok di kulit dry sensiku:( im sorry azarine. kita tidak berjodoh. baru 3kali pake udh ga dipake lg. mo dihibahin tp gatau ke mana. ada ga sih yg tempat hibahin skincare gt? diriku banyak skincare ga kepake",
                rating: 3.5
            }
        ]
    }
    return(
        <main
            className="bg-[#F4EBD0] py-20 flex flex-col items-center"
        >
            <div>
                <div
                    className="flex"
                >
                    <img className="w-[300px] aspect-square" src={data.productImg} alt="" />
                    <div
                        className="ml-20"
                    >
                        <h2 className="text-[#023020] text-[30px] font-dosis font-medium ">{data.brand}</h2>
                        <p className="font-dosis text-[#023020] text-[35px] mt-3">{data.productName}</p>
                        <p className="font-dosis text-[#023020] text-[20px] mt-3">{data.price}</p>
                        <p className="font-dosis text-[#023020] text-[20px] mt-3">{data.productSize}</p>
                        <div
                            className="flex items-center mt-3"
                        >
                            <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M26.3181 19.4302C25.8943 19.8409 25.6996 20.4348 25.7961 21.0173L27.2507 29.0673C27.3734 29.7496 27.0854 30.4401 26.5144 30.8344C25.9548 31.2434 25.2104 31.2925 24.6001 30.9653L17.3535 27.1857C17.1015 27.0515 16.8217 26.9795 16.5354 26.9714H16.092C15.9382 26.9943 15.7876 27.0434 15.6502 27.1186L8.40193 30.9162C8.04361 31.0962 7.63784 31.16 7.24025 31.0962C6.27163 30.9129 5.62534 29.9901 5.78405 29.0166L7.24025 20.9666C7.33678 20.3792 7.14208 19.782 6.71831 19.3648L0.810072 13.6382C0.315946 13.1588 0.144148 12.4388 0.36994 11.7893C0.589188 11.1413 1.14876 10.6685 1.8245 10.5621L9.9563 9.38246C10.5748 9.31865 11.118 8.94233 11.3961 8.38603L14.9794 1.03959C15.0644 0.875972 15.1741 0.725443 15.3066 0.597822L15.4539 0.483289C15.5308 0.398208 15.6191 0.327852 15.7173 0.270586L15.8956 0.205139L16.1738 0.0906067H16.8626C17.4778 0.154418 18.0194 0.522558 18.3024 1.07231L21.9331 8.38603C22.1949 8.92106 22.7038 9.29247 23.2911 9.38246L31.4229 10.5621C32.1101 10.6603 32.6844 11.1348 32.9119 11.7893C33.1262 12.4454 32.9413 13.1653 32.4374 13.6382L26.3181 19.4302Z" fill="#3F3533"/>
                            </svg>
                            <p className="ml-3 text-[#3F3533] text-lg font-lato">{data.rating?.toFixed(1)} ({data.count})</p>
                            <button
                                className="underline text-[#3F3533] font-lato ml-3"
                                onClick={() => setDescriptionState(2)}
                            >
                                See Reviews
                            </button>
                        </div>
                        <button
                            className="mt-10 w-full py-4 text-center bg-[#8A9A5B] text-[#3F3533] rounded-2xl text-lg"
                            onClick={() => push("/add-review/"+query.id)}
                        >
                            Write Review
                        </button>
                    </div>
                </div>
                <div
                    className="mt-16"
                >
                    <button className={`font-dosis text-lg text-[#023020] ${descriptionState == 0 && "underline"}`} onClick={() => setDescriptionState(0)}>
                        Description
                    </button>
                    <button className={`font-dosis text-lg text-[#023020] ${descriptionState == 1 && "underline"} ml-14`} onClick={() => setDescriptionState(1)}>
                        Ingredients
                    </button>
                    <button className={`font-dosis text-lg text-[#023020] ${descriptionState == 2 && "underline"} ml-14`} onClick={() => setDescriptionState(2)}>
                        Reviews
                    </button>
                </div>
                {
                    descriptionState == 0 && 
                    <p
                        className="font-dosis text-black text-lg max-w-4xl mt-5"
                    >
                        {data.description || data["description\n"]}
                    </p>
                }
                {
                    descriptionState == 1 && 
                    <p
                        className="font-dosis text-black text-lg max-w-4xl mt-5"
                    >
                        {data.ingredients}
                    </p>
                }
                {
                    descriptionState == 2 && data.reviews.length > 0 &&
                    data.reviews.map((v,i) => 
                        <div
                            className="w-full bg-[#FCF4DB] rounded-2xl p-3 mt-4"
                            key={"review"+i}
                        >
                            <div
                                className="w-full flex justify-between items-center"
                            >
                                <p className="text-[#023020] text-xl font-bold">@{v.user.username}</p>
                                <p className="text-[#023020] text-xl font-lato p-2 bg-[#8A9A5B] rounded-2xl">{v.rating.toFixed(1)}</p>
                            </div>
                            <p className="text-[#023020] text-xl mt-4 max-w-4xl font-inter">{v.review}</p>
                        </div>
                    )
                }
            </div>
        </main>
    )
}