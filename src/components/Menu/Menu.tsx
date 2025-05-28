"use client"
import Image from "next/image";
import desktopImage from '../../../public/assets/plates.jpeg';
import mobileImage from '../../../public/assets/pasta.jpeg';
import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import { Dictionary } from '@/types';

const imageNames = [
  "0.jpg",
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
];

export default function Menu({ dictionary }: { dictionary: Dictionary }) {
  const [imageSrc, setImageSrc] = useState<string>("")

  useEffect(() => {
    if (imageSrc) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [imageSrc])
  
  return (
    <>
      <section className="min-h-[65vh] md:min-h-[85vh] relative flex items-center justify-center">
        <Image
          src={desktopImage}
          placeholder="blur"
          alt="Restaurant Magnifiko"
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-full object-cover absolute brightness-[0.4] hidden md:block"
        />
        <Image
          src={mobileImage}
          placeholder="blur"
          alt="Restaurant Magnifiko"
          width={1000}
          height={1000}
          quality={100}
          className="w-full h-full object-cover absolute brightness-[0.4] md:hidden"
        />
        <div className="z-10 text-center space-y-2 pt-20 container">
          <h1 className="text-5xl md:text-6xl font-bold text-white">{dictionary.menu.title}</h1>
        </div>
      </section>

      <div className="bg-primaryBeige py-12">
        <div className="container flex flex-col gap-8 items-center">
          {imageNames.map((img, idx) => (
              <div onClick={() => {
                setImageSrc(`/menu/${img}`)
              }} key={img} className="w-full max-w-3xl cursor-pointer">
              <Image
                src={`/menu/${img}`}
                alt={`Menu page ${idx + 1}`}
                width={800}
                height={1200}
                className="w-full h-auto rounded shadow"
                quality={100}
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>
      <Dialog imageSrc={imageSrc} setImageSrc={setImageSrc}/>
    </>
  );
}
