import { Children } from "react"

export const CardAnimated = ({ text, array }) => {

    return (
        <div className='relative flex flex-col z-30 items-center rounded-lg justify-center overflow-hidden
                        h-58 xl:h-72 p-[3px]
                        before:absolute before:-top-1/2 before:-left-1/2 before:w-64 xl:before:w-80 before:h-60 xl:before:h-72 before:bg-gradient-custom
                        before:origin-bottom-right before:animate-animar-borde-slow before:z-20
                        '>
            <div className='bg-primary w-auto rounded-lg h-56 xl:w-96 xl:h-80 flex flex-col z-30 items-center shadow-primary shadow-2xl  '>
                <h3 className='text-[#049FFF] px-10 py-5 font-thin text-xl xl:text-3xl'>{text}</h3>
                <div className='grid grid-cols-4 gap-4 z-30 scale-[.8] xl:scale-100'>
                    {array}
                </div>
            </div>
        </div>
    )
}