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
              <p className="mb-0 internal-content-text" >Distinguished guests,<br />
Our role as graduates of the Scientific College of Design is not limited to our academic achievements but extends to our active contribution to the realization of Oman Vision 2040.<br />
This ambitious vision foresees a prosperous future for the Sultanate, built on innovation, economic diversification, and sustainable development.<br />
As members of the Alumni Club, we stand today on the threshold of a new era, committed to being part of this national vision, contributing our ideas and projects that reflect our authentic Omani identity and aspirations towards the future.
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

