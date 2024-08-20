import FilterCheck from "./FilterCheks"

export default function FilterType({name}:{name:string}){
    return <div className="mb-12 ml-12 md:ml-24">
        <div className="mb-2">{name}</div>
    <FilterCheck />
    </div>
}