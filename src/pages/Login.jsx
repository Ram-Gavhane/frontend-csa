import { Link } from "react-router-dom";
import { Button } from "../components/button";
import { Input } from "../components/input";

export function Login() {
  return (
    <div className="h-[90vh] bg-[#0D1821] flex justify-between items-center font-[Dm_Sans] mx-[168px] text-[#F0F4EF]">
      <div className="h-[360px] w-[418px] bg-[rgb(52,73,102)] shadow-[0_4px_4px_-24px_rgba(52,73,102,0.3)] border-<2> rounded-lg flex items-center flex-col mb-32">
        <p className="text-[32px] mt-5.5 mb-5.5 ">Login</p>
        <div className="border w-[418px] border-[#0D1821]"></div>
        <div className="m-4">
          <Input type={"text"} placeholder={"Username/Email"} />
          <Input type={"password"} placeholder={"Password"} />
        </div>
        <div className="mt-1">
          <Button name={"Login"} />
        </div>
        <div className="mt-4.5">
          Don't have an account?{" "}
          <Link to="/signup" className="text-[#0D1821] ">
            Sign up
          </Link>
        </div>
      </div>
      <div className="mb-48">
        <div className="text-[42px]">
          Crack your goal with <br className="mt-0" />
          India's top educators
        </div>
        <div className="mt-[24px]">
          Over 10 crore learners trust us for their preparation
        </div>
      </div>
    </div>
  );
}
