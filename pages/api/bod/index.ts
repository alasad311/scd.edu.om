import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
    SELECT *
    FROM otherbod
    LEFT JOIN otherbod_academic ON otherbod_academic.id = otherbod.bod_academic
    WHERE otherbod_academic.is_active = 1
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
