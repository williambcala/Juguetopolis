import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TerrorCategory = () => {
    const images = [
        {
            title: ' ',
            imgSrc: '',
        }
    ];

    return (
        <div className="max-w-xl mx-auto px-4 py-8 bg-rose-950 rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-rose-950 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">¡Explora el Espeluznante Mundo del Terror!</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Sumérgete en la oscuridad y descubre el terror en su forma más pura. En esta sección, encontrarás una selección de las películas más aterradoras y las historias más escalofriantes que te mantendrán al borde del asiento.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
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

export default TerrorCategory;
