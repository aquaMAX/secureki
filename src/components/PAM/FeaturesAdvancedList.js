import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import FeaturesElement from './FeaturesElement.js';

const StyledRow = styled(Row)`
    margin: 0;
    width: 64.225em;
    margin-left: 13.375em;
    display: "block";
    opacity: ${props => props.newstate == false ? "1" : "0"};
    align-content: space-around;
    transition: opacity 0.3s;
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

export  const FeaturesAdvancedList = ({state}) => {
    return (
        <>
            <StyledRow newstate={state} >
                <StoriesCol>
                    <FeaturesElement 
                    story="Prevent the reuse of passwords and with mass password change capabilities. No two passwords are the same. "
                    title="Compliance Control"
                    />
                </StoriesCol>
                <StoriesCol>
                <FeaturesElement 
                    story="With enterprise-grade access rules on a granular level such as session lengths and role-based parameters, blacklisting, whitelisting, and greylisting groupings to manage your user's access, and more."                    
                    title="Fine-Grained Access Control"
                    />
                </StoriesCol>
                <StoriesCol>   
                <FeaturesElement 
                    story="Gain faster access and productivity improvements with single sign-on for all your applications in one place, with an additional level of security with MFA for verification before granting access."                   
                    title="Single Sign-on and Multifactor Authentication"
                    />
                </StoriesCol>
            </StyledRow>
            <StyledRow newstate={state}>
                <StoriesCol>
                    <FeaturesElement 
                    story="Automatically eliminate hard-coded passwords from your scripts, which leaves your passwords vulnerable to internal and external threats."
                    title="App-to-app Password Management"
                    />
                </StoriesCol>
                <StoriesCol>
                <FeaturesElement 
                    story="To keep your data secure, we use ARIA encryption application to automatically manage the generation and distribution of encryption keys and AES (Advanced Encryption Standard) with 256-bit keys."                    
                    title="Best-in-class Encryption"
                    />
                </StoriesCol>
                <StoriesCol>   
                <FeaturesElement 
                    story="With built-in High Availability configurations that support real-time synchronization in the event of appliance redundancy."                   
                    title="Always Reliable"
                    />
                </StoriesCol>
            </StyledRow>
        </>
    )
}
