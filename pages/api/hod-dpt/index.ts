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
    FROM majors
		LEFT JOIN departments ON departments.dept_id = majors.dept_id
		LEFT JOIN staff ON staff.department_id  = departments.dept_id
		WHERE majors.id = ?
    AND is_hod = 1
    LIMIT 0,1
  `,id)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
