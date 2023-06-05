// Komponen Explore category untuk landing page
import Image from "next/image"
import { useRouter } from "next/router"
export default function ExploreCategory(){
    const {push} = useRouter()
    return(
        <div
            className="w-full bg-[#F4EBD0] py-[43px] px-[75px]"
            id="categories"
        >
            <h2 className="font-dosis font-bold text-[35px] text-[#023020] text-center">Categories you can explore</h2>
            {/* berikut merupakan componen carousel yang digunakan */}
            <div
                id="carouselCategory"
                className="relative mt-5"
                data-te-interval={false}
                data-te-slide={false}
                data-te-carousel-init
                data-te-carousel-slide
            >
                <div
                    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']"
                >
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        style={{backfaceVisibility: "hidden"}}
                    >
                        <div
                            className="w-full flex justify-around my-1 bg-[#F4EBD0] px-5"
                        >
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Serum")}
                            >
                                <Image  width={200} height={200} src="/sc6.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Serum</p>
                            </div>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Face Oil")}
                            >
                                <Image  width={200} height={200} src="/sc7.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Face Oil</p>
                            </div>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Eye Cream")}
                            >
                                <Image  width={200} height={200} src="/sc8.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Eye Cream</p>
                            </div>
                        </div>
                    </div>
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-item
                        data-te-carousel-active
                        style={{backfaceVisibility: "hidden"}}
                    >
                        <div
                            className="w-full flex justify-around my-1 bg-[#F4EBD0] px-5"
                        >
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Cleanser")}
                            >
                                <Image  width={200} height={200} src="/sc1.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Cleanser</p>
                            </div>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Toner")}
                            >
                                <Image  width={200} height={200} src="/sc2.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Toner</p>
                            </div>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Moisturizer")}
                            >
                                <Image  width={200} height={200} src="/sc3.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Moisturizer</p>
                            </div>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Sunscreen")}
                            >
                                <Image  width={200} height={200} src="/sc4.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Sunscreen</p>
                            </div>
                            <div
                                className="relative cursor-pointer"
                                onClick={() => push("/search-product?kategori=Facial Mask")}
                            >
                                <Image  width={200} height={200} src="/sc5.png" />
                                <p className="absolute left-1 bottom-1 text-[12px] font-semibold text-[#023020]">Facial Mask</p>
                            </div>
                        </div>
                    </div>                        
                </div>

                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselCategory"
                    data-te-slide="prev">
                    <span className="inline-block h-8 w-8">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.2825 24.5462C13.5768 24.2437 13.7309 23.8586 13.7448 23.3911C13.7587 22.9235 13.618 22.5385 13.3226 22.236L5.45748 14.1502H23.3949C23.8496 14.1502 24.2311 13.9917 24.5393 13.6749C24.8475 13.3581 25.0011 12.9664 25 12.5C25 12.0325 24.8459 11.6403 24.5377 11.3234C24.2295 11.0066 23.8486 10.8487 23.3949 10.8498H5.45748L13.3226 2.76403C13.6169 2.4615 13.7576 2.07646 13.7448 1.60891C13.732 1.14136 13.5779 0.756325 13.2825 0.453795C12.9882 0.151264 12.6137 0 12.1589 0C11.7041 0 11.3296 0.151264 11.0353 0.453795L0.441439 11.3449C0.280926 11.4824 0.16696 11.6546 0.0995445 11.8614C0.0321274 12.0682 -0.00104523 12.2811 2.47955e-05 12.5C2.47955e-05 12.72 0.0331974 12.9263 0.0995445 13.1188C0.16589 13.3113 0.279856 13.4901 0.441439 13.6551L11.0353 24.5462C11.3296 24.8487 11.7041 25 12.1589 25C12.6137 25 12.9882 24.8487 13.2825 24.5462Z" fill="#777979"/>
                        </svg>
                    </span>
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselCategory"
                    data-te-slide="next">
                    <span className="inline-block h-8 w-8">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.7175 24.5462C11.4232 24.2437 11.2691 23.8586 11.2552 23.3911C11.2413 22.9235 11.382 22.5385 11.6774 22.236L19.5425 14.1502H1.60514C1.15035 14.1502 0.768865 13.9917 0.460679 13.6749C0.152494 13.3581 -0.00106454 12.9664 5.55409e-06 12.5C5.55409e-06 12.0325 0.154099 11.6403 0.462284 11.3234C0.77047 11.0066 1.15142 10.8487 1.60514 10.8498H19.5425L11.6774 2.76403C11.3831 2.4615 11.2424 2.07646 11.2552 1.60891C11.268 1.14136 11.4221 0.756325 11.7175 0.453795C12.0118 0.151264 12.3863 0 12.8411 0C13.2959 0 13.6704 0.151264 13.9647 0.453795L24.5586 11.3449C24.7191 11.4824 24.833 11.6546 24.9005 11.8614C24.9679 12.0682 25.001 12.2811 25 12.5C25 12.72 24.9668 12.9263 24.9005 13.1188C24.8341 13.3113 24.7201 13.4901 24.5586 13.6551L13.9647 24.5462C13.6704 24.8487 13.2959 25 12.8411 25C12.3863 25 12.0118 24.8487 11.7175 24.5462Z" fill="#023020"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}