import { useRouter } from "next/router"
import { useEffect, useState } from "react"
export default function SelectProduct(){
    const [products, setProducts] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState([])
    const {push} = useRouter()
    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(res => {
                setDisplayedProducts(res)
            })
    },[])
    const onSearch = (e) => {
        let temp = []
        products.map(v => {
            if(v.brand.toLowerCase().includes(e.currentTarget.value) || v.productName.toLowerCase().includes(e.currentTarget.value) || v.kategori.toLowerCase().includes(e.currentTarget.value)){
                temp.push(v)
            }
        })
        setDisplayedProducts(temp)
    }
    return(
        <main
            className="bg-[#F4EBD0] py-20 flex flex-col px-[75px]"
        >
            <h2
                className="font-dosis text-3xl text-[#023020] font-medium"
            >
                Select Product
            </h2>
            <div
                className="w-full flex flex-col items-center"
            >
                <div
                    className="w-3/4 mt-7 relative"
                >
                    <input onChange={onSearch} className="w-full py-4 pl-16 bg-[#EFEFEF] rounded-xl text-[#023020]" type="text" placeholder="What do you want to review?" />
                    <svg className="absolute top-3 left-3 text-[#023020] font-dosis" width="30" height="30" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.25 43.75L26.25 29.75C25 30.75 23.5625 31.5417 21.9375 32.125C20.3125 32.7083 18.5833 33 16.75 33C12.2083 33 8.365 31.4267 5.22 28.28C2.075 25.1333 0.501667 21.29 0.5 16.75C0.5 12.2083 2.07333 8.365 5.22 5.22C8.36667 2.075 12.21 0.501667 16.75 0.5C21.2917 0.5 25.135 2.07333 28.28 5.22C31.425 8.36667 32.9983 12.21 33 16.75C33 18.5833 32.7083 20.3125 32.125 21.9375C31.5417 23.5625 30.75 25 29.75 26.25L43.8125 40.3125C44.2708 40.7708 44.5 41.3333 44.5 42C44.5 42.6667 44.25 43.25 43.75 43.75C43.2917 44.2083 42.7083 44.4375 42 44.4375C41.2917 44.4375 40.7083 44.2083 40.25 43.75ZM16.75 28C19.875 28 22.5317 26.9058 24.72 24.7175C26.9083 22.5292 28.0017 19.8733 28 16.75C28 13.625 26.9058 10.9683 24.7175 8.78C22.5292 6.59167 19.8733 5.49833 16.75 5.5C13.625 5.5 10.9683 6.59417 8.78 8.7825C6.59167 10.9708 5.49833 13.6267 5.5 16.75C5.5 19.875 6.59417 22.5317 8.7825 24.72C10.9708 26.9083 13.6267 28.0017 16.75 28Z" fill="#023020"/>
                    </svg>
                </div>
                <div
                    className="mt-8 flex flex-col w-full"
                >
                    {
                        displayedProducts.map((v,i) => (
                            <div
                                key={"productList#"+i}
                                className="flex p-10 border-b-2 w-full border-[#023020] cursor-pointer"
                                onClick={() => push("/add-review/" + v._id)}
                            >
                                <img className="aspect-square w-[200px]" src={v.productImg} alt="" />
                                <div
                                    className="ml-5 text-[#023020] font-dosis"
                                >
                                    <p className="font-bold text-2xl">{v.brand}</p>
                                    <p className="text-2xl mt-5">{v.productName}</p>
                                    <p className="text-2xl mt-5">{v.price}</p>
                                    <p className="text-2xl mt-5">{v.productSize}</p>
                                    <div
                                        className="flex font-lato mt-5"
                                    >
                                        <svg width="20" height="19" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.6513 15.0099C19.3384 15.3237 19.1946 15.7774 19.2659 16.2224L20.3401 22.3724C20.4307 22.8937 20.218 23.4212 19.7963 23.7224C19.3831 24.0349 18.8333 24.0724 18.3826 23.8224L13.0309 20.9349C12.8448 20.8324 12.6382 20.7774 12.4267 20.7712H12.0992C11.9857 20.7887 11.8745 20.8262 11.773 20.8837L6.42007 23.7849C6.15545 23.9224 5.85578 23.9712 5.56216 23.9224C4.84682 23.7824 4.36953 23.0774 4.48674 22.3337L5.56216 16.1837C5.63345 15.7349 5.48966 15.2787 5.1767 14.9599L0.813407 10.5849C0.448491 10.2187 0.321616 9.66868 0.488366 9.17243C0.650282 8.67743 1.06353 8.31618 1.56257 8.23493L7.56799 7.33368C8.02474 7.28493 8.42591 6.99743 8.63132 6.57243L11.2776 0.959928C11.3404 0.834928 11.4214 0.719928 11.5192 0.622428L11.628 0.534928C11.6848 0.469928 11.75 0.416178 11.8225 0.372428L11.9542 0.322428L12.1597 0.234928H12.6684C13.1227 0.283678 13.5227 0.564928 13.7317 0.984928L16.413 6.57243C16.6063 6.98118 16.9821 7.26493 17.4159 7.33368L23.4213 8.23493C23.9288 8.30993 24.3529 8.67243 24.5209 9.17243C24.6792 9.67368 24.5427 10.2237 24.1705 10.5849L19.6513 15.0099Z" fill="#3F3533"/>
                                        </svg>
                                        <p>
                                            {v.productRating} <span>({v.productReviewCount})</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    )
}