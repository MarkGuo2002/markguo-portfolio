import photo from './assets/work photo.jpeg'
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero-container px-16">
            <div className='font-extrabold text-4xl flex items-center gap-5'>
                <img src={photo} className='w-24 h-24 rounded-full shadow-lg'/>
                <h1>Hi👋<br></br>I'm Mark Guo!</h1>
            </div>
            <p className='font-semibold text-xl py-8'>
                I’m a <span className='text-primary'>software engineer</span> with a strong interest on distributed systems and cloud solutions. Skilled in Python, Web development, AWS, C and Linux.
            </p>
            <div className='link-container flex gap-6'>
                <div className='flex items-center gap-4 cv-container px-4 py-2 bg-primary text-white rounded-md font-semibold hover:brightness-75 cursor-pointer transition-all'>
                    <p>Get my CV</p>
                    <FaFileDownload size={20}/>
                </div>

                <div className='link-container p-2 bg-white border-2 border-strokeGray flex items-center justify-center rounded-lg hover:brightness-90 transition-all group cursor-pointer'>
                    <FaLinkedin size={24} className='group-hover:rotate-12 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-blue-600 transition-all '/>

                </div>
                <div className='link-container p-2 bg-white border-2 border-strokeGray flex items-center justify-center rounded-lg hover:brightness-90 transition-all group cursor-pointer'>
                    <FaGithub size={24} className='group-hover:rotate-12 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-blue-600 transition-all '/>

                </div>

            </div>
        </div>
    );
}

export default Hero; 