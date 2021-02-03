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
    <h2>Informações de Contato</h2>
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
          <p>WhatsApp ─ (048) 98820 - 7173</p>
          <p>Comercial ─ (048) 3321 - 1250</p>
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
