import { NextApiHandler } from 'next'
import { query } from '../../../lib/db'

const handler: NextApiHandler = async (_, res) => {
  try {
    const results = await query(`
    SELECT *
    FROM staff
    LEFT JOIN departments ON departments.dept_id = staff.department_id
    WHERE departments.dept_id = 3
    AND is_hod = 1
    LIMIT 0,1
  `)

    return res.json(results)
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

export default handler
