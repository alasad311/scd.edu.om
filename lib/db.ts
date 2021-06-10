import mysql from 'serverless-mysql'

export const db = mysql({
  config: {
    host: "localhost",
    database: "omandev_website",
    user: "omandev_webadmin",
    password: "I#yTb]s,==d~",
    port: parseInt(process.env.MYSQL_PORT),
  },
})

export async function query(
  q: string,
  values: (string | number)[] | string | number = []
) {
  try {
    const results = await db.query(q, values)
    await db.end()
    return results
  } catch (e) {
    throw Error(e.message)
  }
}
