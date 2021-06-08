import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query
  try {
    if (!id ) {
      return res.status(400).json({ message: '`id` required' })
    }
    if (typeof parseInt(id.toString()) !== 'number') {
      return res.status(400).json({ message: '`id` must be a number' })
    }
    const results = await query(`
    SELECT DISTINCT( program_plan.pp_year) as pp_year
    FROM program_plan
    WHERE program_plan.md_id = ?
    ORDER BY program_plan.pp_year`,id)

    return res.json(results)
    
   
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
