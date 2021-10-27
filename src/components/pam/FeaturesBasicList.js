import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import first from '../../assets/pam/features/basic/first.svg'
import second from '../../assets/pam/features/basic/second.svg'
import third from '../../assets/pam/features/basic/third.svg'
import fourth from '../../assets/pam/features/basic/fourth.svg'
import fifth from '../../assets/pam/features/basic/fifth.svg'
import sixth from '../../assets/pam/features/basic/sixth.svg'

import { graphql, useStaticQuery } from 'gatsby'

const StyledRow = styled(Row)`
    margin: 0;
    width: 64.225em; 
    margin-left: 11.375em;
    display: "flex";
    opacity: ${props => props.newstate == true ? "1" : "0"};
    align-content: space-around;
    transition: all 0.3s;
    @media (min-width: 992px) and (max-width: 1439px) {
        margin-left: 0;
        width: auto;
    }
    @media (max-width: 991px) {
        max-width: 23.4375rem;
        margin-left: 0; 
    } 
    
`

const StoriesCol = styled.div`
    padding: 0; 
    justify-content: center; 
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2.0625em;
    
    &:last-child {
        margin-right: 0;
    }
`

const Container = styled.div`
    z-index: 1;
    position: absolute;
    
`

const FeatureContainer = styled.div`
    width: 19.8125em;
    height: 23.0625em;
    background: #FFFFFF;
    border: 1px solid #EDEDED;
    border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    align-items: center;
    z-index: 2;
    @media (max-width: 991px) {
        height: auto; 
    } 

`

const TextContainer = styled(Row)`
    /* Subtitle Text */
    font-family: Messina Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 1em;
    line-height: 1.625em;
    text-align: left;
    vertical-align: top;
    /* or 156% */
    color: #5F6E70;
    min-width: 15.75em;
    margin: 0;
    margin-left: 2.0625em;
    margin-top: 1.25em;
    margin-bottom: 1.625em;
    padding-right: 2em;
`

const StyledIcon = styled.img`
    padding-left: 2.0625em;
    padding-top: 1.8125em;
    margin-bottom: 1.25em;
`

const StyledTitle = styled.div`
    font-family: Messina Sans Bold;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
    //letter-spacing:  0px;
    text-align: left;
    padding-left: 1.65em;
    color: #073233;
`




export const FeaturesBasicList = ({state}) => {
    const data = useStaticQuery(graphql`
    query {
        allStrapiFeatures {
        edges {
            node {
            id
            content
            title
            }
        }
        }
    }
    `)
    return (
        <Container>
            <StyledRow newstate={state} lg={4} xs={1} >
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={first}/>
                        <StyledTitle>
                        {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_1" ? document.node.title :  null)}
                        </StyledTitle>
                        <TextContainer>
                        {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_1" ? document.node.content :  null)}  
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={second}/>
                        <StyledTitle>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_2" ? document.node.title :  null)}                        </StyledTitle>
                        <TextContainer>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_2" ? document.node.content :  null)}                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={third}/>
                        <StyledTitle>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_3" ? document.node.title :  null)}
                        </StyledTitle>
                        <TextContainer>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_3" ? document.node.content :  null)}                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
            </StyledRow>
            <StyledRow newstate={state} lg={4} xs={1} >

                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={fourth}/>
                        <StyledTitle>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_4" ? document.node.title :  null)}
                        </StyledTitle>
                        <TextContainer>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_4" ? document.node.content :  null)}                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={fifth}/>
                        <StyledTitle>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_5" ? document.node.title :  null)}
                        </StyledTitle>
                        <TextContainer>
                            {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_5" ? document.node.content :  null)}                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={sixth}/>
                        <StyledTitle>
                        {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_6" ? document.node.title :  null)}   
                        </StyledTitle>
                        <TextContainer>
                        {data.allStrapiFeatures.edges.map(document=>document.node.id === "Features_6" ? document.node.content :  null)}                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
            </StyledRow>
        </Container>
    )
}
