import moment from 'moment'
import Image from 'next/image'
import getYouTubeID from 'get-youtube-id';
function Events({ data }) {
  if (data) {
           if(data[0]['event_image'].includes("youtube"))
           {
            return (
              <div className="row">
              {data.map((e) => (
                <a href={e.event_image} target="_blank"  key={e.id}>
                  <div className="event-img">
                    <span className="event-img_date">{moment(e.event_date).format('DD-MMM-YYYY')}</span>
                    <Image width={578} height={386} src={"https://img.youtube.com/vi/"+getYouTubeID(e.event_image)+"/0.jpg"} className="img-fluid" alt="event-img" />
                    <div className="event-img_title">
                        <h3>{e.event_title}</h3>
                        <p>{e.event_description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>)
           } 
  } else {
    return null
  }
}

export default Events

