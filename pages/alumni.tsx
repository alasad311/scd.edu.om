import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React  from 'react';
import AlumniPresident from '../components/alumni-president'
import AlumniTestimonial from '../components/alumni-testimonial'
import AlumniLatestEvent from '../components/alumni-latest-event'
import AlumniUpcomingEventDiv from '../components/alumni-upcoming-event'
export default function AlumniPage({otherapps,president,testimonial,latestevent,upcomingevent}) {
  return (
    <div>
      <Head>
        <title>Scientific College of Design</title>
        <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
        <meta name="keywords" content="" />
        <meta name="author" content="Scientific College of Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo/n_fav_icon.png" />
        <link rel="stylesheet" type="text/css" href="css/animate/animate.min.css"/>
        <link rel="stylesheet" href="js/owl.carousel/dist/assets/owl.carousel.min.css" />
      </Head>
      <Header active="alumni" otherapp={otherapps} />
      <section className="section-internal margin-bottom-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="tabs tabs-vertical tabs-left tabs-navigation">
                <ul className="nav nav-tabs col-sm-3">
                  <li className="nav-item">
                    <a className="nav-link active" href="#alumniclub" data-bs-toggle="tab">Alumni Club</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#alumniopportunity" data-bs-toggle="tab">Alumni Opportunity</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#awordfromscdalumni" data-bs-toggle="tab">A Word from SCD Alumni</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#upcomingevent" data-bs-toggle="tab">Upcoming Events</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#almnioffice"  data-bs-toggle="tab">Almni Office</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mobile-spacing">
              {/* START */}
              <div className="tab-pane tab-pane-navigation active" id="alumniclub">
                <div className="row">
                  <div className="col-lg-12">
                    <img src="/assets/content/alumniH1.jpg" width={1600} height={800} className="img-fluid"/>
                    <div className="internal-heading padding-top-20">
                      <h1>Alumni Club</h1>
                    </div>
                    <p className="internal-content-text">The Scientific College of Design believes that education does not end with our students obtaining their degree. We are dedicated to maintain a stable connection with our alumni and supporting them even after their graduation ceremony. SCD ensure a strong communication stream is build with all graduates by holding annual activities, events and workshop. These events are initiated to provide SCDians with lifelong learning experience as well as to ensure success in their career path.   </p>
                    <div className="row counters with-borders ">
                      <div className="col-lg-4">
                        <div className="counter counter-primary">
                          <strong>250-300</strong>
                          <label>Average Graduates Yearly</label>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="counter counter-primary">
                          <strong>3000+</strong>
                          <label>Total Graduates</label>
                        </div>
                      </div> 
                      <div className="col-lg-4">
                        <div className="counter counter-primary">
                          <strong>13+</strong>
                          <label>No. of Graduation Ceremony</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="internal-heading padding-top-20">
                      <h1>Alumni Club President</h1>
                    </div>
                    <AlumniPresident presidentData={president} />
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="alumniopportunity">
                <p className="internal-content-text">SCD alumni are granted various opportunities; The Alumni office holds annual events such as SCD Career Fair. This event allows local and international companies to recruit hardworking talented students and alumni for jobs, internships, and freelance opportunities. As SCD alumni, you are offered an open invitation for SCD event and exhibitions. We are proud to exhibit SCD graduate students work in our gallery and in order to ensure their academic excellence SCD offers advising and coaching session by our Faculty members to guide graduates in their professional life.</p>
                <img src="/assets/content/alumniopp.jpg" className="img-fluid padding-bottom-20 maring-top-20" width={1600} height={659} />
                <div className="row featured-boxes-full featured-boxes-full-scale">
                  <div className="col-lg-3 featured-box-full featured-box-full-primary">
                    <i className="far fa-building"></i>
                    <h4>Access Facilities</h4>
                    <p className="font-weight-light">SCD Alumni are allowed to use college facilities Such as Computer Labs, Hall, Theater, Lectures rooms for courses and educational resources. As an alumni,</p>
                  </div>
                  <div className="col-lg-3 featured-box-full featured-box-full-primary">
                    <i className="fas fa-business-time"></i>
                    <h4>Advising & Coaching</h4>
                    <p className="font-weight-light">The SCD faculty offers professional feedback to alumni</p>
                  </div>
                  <div className="col-lg-3 featured-box-full featured-box-full-primary">
                    <i className="far fa-calendar-alt"></i>
                    <h4>Events & Workshops</h4>
                    <p className="font-weight-light">Our Alumni are granted a priority in all SCD workshops, talk, events and exhibitions.</p>
                  </div>
                  <div className="col-lg-3 featured-box-full featured-box-full-primary">
                    <i className="far fa-star"></i>
                    <h4>Support & Recognition</h4>
                    <p className="font-weight-light">We are proud to celebrate your achievement through SCD social media platforms.</p>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="awordfromscdalumni">
                <img src="/assets/alumni/alumniH2.jpg" className="img-fluid" width={1600} height={800} />
                <div className="row text-center">
                  <div className="col">
                    <h2 className="word-rotator slide font-weight-bold text-8 mb-2 padding-top-50 padding-bottom-50">
                      <span>SCD specializes in preparing students for a </span>
                      <span className="rotate2 word-rotator-words bg-primary_">creative,innovative,successful</span>
                      <span> Life</span>
                    </h2>
                  </div>
                </div>
                <div className="row graduate-testimonial">
                  <div className='col-lg-12'>
                    <AlumniTestimonial testimonialdata={testimonial} />
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="upcomingevent">
                <div className="row">
                  <AlumniLatestEvent eventsdata={latestevent} />
                  <div className="col-lg-6" style={{backgroundColor:"#fff"}} >
                    <h2>Upcoming Events</h2>
                    <div className="event-date-slide slick-initialized slick-slider slick-dotted" role="toolbar">
                      <div aria-live="polite" className="slick-list draggable">
                        <div className="slick-track" role="listbox">
                          <div className="row slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true">
                            <div className="col-md-12">
                              <AlumniUpcomingEventDiv eventsdata={upcomingevent} />
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                 </div>
                </div>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="almnioffice">
                <div className="internal-heading margin-bottom-30">
                    <h1>Message from Alumni Head</h1>
                </div>
                <div className="row">
                  <div className="col-lg-3 fluid-col-lg-3 col-mb-3" >
                    <div className="fluid-col">
                      <img src="/assets/employees/haitham.jpg" className="img-fluid" width={350} height={350} />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="testimonial testimonial-style-2 testimonial-with-quotes mb-0">
                      <blockquote >
                        <p className="mb-0"><b>Congratulation, and welcome to SCD Alumni Club</b> your SCD certificate is your ticket to enter the SCD Alumni Club, more than 2650+ graduated from SCD and 
                            we are happy to be in touch with you all, and we want all of you to be connected with us. 
                            The Alumni club offers you to build your network, know the achievement accomplished done by your fellow alumni’s and of 
                            course to have FUN too, Alumni bond is enjoyable, and it helps you to successed and connect with us.
                            </p>
                      </blockquote>
                      <div className="testimonial-author padding-top-20 ">
                        <p><strong className="font-weight-extra-bold text-align-right">Haitham Al Azawi</strong><span className="text-align-right">Head of Alumni</span></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row padding-top-50">
                  <div className="col-lg-4 col-md-12 alumni-circle" data-target="followus">
                    <div className="circle">
                      <span><i className="fas fa-hashtag" ></i></span>
                    </div>
                    <h5 className="circle-title padding-top-20">Follow us</h5>
                  </div>
                  <div className="col-lg-4 col-md-12 alumni-circle" data-target="stayconnected">
                    <div className="circle">
                      <span><i className="fas fa-phone-volume"></i></span>
                    </div>
                    <h5 className="circle-title padding-top-20">Stay Connected</h5>
                  </div>
                  <div className="col-lg-4 col-md-12 alumni-circle" data-target="emailus">
                    <div className="circle">
                      <span><i className="fas fa-envelope"></i></span> 
                    </div>
                    <h5 className="circle-title padding-top-20">Email Us</h5>
                  </div>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <script src="js/jquery/jquery-3.6.0.min.js"></script>
      <script src="js/bootstrap/bootstrap.bundle.js"></script>
      <script type="text/javascript" src="/js/owl.carousel/dist/owl.carousel.min.js"></script>
      <script src="js/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
      <script type="text/javascript" src="/js/alumni.js"></script>

    </div>
  )
}
export async function getServerSideProps() {

  const ress = await fetch('http://localhost:3000/api/otherapps')
  const otherapp = await ress.json()

  const respresident = await fetch('http://localhost:3000/api/alumni-president')
  const president = await respresident.json()
  const restestimonial = await fetch('http://localhost:3000/api/alumni-testimonial')
  const testimonial = await restestimonial.json()
  const reslatestevent = await fetch('http://localhost:3000/api/alumni-latest-event')
  const latestevent = await reslatestevent.json()
  const ressupcomingevent = await fetch('http://localhost:3000/api/alumni-upcoming-event')
  const upcomingevent = await ressupcomingevent.json()

  
  return {
      props: {
          otherapps: otherapp,
          president:president,
          testimonial:testimonial,
          latestevent:latestevent,
          upcomingevent:upcomingevent


      },
  };
}
