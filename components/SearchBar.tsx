export default function SearchBar(){
    return <div className="mt-8 w-full px-12 md:px-24 flex flex-row justify-center">
        <input className="w-full bg-white/10 px-3 py-1 rounded-md focus:border-white/60 border-white/10 border" type={"text"} placeholder="Enter the planet . . ." />
        <button className="bg-white text-black px-3 py-1 rounded-md ml-2 hover:bg-white/30">Search</button>
    </div>
}