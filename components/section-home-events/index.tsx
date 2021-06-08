import { eventsData,importantDatesData} from '../../lib/swr-hooks';
import Events from "./events"
import ImportantDates from "./important-dates"
export default function SectionHomeEvents() {
    const { events } = eventsData()
    const { dates } = importantDatesData()
  return (
    <section className="event">
        <div className="container">
            <div className="row">
                <div className="col-lg-6" style={{paddingRight:"31px"}}>
                    <h2>Events</h2>
                    <Events data={events} />
                </div>
                
                <div className="col-lg-6" style={{backgroundColor:"#ffffff"}}>
                    <h2>Important Dates</h2>
                    <div className="event-date-slide slick-initialized slick-slider slick-dotted" role="toolbar">
                        <div aria-live="polite" className="slick-list draggable">
                            <div className="slick-track slick-track-add" role="listbox">
                                <div className="row slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" style={{width: "570px"}}>
                                    <ImportantDates data={dates} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
