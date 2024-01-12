import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CarouselBS(props) {
    return (
        <Carousel>
            {
                props.items.map((item, index) => (
                    <Carousel.Item key={index}>
                        <div style={{
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            width: "100%",
                            height: "20em",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            <h2
                                style={{
                                    color: "#ffffff88",
                                    margin: 0,
                                    textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                                }}
                            >{item.imageText}</h2>
                        </div>
                        <Carousel.Caption>
                            <h3>{props.title}</h3>
                            <p>{props.text}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))
            }
        </Carousel>
    );
}

export default CarouselBS;