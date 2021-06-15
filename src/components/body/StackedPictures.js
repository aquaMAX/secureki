import React from 'react'
import styled from 'styled-components'

import andrea from "../../assets/stacked images/andrea.png"
import cotton from "../../assets/stacked images/cotton.png"
import menta from "../../assets/stacked images/menta.png"

import bigcircle from "../../assets/stacked images/bigcircle.svg"
import browncircle from "../../assets/stacked images/browncircle.svg"
import emptyrec from "../../assets/stacked images/emptyrec.svg"
import orangecircle from "../../assets/stacked images/orangecircle.svg"
import orangerec from "../../assets/stacked images/orangerec.svg"
import rec from "../../assets/stacked images/rec.svg"
import smallcircle from "../../assets/stacked images/smallcircle.svg"



const Andrea = styled.img`
    z-index: 4;
    position: absolute;
    margin-left: 3.104375em;
    margin-top: 10.375em;
`

const Cotton = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 18.229375em;
    margin-top: 20.8125em;
`

const Menta = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 19.479375em;
    margin-top: 4.5em;
`

const BigCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 35.0625em;
    margin-top: 10.8125em;
`

const BrownCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 12.9375em;
    margin-top: 36.3125em;
`

const EmptyRec = styled.img`
    z-index: 6;
    position: absolute;
    margin-left: 0.979375em;
    margin-top: 11.6875em;
`

const OrangeCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 14.916875em;
    margin-top: 35.25em;
`

const OrangeRec = styled.img`
    z-index: 5;
    position: absolute;
    margin-left: 1.666875em;
    margin-top: 9.25em;
`

const Rec = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 21.041875em;
    margin-top: 22.9375em;
`

const SmallCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 31.979375em;
    margin-top: 17.3125em;
`

const SmallTopCircle = styled.img`
    z-index: 1;
    position: absolute;
    margin-left: 33.041875em;
    margin-top: 8.375em;
`


export const StackedPictures = () => {
    return (
        <>
            <BigCircle src={bigcircle} />
            <BrownCircle src={browncircle} />
            <EmptyRec src={emptyrec} />
            <OrangeCircle src={orangecircle} />
            <OrangeRec src={orangerec} />
            <Rec src={rec} />
            <SmallCircle src={smallcircle} />
            <SmallTopCircle src={smallcircle} />
            <Andrea src={andrea} />
            <Cotton src={cotton} />
            <Menta src={menta} />
        </>
    )
}
