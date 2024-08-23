import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const AdventureCategory = () => {
    const images = [
        {
            title: 'Pinocho',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1yIM2QL0qLzWMjTGuMX12yZnBtb.jpg',
        },
        {
            title: 'Toy Story 4',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/yF1vPDuHVrAUMX5dy1tVMbAjkEL.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fIUqk6Pjo3uf5RiOGT19KQ53ekq.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg',
        },
        {
            title: 'Próximamente',
            imgSrc: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg',
        },
    ];

    return (
        <div className="max-w-xl mx-auto px-4 py-8 bg-emerald-950 rounded-lg shadow-lg" style={{ marginTop: "20px" }}>
            <div className="bg-emerald-950 rounded-lg p-8">
                <h1 className="text-4xl font-bold text-center mb-6 text-white">¡Descubre la emoción de las Aventuras!</h1>
                <p className="text-lg text-gray-300 leading-relaxed">
                    Embárcate en una odisea llena de misterio, peligro y descubrimientos asombrosos. En esta sección, encontrarás las mejores películas de aventuras que te transportarán a mundos fantásticos, repletos de desafíos emocionantes y personajes inolvidables.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Prepárate para vivir una experiencia cinematográfica emocionante y llena de aventuras. Desde épicas travesías por tierras desconocidas hasta emocionantes expediciones a lugares remotos, tenemos todo lo que necesitas para disfrutar al máximo del espíritu aventurero del cine.
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

export default AdventureCategory;
