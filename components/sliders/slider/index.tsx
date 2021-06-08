import Head from "next/head"

function Slide({ sliders }) {
  
  if (sliders) {
    return (
        <div className="slider-wrapper">
           <Head>
             <script src="js/custom.js"></script>
             <script src="js/toggler.js"></script>
             <script src="js/scroll.js"></script>
            </Head>
          {sliders.map((e) => (
              <div key={e.id} data-url={e.link_only ? e.url : ""} className={e.link_only ? "slider-item mouse-pointer" : "slider-item"} style= {{backgroundImage : `url(../assets/sliders/${e.img})`}}>
                  {e.right_box ? (
                  <div className="content right-content">
                  {e.has_box ? (
                    <div className="main-content">
                        <h1 className="margin-bottom-30 title">{e.title}</h1>
                        <p className="d-none d-md-block sub-title">{e.description  }</p>
                        {e.has_button ? (
                           <a href={e.url} className="main-btn slider-btn-white" target="_blank">Learn More</a>
                        ) : (
                         ""
                        )}
                       
                    </div>
                    ) : (
                      ""
                      )}
                </div>
                ):(
                  <div className="content left-content">
                  {e.has_box ? (
                    <div className="main-content">
                        <h1 className="margin-bottom-30 title">{e.title}</h1>
                        <p className="d-none d-md-block sub-title">{e.description  }</p>
                        {e.has_button ? (
                           <a href={e.url} className="main-btn slider-btn-white" target="_blank">Learn More</a>
                        ) : (
                         ""
                        )}
                       
                    </div>
                    ) : (
                      ""
                      )}
                </div>
                )}                 
                  <div className="overlay"></div>
              </div>
          ))}
          
        </div>
    )
  } else {
    return null
  }
}

export default Slide

