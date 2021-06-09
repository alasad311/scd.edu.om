import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import SectionMajor from '../components/section-major'
import SectionZoom from '../components/section-zoom'
import SectionHomeEvents from '../components/section-home-events'
import SectionNewsletter from '../components/section-newsletter'
import SectionNewsEvents from '../components/section-news-events'
import Footer from '../components/footer'
import moment from 'moment';
import Instagram from 'instagram-web-api';

export default function Home({posts,sliders,otherapps,majordata,sessiondata,date,event,mag,newse}) {
  const optionMajor = Object.keys(majordata).map(key => (
    { value: majordata[key]['id'] , label: majordata[key]['major_name']}))
  const optionSessionDT = Object.keys(sessiondata).map(key => (
    { value: sessiondata[key]['id'] , label: "Date: "+moment(sessiondata[key]['zs_date']).format('DD-MMM-YYYY')+" From: "+ 
    moment(sessiondata[key]['zs_f_time']).format('hh:mm A')+" To: "+moment(sessiondata[key]['zs_t_time']).format('hh:mm A')}))
  return (
    
    <div>
      <Head>
        <title>Scientific College of Design</title>
        <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
        <meta name="keywords" content="" />
        <meta name="author" content="Scientific College of Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo/n_fav_icon.png" />
        <link rel="stylesheet" type="text/css" href="js/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="css/animate/animate.min.css"/>
        <link rel="stylesheet" type="text/css" href="css/instagram/instagram.css"/>
        <link rel="stylesheet" href="js/owl.carousel/dist/assets/owl.carousel.min.css" />
        {'<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" integrity="sha512-RXf+QSDCUQs5uwRKaDoXt55jygZZm2V++WUZduaU/Ui/9EGp3f/2KZVahFZBKGH0s774sd3HmrhUy+SgOFQLVQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>'}
      </Head>
     
      
      <Header active="home" otherapp={otherapps} />
     
      <div className="showcase">
        <div className="container-fluidS">
            <div className="side-social-icons hide-md-and-down">
                <a target="_blank" href="https://www.facebook.com/SCD.Art.Design"><i className="fab fa-facebook-square"></i></a>
                <a target="_blank" href="https://www.instagram.com/scd_oman/?hl=en"><i className="fab fa-instagram-square"></i> </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCA5Ahmkvx3ia4LMM3fs8JdA"><i className="fab fa-youtube-square"></i> </a>
                <a target="_blank" href="https://twitter.com/scd_oman?lang=en"><i className="fab fa-twitter-square"></i> </a>
            </div>
            <div className="scroll-next hide-md-and-down">
                <div className="chevrons">
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                    <div className="chevron"></div>
                </div>
            </div>
            <div className="indicator-style-3">
                <div className="home-slider-progressbar">
                    <span className="home-slider-progress"></span>
                    <span className="home-slider-progress-active"></span>
                </div>
                <i className="flaticon-up-arrow"></i>
                <div className="current">01</div>
                <i className="flaticon-down-arrow"></i>
            </div>
            {sliders &&
            <div className="slider-wrapper">
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
            }
        </div>
        <div className="Acc-main-content animated fadeInLeft delay-3s ">
            <h3 className="margin-bottom-30 title" style={{fontSize: "40px"}}>We are <span className="rotate"> Accredited</span>.</h3>
        </div>
      </div>
      <div className="fixed-right side-form-icons">
        <a href="tel:0096824513222" target="_blank"><i className="fas fa-phone icon" id="open-opening-popup"></i></a>
        <a href="https://goo.gl/maps/92b7Gy7vTMCAh6H46" target="_blank"> <i className="fas fa-map-marker-alt icon" id="open-location-popup"></i></a>
        <a href="mailto:info@scd.edu.om" target="_blank"><i className="fas fa-envelope icon" id="open-form-popup"></i></a>
      </div>
      <SectionMajor majors={majordata} />
      <SectionZoom majors={majordata} session_DT={sessiondata} oM={optionMajor} oS={optionSessionDT} />
      <section className="instagram-section section margin-top-0">
        <div className="container">
            {posts &&
              <div className="row">
              {posts.map(({ node }, i) => {
                    return (
                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                        <div className="photo-box mouse-pointer" data-url={"https://www.instagram.com/p/"+node.shortcode}>
                          <div className="image-wrap">
                              <img src={node.display_url} alt="" />
                              <div style={{display:"inline",paddingRight:"10px"}}><i className="fas fa-heart" style={{paddingRight:"10px",color:"#9CCA43"}} aria-hidden="true"></i>{node.edge_media_preview_like.count}</div>
                                    <i className="fas fa-comment" style={{paddingRight:"10px",color:"#9CCA43"}} aria-hidden="true"></i>{node.edge_media_to_comment.count}
                          </div>
                          <div className="description">
                            <div className="date">{moment.unix(node.taken_at_timestamp).format("DD-MMM-YYYY hh:mm A")}</div>
                          </div>
                        </div>
                      </div>
                    );
                })}
            </div>
            }
        </div>
      </section>
      <SectionHomeEvents events={event} dates={date} />
      <SectionNewsletter links={mag} />
      <SectionNewsEvents news={newse} />
      
      <Footer />
      <script src="js/jquery/jquery-3.6.0.min.js"></script>
      <script src="js/slick/slick.js"></script>
      
      <script src="js/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
      <script src="js/bootstrap/bootstrap.bundle.js"></script>       
      <script src="js/custom.js"></script>
      <script src="js/toggler.js"></script>
      <script src="js/scroll.js"></script>
    </div>
  )
}
export async function getServerSideProps() {
      // const client = new Instagram({ username: 'alasad.dev', password: '@Mahmud1989' });
      // await client.login();

      const res = await fetch('http://localhost:3000/api/slider/')
      const slider = await res.json()

      const ress = await fetch('http://localhost:3000/api/otherapps/')
      const otherapp = await ress.json()     
      
      const resmajor = await fetch('http://localhost:3000/api/major/')
      const majors = await resmajor.json()    

      const ressession = await fetch('http://localhost:3000/api/sessiondt/')
      const sessiondt = await ressession.json()

      const resevents = await fetch('http://localhost:3000/api/events/')
      const events = await resevents.json()    

      const resdates = await fetch('http://localhost:3000/api/importantdates/')
      const dates = await resdates.json()

      const resmag = await fetch('http://localhost:3000/api/newsletter/')
      const mag = await resmag.json()     
      const resnews = await fetch('http://localhost:3000/api/newsevents/')
      const newse = await resnews.json()
      // const response = await client.getPhotosByUsername({
      //     username: 'scd_oman',
      // });
  
      
      return {
          props: {
              // posts: response.user.edge_owner_to_timeline_media.edges,
              sliders: slider,
              otherapps: otherapp,
              majordata: majors,
              sessiondata: sessiondt,
              event: events,
              date: dates,
              mag:mag,
              newse:newse    
          }, // will be passed to the page component as props
      };
  }