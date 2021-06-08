import moment from 'moment'
import Image from 'next/image'

function AlumniUpcomingEvents({ data }) {
  
  if (data) {
    return (
      <div>
        {data.map((e) => (
          <div key={e.ae_id }>
            <div className="event_date">
              <div className="event-date-wrap">
                <p>{moment(e.ae_date).format('DD')}</p>
                <span>{moment(e.ae_date).format('MMM.YY')}</span>
              </div>
            </div>
            <div className="date-description">
              <h3>{e.ae_name}</h3>
              <p>{e.ae_description}</p>
              <hr className="event_line" />
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default AlumniUpcomingEvents

