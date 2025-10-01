import { useState } from "react";
import Book from './Book.jsx'

function Food(props){
    const [showBook, setShowBook] = useState(false);
    return (
        <>
            <div className="w-[300px] h-fit flex flex-col p-4 rounded-xl bg-transparent shadow justify-between">
                <img className="w-[280px] h-[180px] rounded-lg" src={props.img} alt="" />
                <p className="text-lg ml-2 text-start text-[#bb7d3c] font-semibold font-[Maharlika]">{props.name}</p>
                <p className="text-lg ml-2 text-start text-black font-[Maharlika]">Time: {props.time} Minutes | Serves: 1</p>
                <p className="py-3 ml-2 text-xl font-bold font-[finlandica] text-[#bb7d3c]">₹{props.price1} <span className="line-through">₹{props.price2}</span></p>
                <button onClick={()=>setShowBook(!showBook)} className="px-6 py-2 bg-[#bb7d3c] font-[Maharlika] text-[#fff7f7] hover:bg-[#fff7f7] hover:text-[#bb7d3c] hover:ring-2  ">View Table</button>
            </div>

            {showBook && <Book/>}
        </>
    )
}
export default Food;