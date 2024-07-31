import Hero from './Hero';

import Navbar from './Navbar';
import Body from './Body'



export default function Ling() {
    return (
        <div className="font-itim bg-an_pink" >
            < Navbar />
            <div className='main-container py-20 flex flex-col items-center px-4 lg:px-36'>
                <Hero />
                <Body />
                
            </div>
        </div>
    )
}