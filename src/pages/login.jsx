import { useState, useEffect } from "react"
import { signIn } from "next-auth/react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
export default function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const {status} = useSession()
    const {push} = useRouter()
    useEffect(() => {
        if(status == "authenticated") push("/")
    },[status])
    const onSubmit = async (e) => {
        if(username === "" || password === ""){
            alert("Harap isi form dengan benar!!!")
            return
        }
        const res = await signIn("credentials", {
            username: username,
            password: password,
            redirect: false
        })
        if(res.ok)  push("/")
        if(!res.ok)  alert("Login invalid!!")
    }
    return(
        <main>
            {/* Form untuk login */}
            <div className="w-full py-10 bg-[#F4EBD0] flex justify-center items-center">
                <div
                    className="w-1/3 px-[30px] py-[10px] shadow-[0_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px]"
                >
                    <p className="font-dosis font-bold text-[#023020] text-[35px] text-center">Login</p>
                    <div
                        className="mt-[70px] flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="email">Email/Username</label>
                        <input value={username} onChange={e => setUsername(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="text" name="email" id="email" />
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="password">Password</label>
                        <input value={password} onChange={e => setPassword(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="password" name="password" id="password" />
                    </div>
                    <p className="font-dosis font-semibold text-[#023020] text-2xl mt-[40px]">Don’t have an account yet? <a className="text-[#8A9A5B] underline" href="/register">Register</a></p>
                    <div
                        className="w-full flex justify-center mt-14"
                    >
                        <button onClick={onSubmit} className="px-5 py-3 bg-[#8A9A5B] rounded-[15px] text-[#F4EBD0] font-bold text-2xl mx-auto">Login</button>
                    </div>
                </div>
            </div>
        </main>
    )
}