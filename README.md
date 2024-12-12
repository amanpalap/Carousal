# Hover Expand Carousel

A responsive carousel component built with React, Next.js, and Tailwind CSS, featuring hover effects where the active image expands while others shrink. The carousel also includes labels and icons displayed on hover.

## Features

- **Hover Effects**: Expand the hovered image and shrink others.
- **Responsive Design**: Adjusts to various screen sizes.
- **Customizable Labels**: Display labels dynamically for each image.
- **Icons**: Includes an arrow icon alongside the label when an image is active.

## Demo
![Demo GIF](demo.gif)

## Installation

### Prerequisites
- Node.js installed on your system.
- A Next.js 14 project setup.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/hover-expand-carousel.git
   ```

2. Navigate to the project directory:
   ```bash
   cd hover-expand-carousel
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:3000` to see the carousel in action.

## Usage

### File Structure
- **Carousel Component**: `components/Carousel.tsx`
- **Assets**: Place images in the public directory (e.g., `/public/1.jpg`).

### Adding Images
Update the `images` array in the `Carousel` component to add your custom images and labels:
```javascript
const images = [
  { src: '/1.jpg', alt: 'Image 1', label: 'STRENGTH' },
  { src: '/2.jpg', alt: 'Image 2', label: 'MOBILITY' },
  { src: '/3.jpg', alt: 'Image 3', label: 'DRILLS' },
];
```

## Technologies Used
- **React**
- **Next.js**
- **Tailwind CSS**
- **React Icons** (IoIosArrowDroprightCircle)

## Styling
Styling is handled using Tailwind CSS. Customize styles directly in the JSX or through your Tailwind configuration.

## Example Code
Here is the core code for the carousel:

```javascript
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import clsx from 'clsx';

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
```

##You are free to use it anywhere

