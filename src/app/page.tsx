'use client'

import React, { useState } from 'react';
import Image from 'next/image';


import clsx from 'clsx';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images = [
    { src: '/1.jpg', alt: 'Image 1', label: 'STRENGTH' },
    { src: '/2.jpg', alt: 'Image 2', label: 'MOBILITY' },
    { src: '/3.jpg', alt: 'Image 3', label: 'DRILLS' },
  ];

  return (
    <div className='w-full items-center justify-center flex min-h-screen px-36'>
      <div className="flex justify-center rounded-3xl overflow-hidden items-center h-96 w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={clsx(
              'relative h-full transition-all duration-300 ease-in-out',
              activeIndex === index
                ? 'flex-[3]'
                : activeIndex !== null
                  ? 'flex-[1]'
                  : 'flex-1'
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {activeIndex === index && (
              <div className='relative py-2 px-2 flex flex-wrap items-center justify-between w-full z-20'>
                <div className="text-xl text-white px-2 py-1 rounded">
                  {image.label}
                </div>
                <IoIosArrowDroprightCircle className='text-white w-7 h-7 mr-9' />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;