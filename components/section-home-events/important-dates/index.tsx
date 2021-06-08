import Image from 'next/image'
import moment from 'moment'

function ImportantDates({ data }) {
  
  if (data) {
    return (
      <div className="col-md-12">
         {data.map((e) => (
           <div key={e.id}>
              <div className="event_date">
                <div className="event-date-wrap">
                    <p>{moment(e.id_date).format('DD')}</p>
                    <span>{moment(e.id_date).format('MMM.YY')}</span>
                </div>
              </div>
              <div className="date-description">
                  <h3>{e.id_title}</h3>
                  <p>{e.id_description}</p>
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

export default ImportantDates

