import Head from 'next/head'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header'
import Slider from '../components/sliders'
import SectionMajor from '../components/section-major'
import SectionZoom from '../components/section-zoom'
// import SectionInstagram from '../components/section-instagram'
import SectionHomeEvents from '../components/section-home-events'
import SectionNewsletter from '../components/section-newsletter'
import SectionNewsEvents from '../components/section-news-events'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Instagram from 'instagram-web-api';
import moment from 'moment';
export default function Home({posts}) {

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
        <link rel="stylesheet" type="text/css" href="css/test.css"/>
        <script src="js/jquery/jquery-3.6.0.min.js"></script>
        <script src="js/slick/slick.js"></script>
        
        <script src="js/simple-text-rotator/jquery.simple-text-rotator.min.js"></script>
        <script src="js/bootstrap/bootstrap.bundle.js"></script>       
      </Head>
      <Header active="home" />
      <Slider />
      <div className="fixed-right side-form-icons">
        <a href="tel:0096824513222" target="_blank"><FontAwesomeIcon icon={faPhone} className="icon" /></a>
        <a href="https://goo.gl/maps/92b7Gy7vTMCAh6H46" target="_blank"><FontAwesomeIcon icon={faMapMarkerAlt} className="icon" /></a>
        <a href="mailto:info@scd.edu.om" target="_blank"><FontAwesomeIcon icon={faEnvelope} className="icon" /></a>
        
      </div>
      <SectionMajor />
      <SectionZoom />
      <section className="instagram-section section margin-top-0">
        <div className="container">
            <div className="row">
             {/* {posts.map(({ node }, i) => {
                    return (
                      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={i}>
                        <div className="photo-box mouse-pointer" data-url={"https://www.instagram.com/p/"+node.shortcode}>
                          <div className="image-wrap">
                              <Image src={node.display_url} width={500} height={500} />
                              <div style={{display:"inline",paddingRight:"10px"}}><i className="fas fa-heart" style={{paddingRight:"10px",color:"#9CCA43"}} aria-hidden="true"></i>{node.edge_media_preview_like.count}</div>
                                   <i className="fas fa-comment" style={{paddingRight:"10px",color:"#9CCA43"}} aria-hidden="true"></i>{node.edge_media_to_comment.count}
                          </div>
                          <div className="description">
                            <div className="date">{moment.unix(node.taken_at_timestamp).format("DD-MMM-YYYY hh:mm A")}</div>
                          </div>
                        </div>
                      </div>
                    );
                })} */}
            </div>
        </div>
      </section>
      <SectionHomeEvents />
      <SectionNewsletter />
      <SectionNewsEvents />
      
      <Footer />
    </div>
  )
}
// export async function getStaticProps() {
//       const client = new Instagram({ username: 'alasad.dev', password: '@Mahmud1989' });
//       await client.login();
  
//       const response = await client.getPhotosByUsername({
//           username: 'scd_oman',
//       });
  
      
//       return {
//           props: {
//               posts: response.user.edge_owner_to_timeline_media.edges,
//           }, // will be passed to the page component as props
//       };
//   }