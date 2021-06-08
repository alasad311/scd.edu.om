import { majorsData } from '../../lib/swr-hooks';
import Majors from "./majors"
export default function SectionMajor() {
    const { majors } = majorsData()
  return (
      <section className="majors section margin-top-0">
          <div className="container">
              <h2 className="margin-bottom-50">Our Majors</h2>
              <Majors data={majors} />
              <p className="major-sub">The Scientific College of Design is proud of its diverse culture. Over the years we have accepted students from more than 40 countries. SCD has kept a distinguish recognition and we accept applications locally and internationally.</p>
          </div>
      </section>
  )
}
