import FilterCheck from "./FilterCheks"

export default function FilterType({name}:{name:string}){
    return <div className="mb-12">{name}
    <FilterCheck />
    </div>
}