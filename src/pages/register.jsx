import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
export default function Register(){
    const {push} = useRouter()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {status} = useSession()
    useEffect(() => {
        if(status == "authenticated") push("/")
    },[status])
    const onSubmit = () => {
        fetch("/api/register", {
            method: "POST",
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
            })
        })
            .then(res => {
                if(res.ok){
                    alert("Registrasi berhasil!!")
                    push("/login")
                }
            })
    }
    return(
        <main>
            {/* Form untuk register */}
            <div className="w-full py-10 bg-[#F4EBD0] flex justify-center items-center">
                <div
                    className="w-1/3 px-[30px] py-[10px] shadow-[0_0px_4px_3px_rgba(0,0,0,0.25)] rounded-[15px]"
                >
                    <p className="font-dosis font-bold text-[#023020] text-[35px] text-center">Register</p>
                    <div
                        className="w-full mt-[70px] flex justify-between"
                    >
                        <div
                            className="w-[49%] flex flex-col"
                        >
                            <label className="font-dosis text-2xl text-[#023020]" htmlFor="firstName">First Name</label>
                            <input value={firstName} onChange={(e) => setFirstName(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="text" name="firstName" id="firstName" />
                        </div>
                        <div
                            className="w-[49%] flex flex-col"
                        >
                            <label className="font-dosis text-2xl text-[#023020]" htmlFor="lastName">Last Name</label>
                            <input value={lastName} onChange={e => setLastName(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="text" name="lastName" id="lastName" />
                        </div>
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="username">Username</label>
                        <input value={username} onChange={e => setUsername(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="text" name="username" id="username" />
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="email">Email</label>
                        <input value={email} onChange={e => setEmail(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="text" name="email" id="email" />
                    </div>
                    <div
                        className="mt-10 flex flex-col"
                    >
                        <label className="font-dosis text-2xl text-[#023020]" htmlFor="password">Password</label>
                        <input value={password} onChange={e => setPassword(e.currentTarget.value)} className="mt-2 bg-[#D9D9D9] h-[40px] rounded-[15px] text-[#023020] p-2" type="password" name="password" id="password" />
                    </div>
                    
                    <div
                        className="w-full flex justify-center mt-14"
                    >
                        <button onClick={onSubmit} className="px-5 py-3 bg-[#8A9A5B] rounded-[15px] text-[#F4EBD0] font-bold text-2xl mx-auto">Register</button>
                    </div>
                </div>
            </div>
        </main>
    )
}