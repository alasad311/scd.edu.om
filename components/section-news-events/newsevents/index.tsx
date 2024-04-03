import moment from 'moment'
import Image from 'next/image'

function NewsEvents({ data }) {
  
  if (data) {
    return (
      <div className="blog-carousel-01 row"> 
          <div className="single-blog-grid-item-01 col-lg-12 item">
            <div data-mc-src="a3915b90-7d66-44bb-a557-563ec3865f97#instagram"></div>
          </div>
      </div>      
    )
  } else {
    return null
  }
}

export default NewsEvents

