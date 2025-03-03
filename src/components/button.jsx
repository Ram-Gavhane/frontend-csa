export function Button({name,fun}){
    return (
        <div className="flex justify-center items-center">
            <button className="w-[108px] h-[38px] text-[20px] rounded-sm bg-[#0D1821] hover:bg-[#0D1840]  active:bg-[#0D1821] " onClick={fun}>{name}</button>
        </div>
    )
}