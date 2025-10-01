import { useState } from 'react';
import './Nav.css';
import { LuMenu } from 'react-icons/lu';
import Book from './Book';

function Nav(){
    const [mob,setMob] = useState(false);
    const [showBook, setShowBook] = useState(false);
    const cancel = <p className='text-xl pr-2 font-semibold '>X</p>
    return (
        <>
            <div className='nav_container'>
                <img src="Chozha_Logo.webp" className='nav_logo' alt="" />
                <ul className='nav_list font-[Maharlika] '>
                    <a href='#'>Home</a>
                    <a href='#About'>About</a>
                    <a href='#Menu'>Food</a>
                    <li className='hover:cursor-pointer' onClick={()=>setShowBook(!showBook)}>Book Table</li>
                    <a href='#Footer'>Contact</a>
                </ul>

                <button className='md:hidden text-[#bb7d3c]' onClick={()=>setMob(!mob)}>{!mob? <LuMenu size={24}/>: cancel}</button>

                {
                    mob && (
                        <ul className='mob_nav font-[Maharlika] '>
                    <li>Home</li>
                    <li>About</li>
                    <li>Food</li>
                    <li onClick={()=>setShowBook(!showBook)}>Book Table</li>
                    <li>Contact</li>
                </ul>
                    )
                }
            </div>
            {showBook && <Book/>}
        </>
    );
}
export default Nav;