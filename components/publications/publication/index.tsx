
function Publications({ data }) {
  if (data) {
    return (
      <div className="owl-carousel owl-theme stage-margin" >
        
        {data.map((e) => (
          <div className="items owl-carousel-padding" key={e.id}>
             <a href={e.publication_link} target="_blank"> <h5>{e.publication_title}</h5></a>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Publications

