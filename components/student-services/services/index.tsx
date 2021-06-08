function Services({ data }) {
  
  if (data) {
    return (
      <div className="row padding-top-20">
         {data.map((e) => (
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0 appear-animation" key={e.ss_id} data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">    
            <div className="card background-box-services text-center rounded-0">
              <div className=" p-5">
                <div className=" my-4">
                  <h4 className="font-weight-extra-bold text-color-dark line-height-1 text-13 mb-3 d-inline-block">{e.ss_name}</h4>
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

export default Services

