export default function SearchBar(){
    return <div className="mt-8">
        <input className="bg-white/10 px-3 py-1 rounded-md focus:border-white/60 border-white/10 border" type={"text"} placeholder="Enter the planet name" />
        <button className="bg-white text-black px-3 py-1 rounded-md ml-2 hover:bg-white/30">Search</button>
    </div>
}