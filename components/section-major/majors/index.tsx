import Image from 'next/image'

function Majors({ data }) {
  
  if (data) {
    return (
      <div className="row">
         {data.map((e) => (
           <div className="col-6 col-md-6 col-lg-3 padding-0"  key={e.id}>
              <a href={`program/major/${e.id}`}>
                  <div className="major-card">
                      <div className="card">
                          <div className="thumb">
                              <img className="card-img-top img-fluid" src={"/assets/majors/"+e.major_image} width={250} height={250} alt={e.major_name} />
                          </div>
                          <div className="card-img-overlay">
                              <div className="card-body">
                                  <h6>{e.major_name}</h6>
                              </div>
                          </div>
                      </div>
                  </div>
              </a>
          </div>
           ))}
      </div>
      
    )
  } else {
    return null
  }
}

export default Majors

