// ImageSlider.jsx - Componente reutilizable en React

import React, { useState, useEffect } from "react";
import "../css/ImageSlider.css"
import "./GetImages";

const ImageSlider = ({ images, interval = 3000, showButtons = true, autoplay = true }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoplay) return;
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);
        return () => clearInterval(slideInterval);
    }, [images.length, interval, autoplay]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {images.map((Images, index) => (
                    <div className="slide" key={index}>
                        <img src={Images} alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            {showButtons && (
                <>
                    <button className="prev" onClick={prevSlide}>&#10094;</button>
                    <button className="next" onClick={nextSlide}>&#10095;</button>
                </>
            )}
        </div>
    );
};

export default ImageSlider;
