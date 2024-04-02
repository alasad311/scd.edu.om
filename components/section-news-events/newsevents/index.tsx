import moment from 'moment'
import Image from 'next/image'

function NewsEvents({ data }) {
  
  if (data) {
    return (
      <div className="blog-carousel-01 row"> 
          <div className="single-blog-grid-item-01 col-lg-6 item">
            <div data-mc-src="e5dc111b-18ed-42a1-9398-e4cb08551c2e#instagram"></div>
          </div>
          <div className="single-blog-grid-item-01 col-lg-6 item">
          <a className="twitter-timeline" data-width="500" data-height="600" href="https://twitter.com/scd_oman?ref_src=twsrc%5Etfw">Tweets by scd_oman</a> 
          </div>
      </div>      
    )
  } else {
    return null
  }
}

export default NewsEvents

