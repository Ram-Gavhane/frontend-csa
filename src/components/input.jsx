export function Input({type,placeholder}){
    return (
        <div className="bg-white mt-4.5 rounded-[12px] w-[289pxpx]">
            <input className="h-12.5 w-[289px] rounded-[12px] p-3 text-[#1A1A1A]" type={type} placeholder={placeholder}/>
        </div>
    )
}