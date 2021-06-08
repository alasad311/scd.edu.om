import { alumnieventsData } from '../../lib/swr-hooks';
import AlumniEvents from "./events"
export default function AlumniLatestEvent() {
    const { eventsdata } = alumnieventsData()
  return (
    <AlumniEvents data={eventsdata}/>
  )
}
