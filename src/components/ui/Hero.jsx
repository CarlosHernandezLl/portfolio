import StarsCanvas from "../../canvas/Stars"
import { GitHub } from '@mui/icons-material';
import { paragraph } from "../../constants";

const Button = ({ children }) => {
    return (
        <button className="bg-linear-to-r from-[#FF6B6B] to-[#FFD93D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded z-50">
            {children}
        </button>
    )
}

const HeroSection = () => {

    return (
        <>
            <main className="text-center w-screen min-h-screen flex flex-col justify-center relative items-center lg:px-24 xl:px-40 px-10 z-50 pointer-events-auto ">

                <StarsCanvas />

                <div className='flex flex-col items-center justify-center'>
                    <h1 className="text-5xl lg:text-7xl z-10 font-bold text-white ">FULL STACK</h1>
                    <div className='flex md:flex-row h-auto w-auto z-50 ' >
                        <h1 className="text-5xl lg:text-7xl font-bold text-white ">DEVEL</h1>
                        <div className='flex w-9 h-9 md:w-14 md:h-14 lg:w-16 lg:h-16 items-center justify-center'>
                            <a href='https://github.com/CarlosHernandezLl' target='_blank' rel='noreferrer'>
                                <GitHub className='scale-200 lg:scale-300 bg-white rounded-4xl ' />
                            </a>
                        </div>
                        <h1 className='text-5xl lg:text-7xl font-bold text-white md:pointer-events-none'>       PER</h1>
                    </div>

                </div>
                <p className="text-xl text-amber-100 mt-10 mb-10 z-50 md:pointer-events-none ">{paragraph}</p>
                <Button>LinkedIn</Button>
            </main>
        </>
    )
}

export default HeroSection;