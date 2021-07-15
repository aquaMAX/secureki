import React from 'react'
import styled from 'styled-components';
import { Row, Col, Carousel } from 'react-bootstrap';
import logo from '../../../assets/hero NEW 1.svg'
import { FirstSlide } from './FirstSlide';

const Container = styled.div`
    height: 32.5em;
    
    background: #114748;
`

const StyledCarousel = styled(Carousel)`


    >ol {
        >li {
            width: 6px;
            height: 6px;
            /* Dot */   
            border-radius: 200px 200px 200px 200px;
            -moz-border-radius: 200px 200px 200px 200px;
            -webkit-border-radius: 200px 200px 200px 200px;
            border: 0px solid #000000;
            margin: 0px 4px;
            opacity: 0.2;
            margin-bottom: 2.0625em;
}
       
    }
    >a {
        >span {
            opacity: 0;
            color: #114748;
            background: #114748;
        }
        
    }
`

const Slider = () => {
    return (
        <Container>
                <StyledCarousel>
                    <Carousel.Item>
                        
                        <FirstSlide />
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide />
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide />
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide />
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide />
                    </Carousel.Item>
                </StyledCarousel>
        </Container>
    )
}

export default Slider;
