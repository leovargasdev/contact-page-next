import React, { useCallback, useState } from 'react'
import { FaRegEnvelope, FaPaperPlane, FaCheckCircle } from 'react-icons/fa'

import Input from '../Input'
import {
  Container,
  Loading,
  Title,
  TitleLines,
  GridInputs,
  Button,
  BoxSuccess
} from './styles'

const ContactForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [successSubmit, setSuccessSubmit] = useState(false)
  const handleSubmit = useCallback(event => {
    event.preventDefault()
    const data = {
      name: event.target[0].value,
      email: event.target[1].value,
      phone: event.target[2].value,
      company: event.target[3].value,
      message: event.target[4].value
    }
    setLoading(true)
    fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    }).then(res => {
      if (res.ok) {
        setLoading(false)
        setSuccessSubmit(true)
      }
    })
  }, [])

  return (
    <Container>
      {loading && <Loading />}

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
      {!successSubmit && (
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
            defaultValue="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            placeholder="Escreva sua mensagem aqui"
          />

          <Button type="submit">
            Enviar <FaPaperPlane />
          </Button>
        </form>
      )}
      <BoxSuccess active={successSubmit}>
        <FaCheckCircle />
        <h1>Mensagem enviada com sucesso!</h1>
      </BoxSuccess>
    </Container>
  )
}

export default ContactForm
