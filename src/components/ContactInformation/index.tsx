import React from 'react'
import {
  FaMapMarkerAlt,
  FaMobileAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa'

import { Container, Content, ContentRow, SocialMedias } from './styles'

const ContactInformation: React.FC = () => (
  <Container>
    <h2>Contact Information</h2>
    <Content>
      <ContentRow>
        <FaMapMarkerAlt color="#666" />
        <div>
          <p>Rua Felipe Schmidt</p>
          <p>Centro, Florianópolis - SC</p>
          <p>88010-150</p>
        </div>
      </ContentRow>
      <ContentRow>
        <FaMobileAlt color="#666" />
        <div>
          <p>USA ---- (1) 422 458 3689 (PT)</p>
          <p>PA ---- (2) 45545 458369 (GMT)</p>
        </div>
      </ContentRow>
    </Content>
    <SocialMedias>
      <a href="https://www.google.com/">
        <FaFacebookF />
      </a>
      <a href="https://www.google.com/">
        <FaTwitter />
      </a>
      <a href="https://www.google.com/">
        <FaLinkedinIn />
      </a>
    </SocialMedias>
  </Container>
)

export default ContactInformation
