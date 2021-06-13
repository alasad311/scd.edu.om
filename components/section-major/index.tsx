import Majors from "./majors"
export default function SectionMajor({majors}) {
  return (
      <section className="majors section margin-top-0">
          <div className="container">
              <div className="internal-heading margin-bottom-50">
                  <h2>Our Majors</h2>
                </div>
              <Majors data={majors} />
              <p className="major-sub">The Scientific College of Design is proud of its diverse culture. Over the years we have accepted students from more than 40 countries. </p>
          </div>
      </section>
  )
}
