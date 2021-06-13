function Preisdent({ data }) {
  
  if (data) {
    return (
      <div className="row">
        <div className="col-lg-4 fluid-col-lg-4 col-mb-4" >
          <div className="fluid-col">
            <img src={"/assets/alumni/"+data[0]['ap_image']} width={400} height={400} className="img-fluid padding-bottom-20" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-0">
            <blockquote>
              <p className="mb-0 internal-content-text" >Hello and welcome SCD graduates to Alumni Club, we are here to meet and bring back the memories between us and the college. I am pleased to communicate with you all and to know all your news, lets activate the club and share all our news and experience to make it more exciting for all of us.
                  </p>
            </blockquote>
            <div className="testimonial-author padding-top-20">
              <p ><strong className="font-weight-extra-bold ">{ data[0]['ap_name']}</strong><span>Alumni Club President</span></p>
            </div>
          </div>
        </div>
      </div>
     
    )
  } else {
    return null
  }
}

export default Preisdent

