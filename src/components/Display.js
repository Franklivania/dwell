import React, { useState, useEffect } from 'react'
import '../sass/Display.scss'
import hero from '../assets/hero.jpg'
import dup from '../assets/dup.jpg'
import bung from '../assets/bung.jpg'

const slides = [
    {
      id: 1,
      images: [
        {
          id: 1,
          src: hero,
          alt: 'Image 1',
          text: 'Luxury 4 bedroom terrace duplex for sale',
          place: 'Lagos, Lekki, Ikate Elegushi',
          price: '$ 350,000'
        },
        {
          id: 2,
          src: dup,
          alt: 'Image 2',
          text: '4 bedroom semi detached duplex for sale',
          place: 'Lagos, Lekki, Jakande',
          price: '$ 450,000'
        },
        {
          id: 3,
          src: bung,
          alt: 'Image 3',
          text: '6 bedroom deluxe detached duplex for sale',
          place: 'Lagos, Lekki, Ikota',
          price: '$ 650,000'
        }
      ]
    },
    {
        id: 2,
      images: [
        {
            id: 1,
            src: hero,
            alt: 'Image 1',
            text: 'Text for image 1 a'
          },
          {
            id: 2,
            src: dup,
            alt: 'Image 2',
            text: 'Text for image 2 a'
          },
          {
            id: 3,
            src: bung,
            alt: 'Image 3',
            text: 'Text for image 3 a'
          }
      ]
    },
    {
        id: 3,
      images: [
        {
            id: 1,
            src: hero,
            alt: 'Image 1',
            text: 'Text for image 1 b'
          },
          {
            id: 2,
            src: dup,
            alt: 'Image 2',
            text: 'Text for image 2 b'
          },
          {
            id: 3,
            src: bung,
            alt: 'Image 3',
            text: 'Text for image 3 b'
          }
      ]
    }
  ];

const Display = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevious = () => {
        if (currentSlide === 0) {
          setCurrentSlide(slides.length - 1);
        } else {
          setCurrentSlide(currentSlide - 1);
        }
      };
    
      const handleNext = () => {
        if (currentSlide === slides.length - 1) {
          setCurrentSlide(0);
        } else {
          setCurrentSlide(currentSlide + 1);
        }
      };

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentSlide]);

  return (
    <div className='display'>
        <div className="top">
            <div className="circle"></div>
            <h1>Rent and Buy a property from our latest offers</h1>
            <p>
                View our most recent property deals
                <a href="/">View all</a>
            </p>
        </div>

        <div className="bottom">
            <div className="btn">
                <button onClick={handlePrevious}><i class="fa-solid fa-chevron-left"></i></button>
                <button onClick={handleNext}><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div className='container'>
                {slides[currentSlide].images.map((image) => (
                <div key={image.id} className='card'>
                    <img src={image.src} alt={image.alt} />
                    <h4>{image.text}</h4>
                    <p>{image.place}</p>
                    <h2>{image.price}</h2>
                </div>
                ))}
            </div>
            <div className='box'>
                {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    style={{
                    backgroundColor: index === currentSlide ? '#DD8F0C' : 'gray'
                    }}
                    className = 'indicator'
                />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Display