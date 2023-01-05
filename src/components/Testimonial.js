import React, { useState, useEffect } from 'react'
import '../sass/Testimonial.scss'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'

const slides = [
    {
        id: '1',
        quote: [
            {
                id: '1',
                text: ' “We like the final result this project, in extraordinary and also provides the best service to the client” ',
                src: one,
                name: 'George James',
                company: 'MD, LaFarge.'
            },
            {
                id: '2',
                text: ' “Whenever I have needed housing services, I have come to these people, and they have always delivered.” ',
                src: two,
                name: 'George James',
                company: 'MD, Dangote.'
            },
            {
                id: '3',
                text: ' “We like the final result this project, in extraordinary and also provides the best service to the client” ',
                src: three,
                name: 'George James',
                company: 'MD, Julius Berger.'
            }
        ]
    },
    {
        id: '2',
        quote: [
            {
                id: '1',
                text: ' “We like the final result this project, in extraordinary and also provides the best service to the client 1” ',
                src: one,
                name: 'George James',
                company: 'MD, AMEN.'
            },
            {
                id: '2',
                text: ' “Whenever I have needed housing services, I have come to these people, and they have always delivered. 1” ',
                src: two,
                name: 'George James',
                company: 'MD, Nigerian Commision.'
            },
            {
                id: '3',
                text: ' “We like the final result this project, in extraordinary and also provides the best service to the client 1” ',
                src: three,
                name: 'George James',
                company: 'MD, LaFarge.'
            }
        ]
    },
    {
        id: '3',
        quote: [
            {
                id: '1',
                text: ' “We like the final result this project, in extraordinary and also provides the best service to the client 2” ',
                src: one,
                name: 'George James',
                company: 'MD, Julius Berger.'
            },
            {
                id: '2',
                text: ' “Whenever I have needed housing services, I have come to these people, and they have always delivered. 2” ',
                src: two,
                name: 'George James',
                company: 'MD, Amen.'
            },
            {
                id: '3',
                text: ' “We like the final result this project, in extraordinary and also provides the best service to the client 2” ',
                src: three,
                name: 'George James',
                company: 'MD, LaFarge.'
            }
        ]
    }
]

const Testimonial = () => {
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
        }, 8000);
        return () => clearInterval(interval);
    }, [currentSlide]);
  return (
    <div className='testimonial'>
        <div className="top">
            <h1>Customer Testimonials</h1>
            <p>Don’t take our word for it, here is what our customers have to say!</p>
        </div>

        <div className="bottom">
            <div className="btn">
                <button onClick={handlePrevious} id='left'><i class="fa-solid fa-chevron-left"></i></button>
                <button onClick={handleNext} id='right'><i class="fa-solid fa-chevron-right"></i></button>
            </div>

            <div className='container'>
                {slides[currentSlide].quote.map((quote) => (
                <div key={quote.id} className='card'>
                    <p>{quote.text}</p>
                    <div className="text">
                        <img src={quote.src} alt={quote.alt} />
                        <h4>
                            {quote.name}
                            <p>{quote.company}</p>
                        </h4>
                    </div>
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

export default Testimonial