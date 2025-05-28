import React from 'react'
import { IoClose } from 'react-icons/io5';

const Dialog = ({ imageSrc, setImageSrc }: { imageSrc: string, setImageSrc: (imageSrc: string) => void }) => {
  return (
    <section 
      onClick={() => setImageSrc("")}
      className={`fixed inset-0 z-50 w-screen h-screen overflow-y-scroll bg-black/70 ${imageSrc ? 'flex flex-col justify-center items-center gap-2' : 'hidden'}`}
    >
        <div className='h-full w-full flex flex-col items-center gap-2'>
            <div onClick={(e) => e.stopPropagation()} className='flex justify-end w-full max-w-4xl px-3 pt-6'>
                <button 
                className="text-2xl text-white font-bold cursor-pointer outline-none"
                onClick={() => setImageSrc("")}
                >
                <IoClose />
                </button>  
            </div>
            <div onClick={(e) => e.stopPropagation()} className="w-full max-w-4xl px-3 pb-3 m-auto">
                {imageSrc && <img src={imageSrc} alt="Menu" className="w-full" />}
            </div>
        </div>

    </section>
  )
}

export default Dialog