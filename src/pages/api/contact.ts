/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { NextApiRequest, NextApiResponse } from 'next'
import { GoogleSpreadsheet } from 'google-spreadsheet'

type Data = {
  name: string
}

const contact = async (
  request: NextApiRequest,
  response: NextApiResponse<Data>
) => {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID)

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_API_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_API_PRIVATE_KEY
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[0]

  await sheet.addRow({
    name: 'Fulano',
    email: 'fulano@hotmail.com',
    phone: '5454545',
    company: 'Sony',
    message: 'SAHDJKASHD KADKJAHSKDHASDHAKDHK AS ASD ASD AS D ASD '
  })

  response.status(200).json({
    name: 'ok'
  })
}

export default contact
