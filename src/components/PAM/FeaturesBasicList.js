import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import FeaturesElement from './FeaturesElement.js';

const StyledRow = styled(Row)`
    margin: 0;
    width: 64.225em; 
    margin-left: 13.375em;
    display: "flex";
    opacity: ${props => props.newstate == true ? "1" : "0"};
    align-content: space-around;
    transition: all 0.3s;
    
`

const StoriesCol = styled.div`
    padding: 0; 
    justify-content: center; 
    display: flex;
    margin-bottom: 2.0625em;
    margin-right: 1.9375em;
    &:last-child {
        margin-right: 0;
    }
`

const Container = styled.div`
        z-index: 1;
    position: absolute;
    
`

export const FeaturesBasicList = ({state}) => {
    return (
        <Container>
            <StyledRow newstate={state}>
                <StoriesCol>
                    <FeaturesElement 
                    story="Support and integrate with various operating systems and platforms, from Unix to Windows, to compliant directories like AD and LDAP, to systems like RADIUS and TACACS."
                    title="Integrated Password Management"
                    />
                </StoriesCol>
                <StoriesCol>
                <FeaturesElement 
                    story="See all your security events and what they mean for your business with simple clarity and prioritization on our centralized administrative dashboard."                    
                    title="Centralized Vision"
                    />
                </StoriesCol>
                <StoriesCol>   
                <FeaturesElement 
                    story="Easily limit and control who has access with request and approval workflow. Approve access with time-bound durations and get instant notifications whenever there’s a request needed for approval."                   
                    title="Workflow for the Pros"
                    />
                </StoriesCol>
            </StyledRow>
            <StyledRow newstate={state}>
                <StoriesCol>
                    <FeaturesElement 
                    story="Password changes automatically based on your preference. After each uses, scheduled, or manual batch changes. You have complete control."
                    title="Automated Password Policy"
                    />
                </StoriesCol>
                <StoriesCol>
                <FeaturesElement 
                    story="Real-time session recording, monitoring, and playback functionalities for all your privileged activities and audits."                    
                    title="Real–time Monitoring"
                    />
                </StoriesCol>
                <StoriesCol>   
                <FeaturesElement 
                    story="Improve decision making and auditing with complete audit trails of every privileged activity with customizable reporting to meet your regulatory requirements."                   
                    title="Report Generator"
                    />
                </StoriesCol>
            </StyledRow>
        </Container>
    )
}
