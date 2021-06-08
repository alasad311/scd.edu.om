import Helmet from "react-helmet";

function Publications({ data }) {
  if (data) {
    return (
      <div className="owl-carousel owl-theme stage-margin" >
         <Helmet>
          <script src="js/aboutus.js"></script>
        </Helmet>
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

