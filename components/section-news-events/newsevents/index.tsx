import moment from 'moment'
import Image from 'next/image'

function NewsEvents({ data }) {
  
  if (data) {
    return (
      <div className="blog-carousel-01 row"> 
          <div className="single-blog-grid-item-01 col-lg-6 item">
            <div className="fb-page" data-href="https://www.facebook.com/SCD.Art.Design/" data-tabs="timeline, events" data-width="1320" data-height="600" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/SCD.Art.Design/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SCD.Art.Design/">‎الكلية العلمية للتصميم- The Scientific College of Design‎</a></blockquote></div>
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

