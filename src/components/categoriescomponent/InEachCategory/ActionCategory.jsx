import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ActionCategory = () => {
    const images = [
        {
            title: 'Hasta el 30% próximamente',
            imgSrc: 'https://i.pinimg.com/originals/2b/80/31/2b803105cff2f8b89e201691a9df1215.png',
        },
        {
            title: 'Hasta el 40% próximamente',
            imgSrc: 'https://hasbrostore.cl/img/cms/Home%202024/marcas/Hasbro%20gaming%20(1).png',
        }
    ];

    return (
        <div className="max-w-xl mx-auto px-4 py-8 bg-gray-900 rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-gray-900 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">¡Conoce las mejores ofertas!</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Vive la diversión con tus hijos, familiares
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Prepárate para vivir una experiencia como nunca en tu mejor tienda de juguetes, que te ofrece la mayor variedad y exclusividad de los mejores juguetes.
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
