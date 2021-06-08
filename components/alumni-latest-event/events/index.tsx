import Image from "next/image"

function AlumniEvents({ data }) {
  
  if (data) {
    return (
      <div className="col-lg-6">
        <h2>Latest Event</h2>
        {data.map((e) => (
          <div className="event-img" key={e.ae_id }>
            <img src={"/assets/alumni/events/"+e.ae_image} width="578" height="593" className="img-fluid" alt="event-img" />
            <div className="event-img_title">
              <h3>{e.ae_name}</h3>
              <p>{e.ae_description}</p>
            </div>
          </div> 
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default AlumniEvents

