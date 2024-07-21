import photo from './assets/work photo.jpeg'
import cvFile from './assets/cv.pdf'
import { FaFileDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="hero-container px-36">

            <div className='gradient-decoration w-[70vh] h-[40vh] rounded-[100%] z-0 bg-red-100 absolute top-0 right-0 blur-[150px] opacity-65'></div>
            <div className='font-extrabold text-4xl flex items-center gap-5 z-20'>
                <img src={photo} alt='Mark Photo' className='w-24 h-24 rounded-full shadow-lg z-20'/>
                <h1 className='z-20'>Hi!🙌<br></br>I'm Mark Guo!</h1>
            </div>
            <p className='font-semibold text-xl py-8 z-20'>
                I’m a <span className='text-primary'>software engineer</span> with a strong interest in distributed systems and cloud solutions. Skilled in Python, Web development, AWS, C and Linux.
            </p>
            <div className='link-container flex gap-6 z-20'>
                <a href={cvFile} download="Mark_Guo_CV.pdf">
                    <div className='z-20 flex items-center gap-4 cv-container px-4 py-2 bg-primary text-white rounded-md font-semibold hover:brightness-75 cursor-pointer transition-all'>
                        <p className='z-20'>Get my CV</p>
                        <FaFileDownload size={20}/>
                    </div>
                </a>

                <a href='https://www.linkedin.com/in/mark-guo-620512196/'>
                    <div className='z-20 link-container p-2 bg-white border-2 border-strokeGray flex items-center justify-center rounded-lg hover:brightness-90 transition-all group cursor-pointer'>
                        <FaLinkedin size={24} className='group-hover:rotate-12 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-blue-600 transition-all '/>

                    </div>
                </a>
                <a href='https://github.com/MarkGuo2002'>
                    <div className='z-20 link-container p-2 bg-white border-2 border-strokeGray flex items-center justify-center rounded-lg hover:brightness-90 transition-all group cursor-pointer'>
                        <FaGithub size={24} className='group-hover:rotate-12 group-hover:translate-x-1 group-hover:scale-110 group-hover:text-blue-600 transition-all '/>

                    </div>
                </a>

            </div>
        </div>
    );
}

export default Hero; 