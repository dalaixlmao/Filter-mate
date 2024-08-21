import Export from "./Export"
import Import from "./Import"
export default function MoveFilter({render, setRender}:{render:boolean, setRender:(a:boolean)=>void}){
    return <div className="flex flex-row justify-center w-full items-center border-b border-white/10 pb-3">
        <Import render={render} setRender={setRender}/>
        <Export />
        </div>
}