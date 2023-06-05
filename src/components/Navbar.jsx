// Komponen Navbar untuk layout pada website
import Image from "next/image"
import { useEffect, useState } from "react"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"
export default function Navbar(){
    const [href, setHref] = useState("")
    const [menu, setMenu] = useState(false)
    const {status} = useSession()
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHref(window.location.href)
        }
    },[])
    return(
        <nav
            className="w-full h-[82px] bg-[#8A9A5B] px-[75px] flex items-center justify-between"
        >
            <a href="/"><h1 className="font-hurricane text-[55px] m-0 text-[#F4EBD0]">Dahayu</h1></a>
            <div className="flex items-center">
                <a className="font-dosis text-[22px]" href="/">Home</a>
                <a className="font-dosis text-[22px] ml-7" href="/#categories">Categories</a>
                <a className="font-dosis text-[22px] ml-7" href="/search-product">Explore</a>
                {/* Mengecek apakah berada di page login/register */}
                {(!href.includes("login") && !href.includes("register")) && status == "authenticated" &&  <Image alt="" onClick={() => setMenu(!menu)} className="ml-7 cursor-pointer" width={55} height={55} src="/profPic.png" />}
                {!href.includes("login") && status == "unauthenticated" &&<a className="font-dosis text-[22px] ml-7" href="/login">Login</a>}
                {href.includes("login") && status == "unauthenticated" && <a className="font-dosis text-[22px] ml-7" href="/register">Register</a>}
            </div>
            {   menu &&
                <div
                    className="fixed w-fit font-dosis text-[#023020] text-xl right-20 top-20"
                >
                    <a className="px-4 py-2 text-inherit border-b-2 border-[#023020] bg-[#F4EBD0] w-[200px] block" href="/profile">
                        Profile
                    </a>
                    <a className="px-4 py-2 text-inherit border-b-2 border-[#023020] bg-[#F4EBD0] w-[200px] block" href="/select-product" >
                        Write Review
                    </a>
                    <a className="px-4 py-2 text-inherit bg-[#F4EBD0] w-[200px] block cursor-pointer" onClick={() => signOut()}>
                        Logout
                    </a>
                </div>
            }
        </nav>
    )
}