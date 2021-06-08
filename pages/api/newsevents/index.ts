import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
    SELECT * FROM newsevents ORDER BY ABS( DATEDIFF( ne_datetime, DATE(NOW()) ) )  ASC LIMIT 0,2
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
