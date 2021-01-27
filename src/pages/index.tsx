import React from 'react'

import ContactForm from '../components/ContactForm'
import ContactInformation from '../components/ContactInformation'
import { Container, Content } from '../styles/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <ContactForm />
        <ContactInformation />
      </Content>
    </Container>
  )
}

export default Home
