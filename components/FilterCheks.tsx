export default function FilterCheck(){
    return <div className="flex flex-row items-center">
        <input  type="checkbox" className="appearance-none bg-white/10 checked:bg-blue-500 h-4 w-4 rounded-md cursor pointer"/>
        <label className="ml-2 text-xs font-light">Red</label>
    </div>
}