export function NavBar(){
    return (
        <div>
            <div className="h-[80px] flex place-content-between mx-[70px] ">
                <div className="text-[36px] pt-[12px]">
                   Project-C
                </div>
                <div className="pt-[24px]">
                    <span className="text-[16px] px-[24px]">Programs</span>
                    <span className="text-[16px] px-[24px]">Goals</span>
                    <span className="text-[16px] px-[24px]">Find Center</span>
                    <span className="text-[16px] px-[24px]">Contact us</span>
                </div>
            </div>
            <div className="border w-screen border-[#344966]"></div>
        </div>
    )
}