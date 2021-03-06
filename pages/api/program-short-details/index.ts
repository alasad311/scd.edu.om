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
    SELECT * 
   FROM program_details 
   LEFT JOIN short_courses ON short_courses.sc_id = program_details.link_id
   WHERE program_details.link_id = ?
   AND program_details.is_shortcourse = 1
 
 `,id)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
