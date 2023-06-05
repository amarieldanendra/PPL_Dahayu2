// Komponen best product untuk landing page
import Image from "next/image"
import Router from "next/router"
import { useEffect, useState } from "react"
import { Carousel, initTE, Button } from "tw-elements"


export default function BestProduct(){
    const [bestProduct, setBestProduct] = useState([])
    useEffect(() => {
        initTE({ Carousel });
    },[])
    useEffect(() => {
        fetch("/api")
            .then(res => res.json())
            .then(res => {
                setBestProduct(res)
            })
    }, [])
    return(
        <div
            className="w-full bg-[#F4EBD0] py-[43px] px-[75px]"
            id="bestProducts"
        >
            <h2 className="font-dosis font-bold text-[35px] text-[#023020] text-center">Best Products</h2>
            {/* Berikut merupakan carousel yang digunakan */}

            {   bestProduct.length > 0 &&
                <div
                    id="bestProductCarousel"
                    className="relative mt-5"
                    data-te-carousel-init
                    data-te-carousel-slide
                >
                    <div
                        className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
                    >
                        {
                            bestProduct && [...Array(Math.ceil(bestProduct.length/2))].map((v,i) => {
                                return(
                                    <div
                                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                                        data-te-carousel-active={i==0}
                                        data-te-carousel-item
                                        style={{backfaceVisibility: "hidden"}}
                                        key={"bestProductSlide"+i}
                                    >
                                        <div
                                            className="w-full flex justify-around my-1"
                                        >
                                            {
                                                bestProduct.slice(0+(i*2), 2+(i*2)).map((v,i) => {
                                                    return(
                                                        <div
                                                            className="px-[30px] py-[50px] mix-blend-normal shadow-[0_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px] bg-[#F4EBD0]"
                                                        >
                                                            <Image width={300} height={200} src={v.productImg} />
                                                            <div
                                                                className="flex justify-between items-center mt-5"
                                                            >
                                                                <p className="font-dosis font-semibold text-[25px] text-[#023020]">{v.brand}</p>
                                                                <div
                                                                    className="px-[14px] py-[7px] flex items-center bg-[#8A9A5B] rounded-full"
                                                                >
                                                                    <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M13.9321 9.89968C13.7162 10.1088 13.6171 10.4113 13.6662 10.708L14.4071 14.808C14.4696 15.1555 14.3229 15.5072 14.0321 15.708C13.7471 15.9163 13.3679 15.9413 13.0571 15.7747L9.36625 13.8497C9.23791 13.7813 9.09541 13.7447 8.94958 13.7405H8.72375C8.64541 13.7522 8.56875 13.7772 8.49875 13.8155L4.80708 15.7497C4.62458 15.8413 4.41791 15.8738 4.21541 15.8413C3.72208 15.748 3.39291 15.278 3.47375 14.7822L4.21541 10.6822C4.26458 10.383 4.16541 10.0788 3.94958 9.86635L0.940414 6.94968C0.688748 6.70552 0.601248 6.33885 0.716248 6.00802C0.827914 5.67802 1.11291 5.43718 1.45708 5.38302L5.59875 4.78218C5.91375 4.74968 6.19041 4.55802 6.33208 4.27468L8.15708 0.533016C8.20041 0.449683 8.25625 0.373016 8.32375 0.308016L8.39875 0.249683C8.43791 0.206349 8.48291 0.170516 8.53291 0.141349L8.62375 0.108016L8.76541 0.0496826H9.11625C9.42958 0.0821826 9.70541 0.269683 9.84958 0.549683L11.6987 4.27468C11.8321 4.54718 12.0912 4.73635 12.3904 4.78218L16.5321 5.38302C16.8821 5.43302 17.1746 5.67468 17.2904 6.00802C17.3996 6.34218 17.3054 6.70885 17.0487 6.94968L13.9321 9.89968Z" fill="#3F3533"/>
                                                                    </svg>
                                                                    <p className="text-[#3F3533] font-lato text-xl ml-2">{v.averageRating}</p>
                                                                </div>
                                                            </div>
                                                            <p className="font-dosis text-xl mt-5 text-[#023020]">{v.productName}</p>
                                                            <div
                                                                className="w-full flex justify-center mt-14"
                                                            >
                                                                <button onClick={() => Router.push("/product/"+v._id)} className="px-5 py-3 bg-[#8A9A5B] rounded-[15px] text-[#F4EBD0] font-bold text-2xl mx-auto">See Reviews</button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>  
                                )
                            })
                        }                    
                    </div>

                    <button
                        className="absolute bottom-0 left-0 top-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#bestProductCarousel"
                        data-te-slide="prev">
                        <span className="inline-block h-8 w-8">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.2825 24.5462C13.5768 24.2437 13.7309 23.8586 13.7448 23.3911C13.7587 22.9235 13.618 22.5385 13.3226 22.236L5.45748 14.1502H23.3949C23.8496 14.1502 24.2311 13.9917 24.5393 13.6749C24.8475 13.3581 25.0011 12.9664 25 12.5C25 12.0325 24.8459 11.6403 24.5377 11.3234C24.2295 11.0066 23.8486 10.8487 23.3949 10.8498H5.45748L13.3226 2.76403C13.6169 2.4615 13.7576 2.07646 13.7448 1.60891C13.732 1.14136 13.5779 0.756325 13.2825 0.453795C12.9882 0.151264 12.6137 0 12.1589 0C11.7041 0 11.3296 0.151264 11.0353 0.453795L0.441439 11.3449C0.280926 11.4824 0.16696 11.6546 0.0995445 11.8614C0.0321274 12.0682 -0.00104523 12.2811 2.47955e-05 12.5C2.47955e-05 12.72 0.0331974 12.9263 0.0995445 13.1188C0.16589 13.3113 0.279856 13.4901 0.441439 13.6551L11.0353 24.5462C11.3296 24.8487 11.7041 25 12.1589 25C12.6137 25 12.9882 24.8487 13.2825 24.5462Z" fill="#777979"/>
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >
                            Previous
                        </span>
                    </button>
                    <button
                        className="absolute bottom-0 right-0 top-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                        type="button"
                        data-te-target="#bestProductCarousel"
                        data-te-slide="next">
                        <span className="inline-block h-8 w-8">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.7175 24.5462C11.4232 24.2437 11.2691 23.8586 11.2552 23.3911C11.2413 22.9235 11.382 22.5385 11.6774 22.236L19.5425 14.1502H1.60514C1.15035 14.1502 0.768865 13.9917 0.460679 13.6749C0.152494 13.3581 -0.00106454 12.9664 5.55409e-06 12.5C5.55409e-06 12.0325 0.154099 11.6403 0.462284 11.3234C0.77047 11.0066 1.15142 10.8487 1.60514 10.8498H19.5425L11.6774 2.76403C11.3831 2.4615 11.2424 2.07646 11.2552 1.60891C11.268 1.14136 11.4221 0.756325 11.7175 0.453795C12.0118 0.151264 12.3863 0 12.8411 0C13.2959 0 13.6704 0.151264 13.9647 0.453795L24.5586 11.3449C24.7191 11.4824 24.833 11.6546 24.9005 11.8614C24.9679 12.0682 25.001 12.2811 25 12.5C25 12.72 24.9668 12.9263 24.9005 13.1188C24.8341 13.3113 24.7201 13.4901 24.5586 13.6551L13.9647 24.5462C13.6704 24.8487 13.2959 25 12.8411 25C12.3863 25 12.0118 24.8487 11.7175 24.5462Z" fill="#023020"/>
                            </svg>
                        </span>
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >
                            Next
                        </span>
                    </button>
                </div>
            }
        </div>
    )
}