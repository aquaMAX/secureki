import React from 'react'
import styled from 'styled-components';
import { Row, Col, Carousel } from 'react-bootstrap';
import logo from '../../../assets/hero NEW 1.svg'
import { FirstSlide } from './FirstSlide';

const Container = styled.div`
    height: 32.5em;
    
    background: #114748;
    @media (max-width: 991px) {
        
        height: 36.5625rem;
        padding-bottom: 0;
    }
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
            @media (max-width: 991px) {
                display: none;
            }  
            }
            @media (max-width: 991px) {
                display: none;
            }    
        }
    >a {
        >span {
            opacity: 0;
            color: #114748;
            background: #114748;

        }
        @media (max-width: 991px) {
                display: none;
            } 
        
    }
`

const Slider = () => {
    return (
        <Container>
                <StyledCarousel>
                    <Carousel.Item>
                        
                        <FirstSlide title="Chia Nam Liang, Hap Seng Group, CIO" description="“Having a manual system for password management these days just won’t cut it anymore.”" image='first'/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide title={"ARIANNE KOWALSKI, LEAD MARKETING SPECIALIST, MAILCHIP"} description="“All base UI elements are made using Nested Symbols and shared styles that are logically connected.”" image="second"/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <FirstSlide title="ARIANNE KOWALSKI, LEAD MARKETING SPECIALIST, MAILCHIP" description="“All base UI elements are made using Nested Symbols and shared styles that are logically connected.”" image="second"/>
                    </Carousel.Item>
                </StyledCarousel>
        </Container>
    )
}

export default Slider;
