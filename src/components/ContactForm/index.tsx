import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'
import { FaRegEnvelope, FaPaperPlane } from 'react-icons/fa'

import Input from '../Input'
import { Container, Title, TitleLines, GridInputs, Button } from './styles'

const ContactForm: React.FC = () => {
  const router = useRouter()

  const handleSubmit = useCallback(event => {
    event.preventDefault()
    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      phone: event.target[2].value,
      company: event.target[3].value,
      message: event.target[4].value
    }

    console.log(data)
    // router.push('/api/contact')
  }, [])

  return (
    <Container>
      <Title>
        <h2>Envie-nos uma mensagem</h2>
        <div>
          <TitleLines>
            <span />
            <span />
            <span />
          </TitleLines>
          <FaRegEnvelope />
        </div>
      </Title>
      <form onSubmit={handleSubmit}>
        <GridInputs>
          <Input
            name="name"
            label="Nome Completo"
            type="text"
            placeholder="Fulano da Silva"
          />
          <Input
            name="email"
            label="Endereço de E-mail"
            type="email"
            placeholder="exemplo@dominio.com"
          />
          <Input
            name="phone"
            label="Telefone"
            type="text"
            placeholder="(99) 99999-9999"
          />
          <Input
            name="company"
            label="Empresa"
            type="text"
            placeholder="Empresa A"
          />
        </GridInputs>
        <Input
          name="message"
          label="Mensagem"
          type="text"
          placeholder="Escreva sua mensagem aqui"
        />

        <Button type="submit">
          Enviar <FaPaperPlane />
        </Button>
      </form>
    </Container>
  )
}

export default ContactForm
