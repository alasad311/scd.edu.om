import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from 'react';
export default function ExhibitionPage({otherapps}) {
    const [isFValid, setFIsValid]=useState(true);
    const [isEValid, setEIsValid]=useState(true);
    const [isPValid, setPIsValid]=useState(true);
    const [isMValid, setMIsValid]=useState(true);
    const [isAValid, setAIsValid]=useState(true);

    interface IFormInput {
      FullName: string;
      LastName: string;
      emailaddress: string;
      PhoneNumber: string;
      Message: string;
      AreaofConcern: string;
    }
    function onChange(isVisible,inputName) {
      if(isVisible && inputName === "FullName")
      {
        setFIsValid(false)
      }
      else if(!isVisible && inputName === "FullName")
      {
        setFIsValid(true)
      }
      if(isVisible && inputName === "emailaddress")
      {
        setEIsValid(false)
      }
      else if(!isVisible && inputName === "emailaddress")
      {
        setEIsValid(true)
      }
      if(isVisible && inputName === "PhoneNumber")
      {
        setPIsValid(false)
      }
      else if(!isVisible && inputName === "PhoneNumber")
      {
        setPIsValid(true)
      }
      if(isVisible && inputName === "Message")
      {
        setMIsValid(false)
      }
      else if(!isVisible && inputName === "Message")
      {
        setMIsValid(true)
      }
      if(isVisible && inputName === "AreaofConcern")
      {
        setAIsValid(false)
      }
      else if(!isVisible && inputName === "AreaofConcern")
      {
        setAIsValid(true)
      }
    }
    const { handleSubmit, control, reset,formState: { errors } } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput>  = data => console.log(data);
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
      <Header active="exhibition" otherapp={otherapps} />
      <section className="section-internal margin-bottom-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="tabs tabs-vertical tabs-left tabs-navigation">
                <ul className="nav nav-tabs col-sm-3">
                  <li className="nav-item">
                    <a className="nav-link active" href="#scdgallery" data-bs-toggle="tab">SCD Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#latestexhibition" id="latestExhibition" data-bs-toggle="tab">Latest Exhibition</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#exhibitionapplication" id="btn_app" data-bs-toggle="tab">Exhibition Application</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mobile-spacing">
              <div className="tab-pane tab-pane-navigation active" id="scdgallery">
                <div className="row">
                  <div className='col-lg-12'>
                    <img src="/assets/content/exhibtion.jpg" width={1600} height={400} className="img-fluid" alt="content" />
                  </div>
                </div>
                <div className="row padding-top-30">
                  <div className='col-lg-12'>
                    <p className="internal-content-text ">SCD Gallery have been an artistic venue for local and international artists over the years. The gallery have exhibited artworks from the MENA region, Europe and United State of America. The gallery has an impeccable importance on SCD student life since its their gateway to being exposed to various artwork techniques and expressions from current artists. The Scientific of College of Design is keen to raise awareness about art and design fields and to expand this education stream with the public . </p>
                  </div>
                </div>
                <div className="row padding-top-30">
                  <div className="col-lg-4 col-md-12 exhibition-circle" data-target="upcomingexhibition">
                    <div className="circle">
                      <span><i className="fas fa-calendar" ></i></span>
                    </div>
                    <h5 className="circle-title padding-top-20">Upcoming Exhibition</h5>
                  </div>
                  <div className="col-lg-4 col-md-12 exhibition-circle" data-target="getinformed">
                    <div className="circle">
                      <span><i className="fas fa-phone-volume"></i></span>
                    </div>
                    <h5 className="circle-title padding-top-20">Get Informed</h5>
                  </div>
                  <div className="col-lg-4 col-md-12 exhibition-circle" data-target="exhibityourwork">
                    <div className="circle">
                      <span><i className="fas fa-palette"></i></span> 
                    </div>
                    <h5 className="circle-title padding-top-20">Exhibit your work</h5>
                  </div>
                </div>
              </div>
              {/* Start here */}
              <div className="tab-pane tab-pane-navigation" id="latestexhibition">
                <div className="row">
                  <div className="col-lg-5 padding-right-50">
                    <div className="row">
                      <div className="col-lg-12">
                        <h2 className="exhibition-main-title">Latest Exhibitions</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 ">
                        <div className="exhibition-header-box">
                          <h3 className="title"><i className="fas fa-caret-right"></i> Participation of Ms.Sarra Mrabti and Dr. Amal Ezzat, Fine Arts Faculty at the exhibition “Creative Deconstruction”</h3>
                          <h3 className="artist">At Bait Alzubair.Gallery, Muscat, Oman on the 14th of June 2022 </h3>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="thumb-gallery-wrapper">
                          <div className="thumb-gallery-detail owl-carousel owl-theme manual nav-inside nav-style-1 nav-dark mb-3">
                            <div><img src="assets/exhibition/81.jpg" className="img-fluid" alt=" " /></div>
                            <div><img src="assets/exhibition/82.jpg" className="img-fluid" alt=" " /></div>
                            <div><img src="assets/exhibition/83.jpg" className="img-fluid" alt=" " /></div>
                          </div>
                          <div className="thumb-gallery-thumbs owl-carousel owl-theme manual thumb-gallery-thumbs">
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt=" " src="assets/exhibition/81.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt=" " src="assets/exhibition/82.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt=" " src="assets/exhibition/83.jpg" className="img-fluid" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row padding-top-15">
                      <div className="col-lg-12 ">
                        <div className="exhibition-header-box">
                          <h3 className="title"><i className="fas fa-caret-right"></i>Co-organization and participation of Fine Arts Faculty members with their artwork in an Art Exhibition titled “IDF Oman Interior Design Expo” organized  </h3>
                          <h3 className="artist">At The Convention &Exhibition Centre, Muscat, Oman from 8th to 25th May 2022. </h3>
                        </div>
                      </div>
                    </div>
                    <div className="row ">
                      <div className="col-lg-12">
                        <div className="thumb-gallery-wrapper">
                          <div className="thumb-gallery-detail owl-carousel owl-theme manual nav-inside nav-style-1 nav-dark mb-3">
                            <div>
                              <img src="assets/exhibition/71.jpg" className="img-fluid" alt=" " />
                            </div>
                          </div>
                          <div className="thumb-gallery-thumbs owl-carousel owl-theme manual thumb-gallery-thumbs">
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt=" " src="assets/exhibition/71.jpg" className="img-fluid" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    {/* <div className="row">
                      <div className="col-lg-12">
                        <h2 className="exhibition-main-title">Upcoming Exhibitions</h2>
                      </div>
                    </div>
                    <div className="row exhibition-background margin-bottom-20">
                      <div className="col-lg-3 col-4 col-sm-4 col-md-4 col-sx-4">
                        <div className="event_date">
                          <div className="event-date-wrap">
                            <p>TBA</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-9 col-8 col-sm-8 col-md-8 col-sx-8 exhibition-description">
                        <h3>Dr Taher Helmi Exhibition</h3>
                      </div>
                    </div> */}
                    {/* <div className="row">
                      <div className="col-lg-6">
                        
                        <div className="thumb-gallery-detail owl-carousel owl-theme manual nav-inside nav-style-1 nav-dark mb-3">
                          <div>
                            <img src="assets/exhibition/upmain.jpg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up1.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up2.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up3.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up4.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up5.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up6.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up7.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up8.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up9.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up10.jpeg" className="img-fluid" alt=" " />
                          </div>
                          <div>
                            <img src="assets/exhibition/up11.jpeg" className="img-fluid" alt=" " />
                          </div>
                        </div>
                        <div className="thumb-gallery-thumbs owl-carousel owl-theme manual thumb-gallery-thumbs">
                        <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/upmain.jpg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up1.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up2.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up3.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up4.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up5.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up6.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up7.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up8.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up9.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up10.jpeg" className="img-fluid" />
                            </span>
                          </div>
                          <div>
                            <span className="d-block cur-pointer">
                              <img alt=" " src="assets/exhibition/up11.jpeg" className="img-fluid" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 ">
                        <h5 className="exhibition-side-titles">Book Your Calendar</h5>
                        <div className="row padding-left-10 padding-right-15">
                          <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 col-4 fix-box-padding">
                            <div className="exhibition-calendar-box">
                              <span>
                                <i className="fab fa-google"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 col-4 fix-box-padding">
                            <div className="exhibition-calendar-box">
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 col-4 fix-box-padding">
                            <div className="exhibition-calendar-box">
                              <span>
                                <i className="fas fa-calendar-alt"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <h5 className="exhibition-side-titles padding-top-20">Share the News</h5>
                        <div className="row padding-left-10 padding-right-15">
                          <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 col-4 fix-box-padding">
                            <div className="exhibition-calendar-box whatsapp">
                              <span>
                                <i className="fab fa-whatsapp"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 col-4 fix-box-padding">
                            <div className="exhibition-calendar-box twitter">
                              <span>
                                <i className="fab fa-twitter"></i>
                              </span>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4 col-4 fix-box-padding">
                            <div className="exhibition-calendar-box emailicon">
                              <span>
                                <i className="fas fa-envelope"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                        <h5 className="exhibition-side-titles padding-top-20">Visit Our Exhibition</h5>
                        <iframe style={{border:0}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9076207575854!2d58.28190301481938!3d23.571761084677693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e00b4573ba82b%3A0xcfe4a6226e6acc42!2sScientific%20College%20of%20Design!5e0!3m2!1sen!2som!4v1614510341293!5m2!1sen!2som" width="100%" height="187"  loading="lazy"></iframe>
                      </div>
                    </div> */}
                    <div className="row padding-top-20">
                      <div className="col-lg-10">
                        <h2 className="exhibition-main-title">Exhibitions Highlights</h2>
                        <div className="thumb-gallery-wrapper">
                          <div className="thumb-gallery-detail owl-carousel owl-theme manual nav-inside nav-style-1 nav-dark mb-3">
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>“The Strokes” organized by Indian embassy Muscat</h3>
                                    <h3 className="artist">Organization and participation of Dr.C. Jawahar, Fine Arts Faculty from 8th to 20th September 2019 </h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/11.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>” I See Music” at Matti Sirvio Art Galleria with a mosaic artwork </h3>
                                    <h3 className="artist">Participation of Dr. Amal Ezzat, Fine Arts Faculty from 9th to 27th  October 2021</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/22.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>“International Tolerance Day”, organized by the UNISCO and the Ministry of Endowment and Religious Affairs, Muscat, Oman </h3>
                                    <h3 className="artist">Participation of Dr. Amal Ezzat, Fine Arts Faculty from 9th to 27th  October 2021</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/33.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>“International Tolerance Day”, organized by the UNISCO and the Ministry of Endowment and Religious Affairs, Muscat, Oman </h3>
                                    <h3 className="artist">Participation of Dr. Amal Ezzat, Fine Arts Faculty from 9th to 27th  October 2021</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/34.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>“The History of Now” organized at Art and Soul Gallery, Muscat, Oman  </h3>
                                    <h3 className="artist">Participation of Dr. Amal Ezzat, Fine Arts Faculty from 26th March to 9th April 2022</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/44.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>“The History of Now” organized at Art and Soul Gallery, Muscat, Oman  </h3>
                                    <h3 className="artist">Participation of Dr. Amal Ezzat, Fine Arts Faculty from 26th March to 9th April 2022</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/45.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>Spring salon” Soul Scape” at Matti Sirvio Art Galleria, Muscat, Oman </h3>
                                    <h3 className="artist">Participation of Dr. Amal Ezzat, Fine Arts Faculty from 26th  March to 23rd April 2022 </h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/55.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i>“The Second Fine Arts Faculty Exhibition” organized at SCD in Muscat, Oman </h3>
                                    <h3 className="artist">Participation of Fine Arts Faculty members from 25th to 30th April 2022</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/66.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> SCD Print</h3>
                                    <h3 className="artist">Students</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/1.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> SCD Print</h3>
                                    <h3 className="artist">Students</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/2.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Omani Faces</h3>
                                    <h3 className="artist">Artist Kostis Grivakis</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/6.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Omani Faces</h3>
                                    <h3 className="artist">Artist Kostis Grivakis</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/23.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Omani Faces</h3>
                                    <h3 className="artist">Artist Kostis Grivakis</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/24.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Omani Faces</h3>
                                    <h3 className="artist">Artist Kostis Grivakis</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/25.jpg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Ruwaiat Lawnia Exhibition</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/7.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Ruwaiat Lawnia Exhibition</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/8.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Ruwaiat Lawnia Exhibition</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/9.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Ruwaiat Lawnia Exhibition</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/10.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Ruwaiat Lawnia Exhibition</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/12.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Ebda't Tashkiliah Exhibition</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/18.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Artist Esam Jameel</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/19.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Artist Esam Jameel</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/22.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                            <div>
                              <div className="row">
                                <div className="col-lg-12 ">
                                  <div className="exhibition-header-box">
                                    <h3 className="title"><i className="fas fa-caret-right"></i> Artist Esam Jameel</h3>
                                  </div>
                                </div>
                              </div>
                              <img src="assets/exhibition/21.jpeg" className="img-fluid" alt="Presentation" />
                            </div>
                          </div>

                            
                          <div className="thumb-gallery-thumbs owl-carousel owl-theme manual thumb-gallery-thumbs">
                          <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/11.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/22.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/33.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/34.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/44.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/45.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/55.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/66.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/1.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/2.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/6.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/23.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/24.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/25.jpg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/7.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/8.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/9.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/10.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/12.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/18.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/19.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/22.jpeg" className="img-fluid" />
                              </span>
                            </div>
                            <div>
                              <span className="d-block cur-pointer">
                                <img alt="Presentation" src="assets/exhibition/21.jpeg" className="img-fluid" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end here */}
              <div className="tab-pane tab-pane-navigation" id="exhibitionapplication">
                <object data='assets/files/SCD Gallery Application Form.pdf#toolbar=1' style={{height:"75vh"}} type='application/pdf' width='100%' ></object>
              </div>
            </div>
            <div className="modal fade " id="formModal" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-lg ">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id="formModalLabel">Get Informed</h4>
                    <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                  </div>
                  <div className="modal-body">
                    <form id="demo-form" className="mb-4">
                      <div className="form-group row align-items-center">
                        <label className="col-sm-3   mb-0">Name</label>
                        <div className="col-sm-9">
                          <input type="text" name="name" className="form-control" placeholder="Type your name..." required/>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-sm-3   mb-0">Phone Number</label>
                        <div className="col-sm-9">
                          <input type="tel" name="phone" className="form-control" placeholder="Type your phone number..." required/>
                        </div>
                      </div>
                      <div className="form-group row align-items-center">
                        <label className="col-sm-3   mb-0">Email</label>
                        <div className="col-sm-9">
                          <input type="text" name="name" className="form-control" placeholder="Type your email..." required/>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button type="button" className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Script strategy="beforeInteractive" src="js/jquery/jquery-3.6.0.min.js"/>
      <Script strategy="lazyOnload" src="js/bootstrap/bootstrap.bundle.js"/>
      <Script strategy="lazyOnload" type="text/javascript" src="/js/owl.carousel/dist/owl.carousel.min.js"/>
      <Script strategy="lazyOnload" type="text/javascript" src="/js/exhibition.js"/>
    </div>
  )
}
export async function getServerSideProps() {

  const ress = await fetch('https://scd.edu.om/api/otherapps')
  const otherapp = await ress.json()

  
  return {
      props: {
          otherapps: otherapp            
      },
  };
}