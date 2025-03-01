import { Button } from "../components/button";
import { Input } from "../components/input";

export function Signup(){

    return (
        <div className= "h-[90vh] bg-[#0D1821] flex justify-between items-center font-[Dm_Sans] mx-[168px] text-[#F0F4EF]">
            <div className="mb-64">
               <div className="text-[42px]">
                Crack your goal with <br className="mt-0"/>
                India's top educators
                </div> 
               <div className="mt-[24px]">Over 10 crore learners trust us for their preparation</div> 
            </div>
            <div className="h-[558px] w-[418px] bg-[rgb(52,73,102)] shadow-[0_4px_4px_-24px_rgba(52,73,102,0.3)] border-<2> rounded-lg flex items-center flex-col">
                <p className="text-[32px] mt-5.5 mb-5.5 ">Sign up</p>
                <div className="border w-[418px] border-[#0D1821]"></div>
                <div className="m-6">
                    <Input type={"text"} placeholder={"Username"}/>
                    <Input type={"text"} placeholder={"Email"}/>
                    <div className="flex">
                        <div className="bg-white mt-4.5 rounded-[12px]">
                            <input className="h-12.5 w-[140px] p-3 rounded-[12px] text-[#1a1a1a]" type="text" placeholder="First Name"/>
                        </ div>
                        <div className="bg-white mt-4.5 rounded-[12px] ml-2.25">
                            <input className="h-12.5 w-[140px] rounded-[12px] p-3 text-[#1a1a1a]" type="text" placeholder="Last Name"/>
                        </ div>
                    </div>
                    <Input type={"password"} placeholder={"Password"}/>
                    <Input type={"password"} placeholder={"Confirm Password"}/>
                </div>
                <div className="mt-4">
                    <Button name={"Sign up"} />
                </div>
            </div>
        </div>
    )
}