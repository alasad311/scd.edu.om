import Image from 'next/image'
import Helmet from "react-helmet";

function AlumniTestimonial({ data }) {
  
  if (data) {
    return (
      <div className="owl-carousel owl-theme stage-margin stage-margin-lg nav-dark nav-style-3 mb-0" > 
        {data.map((e) => (
          <div className="testimonial testimonial-style-2 mb-0" key={e.at_id}>
            <blockquote>
              <p className="text-color-dark text-5 line-height-5 mb-0">{e.at_testimonial}</p>
            </blockquote>
            <div className="testimonial-author">
              <p><strong className="font-weight-extra-bold text-2">{e.at_name}</strong></p>
              <p><strong className="text-color-gray">{e.at_title}</strong></p>
              <p><strong className="text-color-gray">{e.at_major}</strong></p>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default AlumniTestimonial

