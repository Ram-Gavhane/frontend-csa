export function Input({type,placeholder,name,value,fun}){
    return (
        <div className="bg-white mt-4.5 rounded-[12px] w-[289pxpx]">
            <input className="h-12.5 w-[289px] rounded-[12px] p-3 text-[#1A1A1A]" onChange={fun} type={type} placeholder={placeholder} name={name} value={value}/>
        </div>
    )
}