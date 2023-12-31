import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react';

export default function ProgramPa({majorBA,short,majorMA,otherapp}) {
  
  // const handleClick = (id,string) =>
  // {
  //     switch(string)
  //     {
  //       case "BA":
  //         window.location.href = "program/"+id+"?type=major";
  //         break;
  //       case "MA":
  //         window.location.href = "program/"+id+"?type=major";
  //         break;
  //       case "SHORT":
  //         window.location.href = "program/"+id+"?type=short";
  //         break;
  //     }
  // };
   

  return (
    <div>
      <Head>
        <title>Scientific College of Design</title>
        <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
        <meta name="keywords" content="" />
        <meta name="author" content="Scientific College of Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo/n_fav_icon.png" />
        <link rel="stylesheet" href="js/owl.carousel/dist/assets/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/spidoche/Spidoche.minimal.css"></link>
      </Head>
      <Header active="programs" otherapp={otherapp} />
      <section className="section margin-bottom-0">
        <div className="container-fluid">
          <div className="row" id="step-1-programs">
            <div className='col-lg-12'>
              <img src="/assets/content/programs.jpg" width={2000} height={600} className="img-fluid" />
              <div className="row justify-content-center">
                <div className="sm-30 col-md-7 col-lg-4 mb-4 mb-lg-0">
                  <div className="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-primary my-4 show-pointer" >
                    <div className="featured-box">
                      <div className="box-content px-lg-4 px-xl-5 py-lg-5">
                        <h2 className="font-weight-normal text-5">GFP Program</h2>
                        <a href="/program/major/28" className="btn btn-light btn-outline font-weight-semibold text-color-dark btn-px-5 btn-py-2 border-width-1 text-1 mt-3 GFP">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-30 col-md-7 col-lg-4 mb-4 mb-lg-0">
                  <div className="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-primary my-4 show-pointer undergraduate"  >
                    <div className="featured-box">
                      <div className="box-content px-lg-4 px-xl-5 py-lg-5">
                        <h2 className="font-weight-normal text-5">Undergraduate</h2>
                        <a href="#" className="btn btn-light btn-outline font-weight-semibold text-color-dark btn-px-5 btn-py-2 border-width-1 text-1 mt-3 undergraduate">View Majors</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-30 col-md-7 col-lg-4 mb-4 mb-lg-0">
                  <div className="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-primary my-4 show-pointer postgraduate" >
                    <div className="featured-box">
                      <div className="box-content px-lg-4 px-xl-5 py-lg-5">
                        <h2 className="font-weight-normal text-5">PostGraduate</h2>
                        <a href="#" className="btn btn-light btn-outline font-weight-semibold text-color-dark btn-px-5 btn-py-2 border-width-1 text-1 mt-3 postgraduate">View Majors</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sm-30 col-md-7 col-lg-4 mb-4 mb-lg-0">
                  <div className="featured-boxes featured-boxes-modern-style-2 featured-boxes-modern-style-primary my-4 show-pointer shortcourses" >
                    <div className="featured-box">
                      <div className="box-content px-lg-4 px-xl-5 py-lg-5">
                        <h2 className="font-weight-normal text-5">Short Courses</h2>
                        <a href="#" className="btn btn-light btn-outline font-weight-semibold text-color-dark btn-px-5 btn-py-2 border-width-1 text-1 mt-3 shortcourses">View Courses</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* */}
          <div className="row programs" id="step-2-undergraduate" style={{display:"none"}}  >
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div className="p-2" > 
                  <button type="button" className="probackstep btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" data-self="undergraduate"><span><i className="fas fa-chevron-left"></i></span>Start Over</button>
                </div>
                <div className="internal-heading padding-top-20">
                  <h1>Undergraduate</h1>
                </div>
                <div className="p-2" ><p> &nbsp; &nbsp; &nbsp;</p></div>
              </div>
            </div>
            <div className="row justify-center">
              {majorBA.map((e) => (
                <div className="col-12 col-md-6 col-lg-3 padding-0" key={e.id}>
                  <a  href={"/program/major/"+e.id+"/"}  className="program" data-major={e.id} data-targert="">
                    <div className="course-card-style-3">
                      <div className="card">
                        <div className="thumb">
                        <img className="card-img-top" src={"/assets/majors/"+e.major_image} style={{width:"250px"}} alt={e.major_name} />
                        </div>
                        <div className="card-img-overlay">
                          <div className="card-body">
                          <h6>{e.major_name}</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="row programs" id="step-2-postgraduate" style={{display:"none"}} >
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div className="p-2" > 
                  <button type="button" className="probackstep btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" data-self="postgraduate"><span><i className="fas fa-chevron-left"></i></span>Start Over</button>
                </div>
                <div className="internal-heading padding-top-20">
                  <h1>Postgraduate</h1>
                </div>
                <div className="p-2" ><p> &nbsp; &nbsp; &nbsp;</p></div>
              </div>
              <div className="row justify-center">
                {majorMA.map((e) => (
                  <div className="col-12 col-md-6 col-lg-3 padding-0" key={e.id}>
                    <a href={"/program/major/"+e.id+"/"} className="program" data-major={e.id}   data-targert="">
                      <div className="course-card-style-3">
                        <div className="card">
                          <div className="thumb">
                          <img className="card-img-top" src={"/assets/majors/"+e.major_image} style={{width:"250px"}} alt={e.major_name} />
                          </div>
                          <div className="card-img-overlay">
                            <div className="card-body">
                            <h6>{e.major_name}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row programs" id="step-2-short-courses" style={{display:"none"}} >
            <div className="col-lg-12">
              <div className="d-flex justify-content-between">
                <div className="p-2" > 
                  <button type="button" className="probackstep btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" data-self="short-courses"><span><i className="fas fa-chevron-left"></i></span>Start Over</button>
                </div>
                <div className="internal-heading padding-top-20">
                  <h1>Short Courses</h1>
                </div>
                <div className="p-2" ><p> &nbsp; &nbsp; &nbsp;</p></div>
              </div>
              <div className="row justify-center">
                {short.map((e) => (
                  <div className="col-12 col-md-6 col-lg-4 padding-0 " key={e.sc_id}>
                    <a  href={"/program/short/"+e.sc_id+"/"}  className="program" data-shortcourse={e.sc_id} data-targert="">
                      <div className="course-card-style-3">
                        <div className="card">
                          <div className="thumb">
                          <img className="card-img-top" src={"/assets/majors/"+e.sc_image} style={{width:"300px"}} alt={e.sc_name} />
                          </div>
                          <div className="card-img-overlay">
                            <div className="card-body">
                            <h6>{e.sc_name}</h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <Script strategy="beforeInteractive" src="js/jquery/jquery-3.6.0.min.js"/>
        <Script strategy="lazyOnload" src="js/bootstrap/bootstrap.bundle.js"/>
        <Script strategy="lazyOnload" type="text/javascript" src="/js/owl.carousel/dist/owl.carousel.min.js"/>
        <Script strategy="lazyOnload" src="js/spidoche/jquery.spidochetube.min.js"/>
        <Script strategy="lazyOnload" type="text/javascript" src="/js/programs.js"/>
        <Script src="js/header.js" strategy="lazyOnload"/>
    </div>
  )
}


// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps () {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch('https://scd.edu.om/api/program-majors-ba')
  const majorBA = await res.json()

  const res2 = await fetch('https://scd.edu.om/api/program-majors-ma')
  const majorMA = await res2.json()

  const res3 = await fetch('https://scd.edu.om/api/program-short-courses')
  const short = await res3.json()

  const ress = await fetch('https://scd.edu.om/api/otherapps')
  const otherapp = await ress.json()
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      majorBA,
      majorMA,
      otherapp,
      short
    },
  }
}