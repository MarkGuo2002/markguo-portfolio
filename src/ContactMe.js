import { FaMailBulk ,FaLinkedin } from 'react-icons/fa';

const ContactMe = () => {
    return (
        <div data-aos="fade-down" id="contacts" className="flex flex-col items-center py-12 px-0 lg:px-24">
            <div className='separator w-full h-[1px] bg-strokeGray mt-24 mb-8'></div>
            <h1>Contact Me</h1>
            <div className='flex flex-col items-center mt-10'>
                <p className='text-lg text-center'>I'm currently looking for new opportunities. If you're interested in working with me, feel free to reach out to me via Gmail or Linkedin directly ;) </p>
                <div className='flex gap-6 mt-6 items-center text-gray-700 italic'>
                    < FaMailBulk size={"1.5rem"}/>
                    <a href="mailto:markguo2002@gmail.com" className='flex items-center gap-2 text-gray-300 font-semibold hover:brightness-75 cursor-pointer transition-all'>
                        markguo2002@gmail.com
                    </a>
                </div>
                <div className='flex gap-6 mt-6 items-center text-gray-700 italic'>
                    < FaLinkedin size={"1.5rem"}/>
                    <a href="https://www.linkedin.com/in/mark-guo-620512196/" className='flex items-center gap-2 text-gray-300 font-semibold hover:brightness-75 cursor-pointer transition-all'>
                        https://www.linkedin.com/in/mark-guo-620512196/
                    </a>
                </div>
            </div>
            
            <p className='text-gray-500 text-xs mt-24'>© 2024 Mark Guo. All rights reserved.</p>
        </div>
    )
};

export default ContactMe;