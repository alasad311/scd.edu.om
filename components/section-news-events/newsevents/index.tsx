import moment from 'moment'
import Image from 'next/image'

function NewsEvents({ data }) {
  
  if (data) {
    return (
      <div className="blog-carousel-01 row"> 
          <div className="single-blog-grid-item-01 col-lg-6 item">
            <iframe src="//lightwidget.com/widgets/716309d307f75f4682862e0ebd7b72db.html" scrolling="no" allowtransparency="true" class="lightwidget-widget" 
            style={{width: "100%", border: "0", overflow: "hidden"}}></iframe>
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

