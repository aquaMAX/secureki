import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import first from '../../assets/pam/features/basic/first.svg'
import second from '../../assets/pam/features/basic/second.svg'
import third from '../../assets/pam/features/basic/third.svg'
import fourth from '../../assets/pam/features/basic/fourth.svg'
import fifth from '../../assets/pam/features/basic/fifth.svg'
import sixth from '../../assets/pam/features/basic/sixth.svg'

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
    return (
        <Container>
            <StyledRow newstate={state} lg={4} xs={1} >
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={first}/>
                        <StyledTitle>
                            Integrated Password Management
                        </StyledTitle>
                        <TextContainer>
                            Support and integrate with various operating systems and platforms, from Unix to Windows, to compliant directories like AD and LDAP, to systems like RADIUS and TACACS.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={second}/>
                        <StyledTitle>
                            Centralized Vision
                        </StyledTitle>
                        <TextContainer>
                            See all your security events and what they mean for your business with simple clarity and prioritization on our centralized administrative dashboard.                 
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={third}/>
                        <StyledTitle>
                            Workflow for the Pros
                        </StyledTitle>
                        <TextContainer>
                            Easily limit and control who has access with request and approval workflow. Approve access with time-bound durations and get instant notifications whenever there’s a request needed for approval.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
            </StyledRow>
            <StyledRow newstate={state} lg={4} xs={1} >

                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={fourth}/>
                        <StyledTitle>
                        Automated Password Policy
                        </StyledTitle>
                        <TextContainer>
                        Password changes automatically based on your preference. After each uses, scheduled, or manual batch changes. You have complete control.                 
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={fifth}/>
                        <StyledTitle>
                        Real–time Monitoring
                        </StyledTitle>
                        <TextContainer>
                        Real-time session recording, monitoring, and playback functionalities for all your privileged activities and audits.                    
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={sixth}/>
                        <StyledTitle>
                        Report Generator   
                        </StyledTitle>
                        <TextContainer>
                        Improve decision making and auditing with complete audit trails of every privileged activity with customizable reporting to meet your regulatory requirements.                    
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
            </StyledRow>
        </Container>
    )
}
