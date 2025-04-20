import Canvas from "../components/agent/canvas";
import Input from "../components/agent/input_section";



export default function(){
    return(
        <div className="px-1 flex-1 justify-center relative">
            <Canvas />
            <Input />
        </div>
    )
}