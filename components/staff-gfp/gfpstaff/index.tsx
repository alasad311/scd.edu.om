import Link from 'next/link'
import Image from 'next/image'
function Office({ data }) {
  
  if (data) {
    return (
      <div className="row">
        {data.map((e) => (
          <div className="col-md-6 col-lg-3" key={e.staff_id}>
            <div className="staff-member my-md-3 my-lg-3 my-sm-0">
              <div className="cards text-center">
                <img src={`/assets/employees/`+e.staff_image} className="cardImg img-fluid m-auto pt-4" />
                <div className="cardz-body">
                  <h5 className="teacher mb-0">{e.staff_name}</h5>
                  <span>{e.staff_title}</span>
                  <p className="teacher-quote pt-3">{e.dept_name}</p>
                  <ul className="list-inline pt-2 social">
                    <li className="list-inline-item"><a href={`mailto:`+e.staff_email} target="_blank"><span className="fas fa-envelope"></span></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Office

