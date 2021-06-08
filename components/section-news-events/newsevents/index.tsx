import moment from 'moment'
import Image from 'next/image'

function NewsEvents({ data }) {
  
  if (data) {
    return (
      <div className="blog-carousel-01 row"> 
        {data.map((e) => (
          <div className="single-blog-grid-item-01 col-lg-6 item" key={e.id}>
              <div className="thumb">
                <Image width={532} height={401} src={`/assets/newsevents/${e.ne_image}`} className="img-fluid" alt="blog image"  />
              </div> 
              <div className="content">
                  <span className="time">{moment(e.ne_datetime).format('LTS')}</span>
                  <h3 className="title"><a href="#">{e.ne_title}</a></h3>
                  <p className="newsBreif"> {e.ne_description} </p>
                  <span className="time">
                    <Image width={40} height={40} src="/assets/logo/Logo-Center.png" className="newsProfileImage img-fluid" />  
                    <span className='blog-user-alignment'>SCD News - {moment(e.ne_datetime).format('DD-MMM-YYYY')}</span>
                    </span>
              </div>
          </div>
        ))}
      </div>      
    )
  } else {
    return null
  }
}

export default NewsEvents

