export default function FilterCheck({name, id, type}:{name:string, id:string, type:string}){
    


    return <div className="flex flex-row items-center mb-2">
        <input  type="checkbox" className="appearance-none bg-white/10 checked:bg-blue-500 h-4 w-4 rounded-md cursor pointer"/>
        <label className="ml-2 text-xs font-light">{name}</label>
    </div>
}