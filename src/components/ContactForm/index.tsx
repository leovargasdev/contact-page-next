import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { FaRegEnvelope, FaPaperPlane } from 'react-icons/fa'

import Input from '../Input'
import { Container, Title, TitleLines, GridInputs, Button } from './styles'

const ContactForm: React.FC = () => {
  const router = useRouter()
  const handleSubmit = useCallback(event => {
    event.preventDefault()
    router.push('api/contact')
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
            label="Nome Completo"
            type="text"
            placeholder="Fulano da Silva"
          />
          <Input
            label="Endereço de E-mail"
            type="email"
            placeholder="exemplo@dominio.com"
          />
          <Input label="Telefone" type="text" placeholder="(99) 99999-9999" />
          <Input label="Empresa" type="text" placeholder="Empresa A" />
        </GridInputs>
        <Input
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
