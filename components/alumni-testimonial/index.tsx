import { alumniTestimonialData } from '../../lib/swr-hooks';
import AlumniTestimonial from "./testimonial"
export default function AlumniEvent() {
    const { testimonialdata } = alumniTestimonialData()
  return (
    <AlumniTestimonial data={testimonialdata}/>
  )
}
