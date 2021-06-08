import { alumniUpeventsData } from '../../lib/swr-hooks';
import AlumniUpcomingEvent from "./events"
export default function AlumniUpcomingEventDiv() {
    const { eventsdata } = alumniUpeventsData()
  return (
    <AlumniUpcomingEvent data={eventsdata}/>
  )
}
