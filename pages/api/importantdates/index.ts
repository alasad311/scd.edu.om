import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
    SELECT * FROM important_dates WHERE id_date >= DATE(NOW()) ORDER BY ABS( DATEDIFF( id_date, DATE(NOW()) ) )  ASC LIMIT 0,3
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
