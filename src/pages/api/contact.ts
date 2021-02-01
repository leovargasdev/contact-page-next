/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { format } from 'date-fns'
import pt from 'date-fns/locale/pt'

const contact = async (request: NextApiRequest, response: NextApiResponse) => {
  const { name, email, phone, company, message } = request.body

  const dateTimeZone = new Date()
  dateTimeZone.toLocaleString('pt-BR', {
    timeZone: 'America/Sao_Paulo'
  })
  const date = format(dateTimeZone, "dd' de 'MMMM' de 'yyyy', às 'HH:mm", {
    locale: pt
  })

  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n')
  })
  await doc.loadInfo()

  const sheet = doc.sheetsByIndex[0]
  await sheet.addRow({
    name,
    email,
    phone,
    company,
    message,
    date
  })

  response.status(200).json({ ok: true })
}

export default contact
