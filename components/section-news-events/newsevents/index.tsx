import moment from 'moment'
import Image from 'next/image'

function NewsEvents({ data }) {
  
  if (data) {
    return (
      <div className="blog-carousel-01 row"> 
          <div className="single-blog-grid-item-01 col-lg-12 item">
            <div data-mc-src="bb6f34ed-02fe-468a-a369-2823aa672994#instagram"></div>
          </div>
      </div>      
    )
  } else {
    return null
  }
}

export default NewsEvents

