import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";
import { useState } from "react";
import axios from "axios";

export function Signup(){

    const [data, setData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        username:''
    })

    function handleChange(e){
        console.log(e.target.value);
        setData({...data,
            [e.target.name]:e.target.value,
        });
        console.log(data)
    }

    function submit(){
        axios.post("http://localhost:3000/user/signup",{
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName, 
            email: data.email, 
            password: data.password})
            .then(res=>{
              console.log(res)
              alert("signed up")
              console.log("done")
            }).catch(e=>{
              console.log(e)
            })
    }

    return (
        <div className= "h-[90vh] bg-[#0D1821] flex justify-between items-center font-[Dm_Sans] mx-[168px] text-[#F0F4EF]">
            <div className="mb-64 ">
               <div className="text-[42px]">
                Crack your goal with <br className="mt-0"/>
                India's top educators
                </div> 
               <div className="mt-[24px]">Over 10 crore learners trust us for their preparation</div> 
            </div>
            <div className="h-[558px] w-[418px] bg-[rgb(52,73,102)] shadow-[0_4px_4px_-24px_rgba(52,73,102,0.3)] border-<2> rounded-lg flex items-center flex-col ">
                <p className="text-[32px] mt-5.5 mb-5.5 ">Sign up</p>
                <div className="border w-[418px] border-[#0D1821]"></div>
                <div className="m-4">
                    <Input type={"text"} placeholder={"Username"} name={"username"} value={data.username} fun={handleChange}/>
                    <Input type={"text"} placeholder={"Email"} name={"email"} value={data.email} fun={handleChange}/>
                    <div className="flex">
                        <div className="bg-white mt-4.5 rounded-[12px]">
                            <input onChange={handleChange} name="firstName" value={data.firstName} className="h-12.5 w-[140px] p-3 rounded-[12px] text-[#1a1a1a]" type="text" placeholder="First Name"/>
                        </ div>
                        <div className="bg-white mt-4.5 rounded-[12px] ml-2.25">
                            <input onChange={handleChange} name="lastName" value={data.lastName} className="h-12.5 w-[140px] rounded-[12px] p-3 text-[#1a1a1a]" type="text" placeholder="Last Name"/>
                        </ div>
                    </div>
                    <Input type={"password"} placeholder={"Password"} name={"password"} value={data.password} fun={handleChange}/>
                    <Input type={"password"} placeholder={"Confirm Password"} />
                </div>
                <div className="mt-1">
                    <Button name={"Sign up"} fun={submit} />
                </div>
                <div className="mt-4.5">
                    Already have an account? <Link to="/login" className="text-[#0D1821]">Login</Link>
                </div>
            </div>
        </div>
    )
}
