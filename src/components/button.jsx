export function Button({name}){
    return (
        <div className="flex justify-center items-center">
            <button className="w-[108px] h-[38px] text-[20px] rounded-sm bg-[#0D1821] hover:bg-[#0D1840] focus:outline-offset-2 focus:outline-violet-500 active:bg-[#0D1821] ">{name}</button>
        </div>
    )
}