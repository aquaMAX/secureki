import * as React from "react";
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'

import circlebigorange from '../../assets/careers/header/circlebigorange.svg'
import circlebigwhite from '../../assets/careers/header/circlebigwhite.svg'
import circlesmallblue from '../../assets/careers/header/circlesmallblue.svg'
import circlesmallwhite from '../../assets/careers/header/circlesmallwhite.svg'
import squareempty from '../../assets/careers/header/squareempty.svg'
import squareorange from '../../assets/careers/header/squareorange.svg'
import squarewhite from '../../assets/careers/header/squarewhite.svg'

import leftimage from '../../assets/careers/header/image 10.png'
import centerimage from '../../assets/careers/header/image 11.png'
import topimage from '../../assets/careers/header/image 12.png'
import bottomrightimage from '../../assets/careers/header/image 13.png'
import bottomimage from '../../assets/careers/header/image 14.png'
import rightimage from '../../assets/careers/header/image 17.png'

import blur from '../../assets/careers/header/blur.png'

const CircleBigOrange = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 58.0625rem;
    margin-left: 13.5625rem;
`

const CircleBigWhite = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 20.5625rem;
    margin-left: 29.125rem;
`

const CircleSmallBlue = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 59.125rem;
    margin-left: 11.625rem;
`

const CircleSmallWhite = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 27.0625rem;
    margin-left: 26rem;
`

const CircleSmallTopWhite = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 18.125rem;
    margin-left: 27.0625rem;
`

const SquareOrange = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 19.9375rem;
    margin-left: 64.9375rem;
`

const SquareWhite = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 32.8125rem;
    margin-left: 37.5625rem;
`

const SquareEmpty = styled.img`
    position: absolute;
    z-index: 2;
    margin-top: 21.375rem;
    margin-left: 59.6875rem;
`


const TopImage = styled.img`
    position: absolute;
    z-index: 8;
    margin-top:  20.1875rem;
    margin-left: 33.625rem;
`

const CenterImage = styled.img`
    position: absolute;
    z-index: 3;
    margin-top: 33.4319rem;
    margin-left: 39.9419rem;
`

const RightImage = styled.img`
    position: absolute;
    z-index: 4;
    margin-top: 30.5625rem;
    margin-left: 59.6875rem;
`

const BottomImage = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 47.1863rem;
    margin-left: 21.8156rem;
`

const LeftImage = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 30.3756rem;
    margin-left: 13.75rem;
`

const BlurImage = styled.img`
    position: absolute;
    z-index: 1;
    margin-top: 57.1875rem;
    margin-left: 16.9375rem;
    background: linear-gradient(270.61deg, rgba(255, 255, 255, 0) 25.2%, #FFFFFF 87.06%);
`

const Blur = styled.div`
    width: 10.5rem;
    height: 8.5rem;
    position: absolute;
    z-index: 2;
    margin-top: 58.1875rem;
    margin-left: 15.9375rem;
    background: linear-gradient(270.61deg, rgba(255, 255, 255, 0) 25.2%, #FFFFFF 87.06%);
    transform: rotate(-90deg);
`

const RightBlur = styled.div`
    width: 20.25rem;
    height: 9.875rem;
    position: absolute;
    z-index: 6;
    margin-top: 30.5625rem;
    margin-left: 59.6875rem;
    background: linear-gradient(269.93deg, #FFFFFF 22.49%, rgba(255, 255, 255, 0) 61.98%);
`

const BottomRightImage = styled.img`
    position: absolute;
    z-index: 4;
    margin-top: 43.875rem;
    margin-left: 51.9131rem;
`



const Layout = styled.div`
    max-width: 90em;
    height: 79.1875rem;
    display: block;
    justify-content: center;
    -webkit-justify-content: center;
    margin-left: auto;
    margin-right: auto;
    
`

const StyledTitle = styled(Row)`
    /* Short headline */
    margin-top: 12.875rem;
    height: 4.5rem;
    justify-content: center;
    display: flex;
    color: #073233;
    margin: 0;
    > h1 {
        margin-top: 12.875rem;
        position: absolute;
     
        font-family: Messina Sans bold;
        font-style: normal;
        font-weight: bold;
        font-size: 3.5em;
        line-height: 0.8571428571428571em;
        text-align: center;
        letter-spacing: -0.008928571428571428em;
    }
`




const CareersHeader = () => {
return (
    <>
    
    <Layout>
        
    <CircleBigOrange src={circlebigorange} />
        <CircleBigWhite src={circlebigwhite} />
        <CircleSmallBlue src={circlesmallblue} />
        <CircleSmallTopWhite src={circlesmallwhite} />
        <CircleSmallWhite src={circlesmallwhite} />

        <SquareEmpty src={squareempty} />
        <SquareWhite src={squarewhite} />
        <SquareOrange src={squareorange} />

        <TopImage src={topimage} />
        <CenterImage src={centerimage} />
        <RightImage src={rightimage} />
        <BottomImage src={bottomimage} />
        <LeftImage src={leftimage} />
        <Blur />
        <RightBlur />
        <BlurImage src={blur} />
        
        <BottomRightImage src={bottomrightimage} />
                
                <StyledTitle>
                        <h1>
                        We are SecureKi
                        </h1>
                </StyledTitle>


                
                
                
    </Layout>
    
    
    </>
)};

export default CareersHeader;