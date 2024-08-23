import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ActionCategory = () => {
    const images = [
        {
            title: 'Sonic, la película',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rK25c71fYVi0Bv7RrTChK7NAQjC.jpg',
        },
        {
            title: 'Madame Web',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/blq050GHBt0Fzx1j9FvohaEuknJ.jpg',
        },
        {
            title: 'Avengers: Infinity War',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ksBQ4oHQDdJwND8H90ay8CbMihU.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iDABT5GD9OQmFiXM3wR0DJIxtkY.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/3hmz48Vevx6Q3FwxBmNkNKPeLkx.jpg',
        },
    ];

    return (
        <div className="max-w-xl mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-gray-900 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">¡Explora la mejor tienda a tu disposición</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Vive la diversión con tus hijos, familiares
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Prepárate para vivir una experiencia cinematográfica emocionante y llena de acción. Desde clásicos del género hasta los últimos estrenos, tenemos todo lo que necesitas para disfrutar al máximo de la adrenalina del cine de acción.
                </p>



                <Carousel
                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="carousel-container"
                    customButtonGroup={<button>Group</button>}
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={{
                        desktop: {
                            breakpoint: {
                                max: 3000,
                                min: 1024
                            },
                            items: 3,
                            partialVisibilityGutter: 40
                        },
                        mobile: {
                            breakpoint: {
                                max: 464,
                                min: 0
                            },
                            items: 1,
                            partialVisibilityGutter: 30
                        },
                        tablet: {
                            breakpoint: {
                                max: 1024,
                                min: 464
                            },
                            items: 2,
                            partialVisibilityGutter: 30
                        }
                    }}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                >
                    {images.map((image, index) => (
                        <div key={index} className="px-4">
                            <img src={image.imgSrc} alt={image.title} className="rounded-lg" />
                            <h3 className="text-white text-lg mt-2">{image.title}</h3>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default ActionCategory;
