import { useRouter } from "next/router"
import { useEffect, useState } from "react"
export default function SearchProduct(){
    const [products, setProducts] = useState([])
    const [displayedProducts, setDisplayedProducts] = useState([])
    const {push,query} = useRouter()
    useEffect(() => {
        fetch("/api/products")
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                if(query.kategori != undefined) {
                    setDisplayedProducts(res.filter(v => v.kategori.toLowerCase() == query.kategori.toLocaleLowerCase()))
                }else{
                    setDisplayedProducts(res)
                }
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
                Search Product
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
                                onClick={() => push("/product/" + v._id)}
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
                    {
                        displayedProducts.length <= 0 &&
                        <div className="px-[55px] py-[50px] bg-white rounded-3xl w-fit m-auto">
                            <svg width="250" height="200" viewBox="0 0 250 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="250" height="200" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M207 65C210.866 65 214 68.134 214 72C214 75.866 210.866 79 207 79H167C170.866 79 174 82.134 174 86C174 89.866 170.866 93 167 93H189C192.866 93 196 96.134 196 100C196 103.866 192.866 107 189 107H178.826C173.952 107 170 110.134 170 114C170 116.577 172 118.911 176 121C179.866 121 183 124.134 183 128C183 131.866 179.866 135 176 135H93C89.134 135 86 131.866 86 128C86 124.134 89.134 121 93 121H54C50.134 121 47 117.866 47 114C47 110.134 50.134 107 54 107H94C97.866 107 101 103.866 101 100C101 96.134 97.866 93 94 93H69C65.134 93 62 89.866 62 86C62 82.134 65.134 79 69 79H109C105.134 79 102 75.866 102 72C102 68.134 105.134 65 109 65H207ZM207 93C210.866 93 214 96.134 214 100C214 103.866 210.866 107 207 107C203.134 107 200 103.866 200 100C200 96.134 203.134 93 207 93Z" fill="#FCF4DB"/>
                                <path d="M120.5 133C139.002 133 154 118.002 154 99.5C154 80.9985 139.002 66 120.5 66C101.998 66 87 80.9985 87 99.5C87 118.002 101.998 133 120.5 133Z" fill="#FCF4DB" stroke="#8A9A5B" stroke-width="2.5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M115.132 125.494C116.891 125.819 118.68 125.987 120.5 126C135.136 126 147 114.136 147 99.5C147 84.8645 135.136 73 120.5 73C116.74 73 113.164 73.7829 109.924 75.1946C104.294 77.6479 99.6816 81.9999 96.896 87.4419C95.0445 91.0589 94 95.1575 94 99.5C94 103.44 94.8599 107.179 96.4021 110.54C97.5032 112.94 98.9521 115.146 100.684 117.096" fill="white"/>
                                <path d="M115.132 125.494C116.891 125.819 118.68 125.987 120.5 126C135.136 126 147 114.136 147 99.5C147 84.8645 135.136 73 120.5 73C116.74 73 113.164 73.7829 109.924 75.1946C104.294 77.6479 99.6816 81.9999 96.896 87.4419C95.0445 91.0589 94 95.1575 94 99.5C94 103.44 94.8599 107.179 96.4021 110.54C97.5032 112.94 98.9521 115.146 100.684 117.096" stroke="#8A9A5B" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M103.797 120.075C105.946 121.821 108.372 123.237 111.001 124.247" stroke="#8A9A5B" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M148 126L154 132" stroke="#8A9A5B" stroke-width="2.5"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M153.03 131.03C151.138 132.923 151.138 135.992 153.03 137.884L164.116 148.97C166.008 150.862 169.077 150.862 170.97 148.97C172.862 147.077 172.862 144.008 170.97 142.116L159.884 131.03C157.992 129.138 154.923 129.138 153.03 131.03Z" fill="#F4EBD0" stroke="#8A9A5B" stroke-width="2.5"/>
                                <path d="M158 133L169 144" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M114 88C114 99.598 123.402 109 135 109C137.278 109 139.472 108.637 141.526 107.966C138.173 116.287 130.023 122.161 120.5 122.161C107.985 122.161 97.8394 112.015 97.8394 99.5C97.8394 88.1596 106.17 78.7648 117.045 77.1011C115.113 80.2793 114 84.0097 114 88Z" fill="#F4EBD0"/>
                                <path d="M121 81C119.727 81 118.482 81.1253 117.279 81.3642M113.645 82.4761C106.804 85.3508 102 92.1144 102 100" stroke="#023020" stroke-width="2.5" stroke-linecap="round"/>
                                <path d="M174.176 99.7773H166M180.5 92H163.324H180.5ZM187.5 92H185.279H187.5Z" stroke="#023020" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M84.1758 121.777H76M79.5 113H62.3242H79.5ZM56.5 113H52.2788H56.5Z" stroke="#023020" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p className="font-dosis text-[#4A4A4A] text-2xl text-center">
                                <span className="font-bold">Sorry! No results found :(</span><br/>
                                Try adjusting your search<br/>
                                to find what you are looking for
                            </p>
                            <button className="px-5 py-3 w-full mt-5 bg-[#8A9A5B] rounded-[15px] text-[#F4EBD0] font-bold text-2xl mx-auto">
                                Search Again
                            </button>
                        </div>
                    }
                </div>
            </div>
        </main>
    )
}