import { studentservicesData } from '../../lib/swr-hooks';
import Services from "./services"
export default function StudentServices() {
    const { servicesdata } = studentservicesData()
  return (   
      <Services data={servicesdata} />
  )
}
