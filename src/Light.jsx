
import { useState } from "react"
function Light(){

   const [color, setcolor]= useState(" ")
const [ isOn, setIsOn]= useState(false)

    // update the light on
    const handleOn= () => {
        setcolor("yellow")
        setIsOn(true)
    }
    // update the button off
    const handleOff= () => {
        setcolor("white")
        setIsOn(false)
    }
    return <div className="flex justify-center">
<div>
    <div  style={{backgroundColor:color}} className="w-[350px] h-[350px] rounded-full border-2 border-black  mt-5"> </div>
    <button style={{backgroundColor: isOn == true ? "red" : " "}}  onClick={handleOn}  className="bg-orange-600 text-3xl px-3 py-2 m-3 ml-20   rounded">ON</button>
    <button  style={{backgroundColor: isOn == false ? "red" : " "}} onClick={handleOff} className="bg-orange-600 text-3xl px-3 py-2 m-3 rounded">Off</button>
</div>
    </div>
}

export default Light