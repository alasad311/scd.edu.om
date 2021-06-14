function Office({ data }) {
  
  if (data) {
    return (
      <div className="row">
        {data.map((e) => (
          <div className="col-12 col-sm-6 col-lg-4 col-xl-4 col-xxl-3" key={e.id}>
            <span className="thumb-info thumb-info-hide-wrapper-bg mb-4">
              <span className="thumb-info-wrapper">
                <a href={"mailto:"+e.ao_email}>
                  <img width="350px" height="350px" src={"/assets/employees/"+e.ao_image} className="img-fluid" alt={e.ao_name} />
                  <span className="thumb-info-action-icon">
                      <i className="fas fa-envelope"></i>
                  </span>
                  <span className="thumb-info-title">
                    <span className="thumb-info-inner">{e.ao_name}</span>
                  </span>
                </a>
              </span>
              <span className="thumb-info-caption" >
                <span className="thumb-info-caption-text">{e.ao_title}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
     
    )
  } else {
    return null
  }
}

export default Office

