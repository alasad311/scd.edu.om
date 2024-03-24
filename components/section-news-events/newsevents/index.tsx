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
          <script src="https://static.elfsight.com/platform/platform.js" data-use-service-core defer></script>
          <div className="elfsight-app-82f6b637-5b8d-49ad-b733-8c8e68a20eb4" data-elfsight-app-lazy></div>
          </div>
      </div>      
    )
  } else {
    return null
  }
}

export default NewsEvents

