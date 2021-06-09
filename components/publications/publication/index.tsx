
function Publications({ data }) {
  if (data) {
    return (
      <div className="owl-carousel owl-theme stage-margin" >
        
        {data.map((e) => (
          <div className="items owl-carousel-padding" key={e.id}>
              <h5>{e.publication_title}</h5>
          </div>
        ))}
      </div>
    )
  } else {
    return null
  }
}

export default Publications

