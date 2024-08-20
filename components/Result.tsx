import Planet from "./Planet"

export default function Result(){
    return <div className="w-full">
        <Planet planet="Earth" shape="round" size="big" color="blue"/>
        <Planet planet="Mars" shape="round" size="small" color="red"/>
        <Planet planet="Venus" shape="round" size="medium" color="yellow"/>
    </div>
}