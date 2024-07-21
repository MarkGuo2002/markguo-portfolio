import { FaMoon } from 'react-icons/fa';
import logo from './assets/signature-nobg.png';
const Navbar = () => {
    return (
        <div className=' fixed top-0 w-full bg-bgGray z-30 drop-shadow-md'>
            <nav className="flex justify-center gap-4 border-b-2 items-center border-strokeGray px-8 py-2">
                <div className='left-panel flex'>
                <a href="#hero">
                    <img src={logo} alt="logo" className="h-8 w-12 mr-10  hidden lg:block" />
                </a>
                    <ul className="flex space-x-8 ">
                        <NavbarOption section="About me" refer="about"/>
                        <NavbarOption section="Skills" refer="skills"/>
                        <NavbarOption section="Projects" refer="projects"/>
                        <NavbarOption section="Contacts" refer="contacts "/>
                    </ul>
                </div>
                
                {/* <FaMoon size={20} className='hover:text-gray-600 transition-all'/>    lg:justify-between */}
            </nav>

        </div>
     
    );
}


const NavbarOption = ( {section, refer} ) => {
    return (
        <li className=" bg-bgGray hover:bg-boxBgGray px-2 py-1 rounded-md transition-all">
            <a href={`#${refer}`}>{section}</a>
        </li>
    );
};


export default Navbar;