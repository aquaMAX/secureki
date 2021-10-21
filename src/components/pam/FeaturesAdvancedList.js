import React from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

import first from '../../assets/pam/features/advanced/first.svg'
import second from '../../assets/pam/features/advanced/second.svg'
import third from '../../assets/pam/features/advanced/third.svg'
import fourth from '../../assets/pam/features/advanced/fourth.svg'
import fifth from '../../assets/pam/features/advanced/fifth.svg'
import sixth from '../../assets/pam/features/advanced/sixth.svg'

const StyledRow = styled(Row)`
    margin: 0;
    width: 64.225em;
    margin-left: 12.875em;
    display: "block";
    opacity: ${props => props.newstate == false ? "1" : "0"};
    align-content: space-around;
    transition: opacity 0.3s;
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

const FeatureContainer = styled.div`
    width: 19.8125em;
    height: 24.0625rem;
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
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem;
    //letter-spacing:  0rem;
    text-align: left;
    padding-left: 1.65em;
    color: #073233;

`

export  const FeaturesAdvancedList = ({state}) => {
    return (
        <>
            <StyledRow newstate={state} xs={1} lg={3}>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={first}/>
                        <StyledTitle>
                        Compliance Control
                        </StyledTitle>
                        <TextContainer>
                        Prevent the reuse of passwords and with mass password change capabilities. No two passwords are the same. 
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={second}/>
                        <StyledTitle>
                        Fine-Grained Access<br /> Control
                        </StyledTitle>
                        <TextContainer>
                        With enterprise-grade access rules on a granular level such as session lengths and role-based parameters, blacklisting, whitelisting, and greylisting groupings to manage your user's access, and more.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={third}/>
                        <StyledTitle>
                        Single Sign-on and Multifactor Authentication
                        </StyledTitle>
                        <TextContainer>
                        Gain faster access and productivity improvements with single sign-on for all your applications in one place, with an additional level of security with MFA for verification before granting access.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
            </StyledRow>
            <StyledRow newstate={state} xs={1} lg={3}>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={fourth}/>
                        <StyledTitle>
                        App-to-app Password Management
                        </StyledTitle>
                        <TextContainer>
                        Automatically eliminate hard-coded passwords from your scripts, which leaves your passwords vulnerable to internal and external threats.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={fifth}/>
                        <StyledTitle>
                        Best-in-class Encryption
                        </StyledTitle>
                        <TextContainer>
                        To keep your data secure, we use ARIA encryption application to automatically manage the generation and distribution of encryption keys and AES (Advanced Encryption Standard) with 256-bit keys.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
                <StoriesCol>
                    <FeatureContainer>
                        <StyledIcon src={sixth}/>
                        <StyledTitle>
                        Always Reliable
                        </StyledTitle>
                        <TextContainer>
                        With built-in High Availability configurations that support real-time synchronization in the event of appliance redundancy.
                        </TextContainer>
                    </FeatureContainer>
                </StoriesCol>
            </StyledRow>
        </>
    )
}
