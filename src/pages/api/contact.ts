/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

const contact = async (request: NextApiRequest, response: NextApiResponse) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_API_PRIVATE_KEY.replace(/\\n/g, '\n')
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]

  await sheet.addRow({
    name: 'Fulano',
    email: 'fulano@hotmail.com',
    phone: '5454545',
    company: 'Agora vai',
    message:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    date: new Date()
  })

  response.status(204).redirect('/success')
}

export default contact
