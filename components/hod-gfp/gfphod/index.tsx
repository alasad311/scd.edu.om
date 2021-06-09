import Image from 'next/image'
function HodGFP({ data }) {
  
  if (data) {
    return (
      <div className="row">
        <div className="col-lg-4 fluid-col-lg-4 col-mb-4" >
            <div className="fluid-col">
                <img src={"/assets/employees/"+data[0]['staff_image']} width={400} height={400} className="img-fluid cardImg padding-bottom-20" />
            </div>
        </div>
          <div className="col-lg-8">
            <p className="dean-content-text remove-top-padding">{data[0]['hod_message']}</p>
                <p className="dean-content-text dean-name-text remove-top-padding">{data[0]['staff_name']}, <br /> {data[0]['staff_title']} <br />Scientific College of Design</p>
          </div>
      </div>

    )
  } else {
    return null
  }
}

export default HodGFP

