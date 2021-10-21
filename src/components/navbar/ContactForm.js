import React from 'react'
import styled from 'styled-components'
import { Row, Modal } from 'react-bootstrap'
import Button from './Button';

const StyledContactButton = styled(Button)`
    font-family: Messina Sans semibold;
    
    transition: 0.3s;
    &:hover {
        background: #EEDDD7;
    }
    @media (max-width: 991px) {
        display: none;
    }
`

const StyledMobileContactButton = styled(Button)`
        background-color: #FF6938;
    height: 3.25rem;
    width: 21.1875rem;

    border-width: 0;
    border-radius: 1.875rem;
    padding: 0.75rem, 1.25rem, 0.75rem, 1.25rem;

    color: #FFFFFF;

    font-family: Messina Sans semibold;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    //letter-spacing:  0.10000000149011612px;
    text-align: center;
    @media (min-width: 991px) {
        display: none;
    }
`

const StyledModal = styled(Modal)`
    >.modal-content {
      max-width: 20rem;
      
      margin-left: auto;
     
    } 
    padding-right: 0;
    align-items: center;
    margin-left: auto;
`

const StyledHeader = styled(Modal.Header)`
    >.close {
      margin-left: -3.75rem;
      @media (max-width: 991px) {
        margin-left: -2rem;
    }
    }
    
    
`

const StyledRow = styled(Row)`
  margin: 0;
  padding: 0;
  @media (min-width: 992px) and (max-width: 1199px) {
        flex-wrap: nowrap;
    }
    @media (max-width: 991px) {
        flex-wrap: wrap;
    }
`

const StyledContainer = styled.div`
    padding-left: 18%;
    width: 87%;
    @media (min-width: 992px) and (max-width: 1199px) {
        padding-left: 1.8rem;
        width: 97%;
    }
    @media (max-width: 991px) {
        padding-left: 0;
        justify-content: center;
        -webkit-justify-content: center;
        margin-left: auto;
        margin-right: auto;
        max-width: 20rem;
    }
    
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  font-family: Messina Sans bold;
  font-size: 3.5rem;
  font-style: normal;
  line-height: 3.75rem;
  //letter-spacing:  -0.0625rem;
  text-align: center;
  margin-top: 2.75rem;
  margin-bottom: 1.4375rem;
  @media (max-width: 991px) {
      font-size: 1.875rem;
      max-width: 21.875rem;
      margin-right: 0;
      margin-top: 0.75rem;
  }

`

const StyledDescription = styled.div`
  display: flex;
  font-family: Messina Sans;
  font-size: 0.9375rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem;
  //letter-spacing:  0rem;
  
  margin-bottom: 2.875rem;
  
  @media (max-width: 991px) {
      margin-bottom: 1.625rem;
  }
`

const StyledInputDescription = styled.div`
display: flex;
flex-wrap: nowrap;
    width: 11.4375rem;
    
    font-family: Messina Sans semibold;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    //letter-spacing:  0rem;
    text-align: left;

    /* Input */
    margin-right: 12rem;
    margin-bottom: 0.375rem;
    @media (max-width: 991px) {
        width: 20rem;
    }
`

const StyledNameInput = styled.input`
    display: flex;
    font-family: Messina Sans semibold;
    font-size: 12px;
    font-style: normal;
    line-height: 24px;
    color: #768F87;
    
    background: rgba(20, 81, 86, 0.05);
    height: 3rem;
    width: 20.4375rem;
    border-radius: 0rem;
    border: 0;
    margin-right: 3rem;
    margin-bottom: 1.375rem;
    padding-left: 0.425rem;
    &:focus {
      background: rgba(20, 81, 86, 0.05);
      border: 2px solid #17494D;
      border-radius: 0rem;
      outline: none;
   }
    @media (max-width: 991px) {
        width: 20rem;
        margin-right: 0;
    }
`

const StyledLastnameInput = styled.input`
display: flex;
font-family: Messina Sans semibold;
    font-size: 12px;
    font-style: normal;
    line-height: 24px;
    color: #768F87;
    background: #1451560D;
    height: 3rem;
    width: 20.4375rem;
    border-radius: 0rem;
    border: 0;
    margin-bottom: 1.375rem;
    padding-left: 0.425rem;
    &:focus {
      background: rgba(20, 81, 86, 0.05);
      border: 2px solid #17494D;
      border-radius: 0rem;
      outline: none;
   }
    @media (max-width: 991px) {
        width: 20rem;
    }
`

const StyledEmailInput = styled.input`
display: flex;
font-family: Messina Sans semibold;
    font-size: 12px;
    font-style: normal;
    line-height: 24px;
    color: #768F87;
    background: #1451560D;
    height: 3rem;
    width: 44.0625rem;
    border-radius: 0rem;
    border: 0;
    margin-bottom: 1.125rem;
    padding-left: 0.425rem;
    &:focus {
      background: rgba(20, 81, 86, 0.05);
      border: 2px solid #17494D;
      border-radius: 0rem;
      outline: none;
   }
    @media (max-width: 991px) {
        width: 20rem;
    }

`

const StyledMessageInput = styled.textarea`
display: flex;
font-family: Messina Sans semibold;
    font-size: 14px;
    font-style: normal;
    line-height: 24px;
    color: #768F87;
  background: #1451560D;
  height: 8.3125rem;
  width: 44.0625rem;
  border-radius: 0rem;
  border: 0;
  margin-bottom: 1.5rem;
  padding: 0.425rem;
  &:focus {
    background: rgba(20, 81, 86, 0.05);
    border: 2px solid #17494D;
    border-radius: 0rem;
    outline: none;
  }
  @media (max-width: 991px) {
        width: 20rem;
    }
`

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    width: 705px;
    height: 48px;
    background: #FF6938;
    
    text-align: center;
    padding: 0;
    padding-left: 20.0625rem;
    color: #FFFFFF;
    border: none;
    font-family: Messina Sans semibold;
    margin-bottom: 4.9375rem;
    @media (max-width: 991px) {
        width: 20rem;
        padding-left: 8.0313rem;
        margin-bottom: 2.125rem;
    }
`

const Mobile = styled.div`
      @media (min-width: 991px) {
        display: none;
    }
`

const Desktop = styled.div`
      @media (max-width: 991px) {
        display: none;
    }
`

const StyledDesktopRow = styled(Row)`
  margin: 0;
  padding: 0;
    white-space: nowrap;
    flex-wrap: nowrap;
    
`



function MyVerticallyCenteredModal(props) {
    return (
      <StyledModal
        {...props}
        dialogClassName="modal-70w"
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <StyledHeader closeButton>
          <StyledContainer>
            <StyledTitle>
            Contact sales
            </StyledTitle>
            <StyledDescription>
            Let’s get this conversation started. Tell us a bit about yourself, we’ll get in touch as soon as we can.
            </StyledDescription>
          <Desktop>
            <StyledDesktopRow>
              <StyledInputDescription>First name</StyledInputDescription>
              <StyledInputDescription>Last name</StyledInputDescription>
            </StyledDesktopRow>
            <StyledDesktopRow>
              <StyledNameInput />
              <StyledLastnameInput />
            </StyledDesktopRow>
          </Desktop>
          <Mobile>
            <StyledRow>
                <StyledInputDescription>First name</StyledInputDescription>
                <StyledNameInput />
                
              </StyledRow>
              <StyledRow>
                
                
                <StyledInputDescription>Last name</StyledInputDescription>
                <StyledLastnameInput />
              </StyledRow>
          </Mobile> 
            
            
            <StyledInputDescription>Work email</StyledInputDescription>
            <StyledEmailInput />
            <StyledInputDescription>Message</StyledInputDescription>
            <StyledMessageInput type="text" />
            <StyledButton>Contact</StyledButton>
          </StyledContainer>


        </StyledHeader>
      </StyledModal>
      
    );
  }
  

const ContactForm = ({type}) => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
    <>
        <StyledContactButton background="#F9F1EE" font="#FF6938" weight="400" onClick={() => setModalShow(true)}>Contact Us</StyledContactButton>
        <StyledMobileContactButton background="#F9F1EE" font="#FF6938" weight="400" onClick={() => setModalShow(true)}>Contact Us</StyledMobileContactButton>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
    </>
    )
}

export default ContactForm;

  