import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import PublicationOwl from '../components/publications'
import BotAcademicYearText from '../components/bot-academic'
import BotsAccordion from '../components/bots'
import BodAcademicYearText from '../components/bod-academic'
import BodsAccordion from '../components/bods'
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from 'react';
export default function AboutusPage({otherapps,publication,botacademic,bots,bodacademic,bods}) {
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
        <link rel="stylesheet" href="/js/zurb-twentytwenty/css/twentytwenty.css" />
      </Head>
      <Header active="aboutus" otherapp={otherapps}/>
      <section className="section-internal margin-bottom-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="tabs tabs-vertical tabs-left tabs-navigation">
                <ul className="nav nav-tabs col-sm-3">
                  <li className="nav-item">
                      <a className="nav-link active" href="#scd" data-bs-toggle="tab">SCD</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#scdhighlights" data-bs-toggle="tab">SCD Highlights</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#Accreditation" data-bs-toggle="tab">Accreditation</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#Mission" data-bs-toggle="tab">Mission & Vision</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#Gradute" data-bs-toggle="tab">Gradutes Attributes</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#Governance" data-bs-toggle="tab">Governance</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#joinus" data-bs-toggle="tab">Work at SCD</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mobile-spacing">
            <div className="tab-pane tab-pane-navigation active" id="scd">
                <div className="internal-heading">
                    <h1>Our Story</h1>
                </div>
                <div id='beforeafter' className="d-none d-lg-block d-xl-block">
                    <img src="/assets/content/AboutSCDbw.jpg" className="img-fluid" />
                    <img src="/assets/content/AboutSCD.jpg" className="img-fluid" />
                </div>
                <p className="internal-content-text">The Scientific College of Design is a private art and design institution of higher learning located in Muscat, Sultanate of Oman. Established by a Ministerial Decree and regulated by the Ministry of Higher Education, the college officially instigated its academic programs and services in October 2004. The college is governed by a board of trustees, guided by the Directorate General of Private Universities and Colleges. The Scientific College of Design is established upon the firm belief in and strong advocacy of the role of the arts as an integral part of our social consciousness, as an agent of progressive change, and as a powerful catalyst in molding the thoughts and actions of our national and global communities.</p>
                <p className="internal-content-text internal-content-text-adjustment">The college founders uphold the philosophy that design is both an art and a science whereby to create art is to engage in design and that meaningful design is based upon a scientific foundation. As such, the college is rooted in the enduring value of a holistic education that endorses a liberal arts and sciences model of higher education and balances formal design study with a broad exposure to humanities, literature, and the social sciences. The Scientific College of Design is founded upon the principle of academic excellence and cutting edge creativity in art and design benchmarked against the dual criteria of international currency and local relevance.</p>
                <div className="internal-heading">
                    <h1>Growth over the years</h1>
                </div>
                <p className="internal-content-text internal-content-text-adjustment">The Scientific College of Design exhibited steady growth over the years in students, faculty, and staff. Flexibility and resilience to have a solid operational base for academic programs was a natural output of efforts. The College graduated more than 2522 alumni since its first batch in 2010.  Expansion and growth are an evident part of SCD success story.</p>
                <div className="row">
                    <div className="col-lg-4">
                        <h4 className="text-center">Student’s intake growth rate</h4>
                        <div className="circular-bar circular-bar-lg">
                            <div className="circular-bar-chart" data-percent="78" data-plugin-options="">
                                <strong>278%</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4  className="text-center">Academic Faculty growth rate </h4>
                        <div className="circular-bar circular-bar-lg">
                            <div className="circular-bar-chart" data-percent="33" data-plugin-options="">
                                <strong>633%</strong>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <h4  className="text-center">Faculty engagements growth rate </h4>
                        <div className="circular-bar circular-bar-lg">
                            <div className="circular-bar-chart" data-percent="10" data-plugin-options="">
                                <strong>400%</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />                    
                <div className="row">
                    <div className="col-sm-9 col-md-12 col-lg-6 col-6 mx-auto order-2 order-md-1 d-none d-lg-block d-xl-block">
                        <div className="cascading-images-wrapper pb-0">
                            <div className="cascading-images position-relative">
                                <div className="cascading-images-colored-bar bg-primary position-absolute top-0 right-0 bottom-0 left-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-duration="600ms"></div>
                                <div className="position-relative fix-background-color" >
                                    <img src="/assets/content/paint.jpg" className="appear-animation box-shadow-3" width="1000" alt="" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="500" data-appear-animation-duration="600ms" />
                                </div>
                            </div>
                        </div>
                        <div id="coloredBarBehindCascadingImagesPopup" className="dialog dialog-lg zoom-anim-dialog mfp-hide mfp-close-out px-3">
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12 col-sx-12  col-lg-5 py-lg-4 my-lg-4 mb-4 order-1 order-md-2">
                        <div className="pr-3 pl-md-5 pb-3 pb-sm-0 py-lg-5 my-lg-4 border-left-light border-sm-none">
                            <div className="internal-heading remove-left-padding">
                                <h1>Art & Design Hub</h1>
                            </div>
                            <p className="mb-2 internal-content-text remove-top-padding" >A unique “HUB” has been formed gradually over the years with national and international engagements to create a unique platform among its students, academicians, and practitioners. The Scientific College of Design has always opened its doors for experiential learning opportunities such as specialized workshops and exhibitions.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane tab-pane-navigation" id="scdhighlights">
                <div className="row">
                    <div className="col-sm-9 col-md-12  col-lg-6  mx-auto order-2 order-md-1 d-none d-lg-block d-xl-block">
                        <div className="cascading-images-wrapper pb-0">
                            <div className="cascading-images position-relative">
                                <div className="cascading-images-colored-bar bg-primary position-absolute top-0 right-0 bottom-0 left-0 appear-animation" data-appear-animation="fadeInRightShorter" data-appear-animation-duration="600ms"></div>
                                <div className="position-relative fix-background-color" >
                                    <img src="/assets/content/awardwinningfaculty.jpg" className="appear-animation box-shadow-3" width="1000" alt="" data-appear-animation="fadeInRightShorter" data-appear-animation-delay="500" data-appear-animation-duration="600ms" />
                                </div>
                            </div>
                        </div>
                        <div id="coloredBarBehindCascadingImagesPopup" className="dialog dialog-lg zoom-anim-dialog mfp-hide mfp-close-out px-3">
                        </div>
                    </div>
                    <div className="col-md-12  col-lg-5  py-lg-4 my-lg-4 mb-4 order-1 order-md-2">
                        <div className="pr-3 pl-md-5 pb-3 pb-sm-0 py-lg-5 my-lg-4 border-left-light border-sm-none">
                        <div className="internal-heading remove-left-padding" style={{width:"100% !important"}}>
                            <h1>Award Winning Faculty Members </h1>
                        </div>
                            <p className="mb-2 internal-content-text remove-top-padding" >SCD is recognized for its distinguished specialized institution by its research and artistic output of its constituents.  Faculty participated in conferences in the United Stated, Japan, Italy, Switzerland, Germany, Egypt, United Arab Emirates, and Jordan. </p>
                        </div>
                    </div>
                </div>
                <div className="row aboutus-section-with-background" >
                <div className="col-md-12  col-lg-6  py-lg-5 my-lg-5 mb-5" >
                    <div className="internal-heading remove-left-padding" style={{width:"100% !important"}}>
                        <h1 >National & International Engagements </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-sx-12 col-md-12 aboutus-section-ul-with-background" >
                            <h5><i className="fas fa-angle-right padding-right-10" ></i>Academic MOU</h5>
                            <ul className="mou-with-background">
                                <li>University of Minho</li>
                                <li>Cairo University</li>
                                <li>6th October University</li>
                                <li>Minia University</li>
                                <li>Higher College of Technology</li>
                                <li>Mazoon College</li>
                                <li>Kuwait Institution</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-sx-12 col-md-12 aboutus-section-ul-without-background" >
                            <h5><i className="fas fa-angle-right padding-right-10"></i>Non Academic MOU</h5>
                            <ul className="mou-without-background">
                                <li>National Museum Oman</li>
                                <li>Bank Meithaq</li>
                                <li>Times of Oman</li>
                                <li>SME Development fund</li>
                                <li>Taiseer group</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-sm-9  col-lg-6  col-md-12 mx-auto py-lg-4 my-lg-4 d-none d-lg-block d-xl-block' >
                    <img width={865} height={576} src="/assets/content/MOU.jpg"className="img-fluid" />
                </div>
                
            </div>
            <div className="row">
                <div className='col-sm-9 col-lg-6   col-md-12 col-lg-6   mx-auto d-none d-lg-block d-xl-block'>
                    <img width={800} height={534} src="/assets/content/colbkImage.jpg"className="img-fluid" />
                </div>
                <div className="col-md-12 col-lg-6   py-lg-4 my-lg-4 mb-4">
                    <div className="internal-heading remove-left-padding">
                        <h1>National Pride: </h1>
                    </div>
                    <p className="internal-content-text remove-top-padding">Collaboration with our partners integrates SCD with the community and supports students and alumni to give back to the community.  SCD students lead artistic workshops.The Scientific College of Design has accumulated a network of various professional organizations, institutions, and ministries to serve its stakeholders and the art & design community.  Furthermore it expanded its facilities and increased resources to fulfill its mission and prepare students for creative careers and empower the community at large. </p>
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-12 col-sx-12">
                            <h5 className="h5-clickable"><i className="fas fa-angle-right padding-right-10"></i>Govermental</h5>
                            <ul className="np display-none">
                                <li>Ministry Of Health Oman</li>
                                <li>Ministry of Agriculture and Fishers</li>
                                <li>Ministry of Manpower</li>
                                <li>Ministry of water resources</li>
                                <li>Royal Army</li>
                                <li>Royal Air Force</li>
                                <li>Oman national Museum</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-6 col-sm-12 col-sx-12">
                            <h5 className="h5-clickable"><i className="fas fa-angle-right padding-right-10"></i>Others</h5>
                            <ul className="np display-none">
                                <li>Japanese embassy</li>
                                <li>Italian embassy</li>
                                <li>Oman Society of Fine Arts</li>
                                <li>Omani Down’s syndrome Society</li>
                                <li>The Oman Association for Quality in Higher Education</li>
                                <li>Oman Science festival</li>
                                <li>Oman Arab Bank</li>
                                <li>Oman International Art Fair</li>
                                <li>Kempinski hotel Muscat</li>
                                <li>Mansoura University - International</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="row">
                
                <div className="col-md-12  col-lg-6  py-lg-4 my-lg-4 mb-4">
                    <div className="internal-heading remove-left-padding" style={{width:"100% !important"}}>
                        <h1>Faculty Publications & Exhibitions </h1>
                    </div>
                    <div className="row">
                        <PublicationOwl publication={publication} />
                    </div>
                </div>
                <div className='col-sm-9 col-lg-6   col-md-12 mx-auto py-lg-4 my-lg-4 d-none d-lg-block d-xl-block'>
                    <img width={700} height={300} src="/assets/content/publication.png" className="img-fluid" />
                </div>
            </div>
        </div>
            <div className="tab-pane tab-pane-navigation" id="Accreditation">
                <div className="internal-heading">
                    <h1>Our Accreditation Story</h1>
                </div>
                <img width={1600} height={800} src="/assets/content/accreditationnew.jpg" className="img-fluid" />
                <p className="internal-content-text">The Scientific College of Design started its journey for institutional accreditation in 2009 with a Quality Audit which generated a report of commendations, affirmations, and recommendations.  The report was a roadmap for development of procedures, plans, policies, bylaws as well as improvements of management and governance.  Testing the level of improvements, SCD volunteered for a pilot study of Institutional Standards Assessment in 2016.  Again the Institutional Standards Assessment report paved the way for further developments and quality enhancement.  SCD applied for Institutional Standards Assessment during the following academic year and managed to meet all criteria except two.  Policies were initiated and procedures were improved to meet those criteria. The Oman Academic Accreditation Authority granted SCD accreditation status declaring thatScientific College of Design meets all applicable institutional standard in July 2019</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="padding-top-20 padding-bottom-20">
                            <h1 className="green-box">Scientific College of Design meets all applicable institutional standard</h1>
                        </div>
                        <p>The Scientific College of Design received the “Institutional Accreditation” certificate from the Oman Academic Accreditation Authority in July 2019 for a period of five years, as SCD met all accreditation requirements of 8 standards and almost 70 criteria, all higher education institutions HEIs in the Sultanate of Oman are subject to the process of institutional and program accreditation, which is compulsory to measure the quality of education and to compare with the accreditation standards and the extent to which they are met. This applies in all countries of the world.</p>
                        <div className="internal-heading-size remove-left-padding" style={{width:"100%"}}>
                            <h1>SCD Accreditation benefits for stakeholders:</h1>
                        </div>
                        <ul className="margin-left-20 accreditation">
                            <li>Higher reputation compared to other HEIs in the Sultanate, the region and the world.</li>
                            <li>Self-confidence for the student community and the academic and administrative members.</li>
                            <li>SCD earns the trust of all sectors of the government, private and parents.</li>
                            <li>Add value for graduates when meet employers in the recruitment process and internship.</li>
                            <li> Helps to get the international recognition.</li>
                            <li>The entire community at the Scientific College of Design will maintain this reputation and work as a team to improve performance at all levels and to contribute actively in the development, design and achieve the goals of the fourth strategic plan 2021-2025.</li>
                        </ul>
                    </div>
                    <div className='col-lg-6'>
                        <img width={932} height={1280} src="/assets/content/cert.jpg" className="img-fluid certificate-image-border" />
                    </div>
                </div>
            </div>
            <div className="tab-pane tab-pane-navigation" id="Mission">
                <img src="/assets/content/mission&vision.jpg" width={1600} height={564} className="img-fluid" />
                <div className="featured-boxes featured-boxes-style-8">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="featured-box featured-box-primary green-background">
                                <div className="box-content box-content-height p-5">
                                    <div className="row">
                                        <div className="col">
                                            <h2 className="font-weight-bold text-6 text-color-white">Mission</h2>
                                            <div className="divider divider-small divider-small-center">
                                                <hr />
                                            </div>
                                            <p className="mission-vision-text text-font">Scientific College of Design is committed to academic excellence, student centeredness, and offers art & design education in an engaging environment to prepare students for creative careers and empower the community at large. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="featured-box featured-box-primary green-background">
                                <div className="box-content box-content-height p-5">
                                    <div className="row">
                                        <div className="col">
                                            <h2 className="font-weight-bold text-6 text-color-white">Vision</h2>
                                            <div className="divider divider-small divider-small-center">
                                                <hr />
                                            </div>
                                            <p className="mission-vision-text text-font">Scientific College of Design aspires to occupy a preeminent position among regional art and design institutions and shape a generation of professional artists and designers. &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="featured-box featured-box-primary" >
                                <div className="box-content p-5">
                                    <div className="row">
                                        <div className="col">
                                            <h2 className="font-weight-bold text-6 text-color-grey-2 text-font" >Value</h2>
                                            <div className="divider divider-small divider-small-center">
                                                <hr />
                                            </div>
                                            <p className="internal-content-text">Scientific College of Design is guided by these set of values in conducting its daily activities and in planning future activities.  </p>
                                            <div className="row">
                                                <div className="col-lg-12">
                                                      <p className="internal-content-text text-title-mission-vision">Lifelong Learning</p>
                                                      <p className="internal-content-text remove-top-padding">Promote continuous acquisition of knowledge to achieve professional development throughout one’s lifetime.</p>
                                                      <p className="internal-content-text text-title-mission-vision">Integrity</p>
                                                      <p className="internal-content-text remove-top-padding">Strive to uphold academic integrity including fairness, trust, respect, honesty and accountability.</p>
                                                      <p className="internal-content-text text-title-mission-vision">Professional Ethics</p>
                                                      <p className="internal-content-text remove-top-padding">Foster a community of artists and designers who uphold a strong sense of professional ethics and moral responsibility. </p>
                                                      <p className="internal-content-text text-title-mission-vision">Excellence</p>
                                                      <p className="internal-content-text remove-top-padding">Commit to academic and service excellence.</p>
                                                      <p className="internal-content-text text-title-mission-vision">Transparency</p>
                                                      <p className="internal-content-text remove-top-padding">Maintain a culture of transparency among all SCD stakeholders.</p>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="featured-box featured-box-primary">
                                <div className="box-content p-5">
                                    <div className="row">
                                        <div className="col">
                                            <h2 className="font-weight-bold text-6 text-color-grey-2 text-font">Objectives</h2>
                                            <div className="divider divider-small divider-small-center">
                                                <hr />
                                            </div>
                                            <ul className="aboutusObjective">
                                                <li>Maintain academic excellence through robust policies, operational plans and procedures. </li>
                                                <li>Empower students to attain their intellectual and creative potentials through application of their theoretical and practical knowledge. </li>
                                                <li>Provide a state of the art infrastructure and educational resources that keep abreast of artistic advancements. </li>
                                                <li>Encourage faculty for professional development and research activities. </li>
                                                <li>Foster a culture of community engagement to ensure productive relationships with external stakeholders. </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="tab-pane tab-pane-navigation" id="Gradute"  >
                <div className="internal-heading">
                    <h1>Gradutes Attributes</h1>
                </div>
                <div className="featured-boxes featured-boxes-flat">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-6">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom resolve-height-issue">
                                    <i className="icon-featured fas fa-graduation-cap"></i>
                                    <h4 className="font-weight-normal text-5 mt-3">Academic Excellence</h4>
                                    <p className="mb-2 mt-2 text-2 text-font">
                                        a. Apply acquired knowledge &amp; skill<br />
                                        b. Defend and critique Art and Design projects<br />
                                        c. Use research to explore theoretical and historical precedent

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-6">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom resolve-height-issue">
                                    <i className="icon-featured fas fa-briefcase"></i>
                                    <h4 className="font-weight-normal text-5 mt-3">Professionalism</h4>
                                    <p className="mb-2 mt-2 text-2 text-font">
                                        a. Promote competence and creativity<br />
                                        b. Demonstrate application of technology in the field<br />
                                        c. Apply effective communication skills
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-6">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom resolve-height-issue">
                                    <i className="icon-featured fas fa-book-reader"></i>
                                    <h4 className="font-weight-normal text-5 mt-3">Lifelong Learning</h4>
                                    <p className="mb-2 mt-2 text-2 text-font">a. Stay abreast with technological advances in the field<br />
                                        b. Maintain sustainability in the market<br />
                                        c. Seek knowledge through lifelong learning</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-6">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom resolve-height-issue">
                                    <i className="icon-featured fas fa-balance-scale"></i>
                                    <h4 className="font-weight-normal text-5 mt-3">Ethical Responsibility</h4>
                                    <p className="mb-2 mt-2 text-2 text-font">a. Enforce value of personal and academic integrity<br />
                                        b. Be able to work in culturally diverse settings<br />
                                        c. Promote moral responsibilities and respect to others </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="internal-content-text remove-top-padding">Scientific College of Design, graduate attributes’ domains consist of academic excellence,professionalism, lifelong learning, and ethical responsibility. Therefore, it was critical to setacademic programs which explore a diverse philosophies, techniques, and materials forstudents to investigate the creation of art and design in their respective fields. Faculty areexperienced artists and designers dedicated to provide students with a positive experimentalplatform to analyze design alternatives. As academic excellence is a domain of SCD graduateattributes and an integral part of our mission, it continues to be a main strategy in ouroperational plans. Scientific College of Design uses a holistic approach to academic excellencethrough its academic programs, extracurricular activities, community based projects coursework, workshops, etc.</p>
            </div>
            <div className="tab-pane tab-pane-navigation" id="Governance">
                <div className="internal-heading">
                    <h1>SCD Dean</h1>
                </div>
                <section className="section-height-3 border-0 mb-0">
                    <div className="container remove-all-padding remove-all-margin">
                        <div className="row">
                            <div className="col-xl-4 fluid-col-xl-4 col-mb-4" >
                                <div className="fluid-col padding-bottom-20">
                                    <img src="/assets/content/mona-final.jpg" className="img-fluid" width={1100} height={1200} />
                                </div>
                            </div>
                            <div className="col-xl-8">
                                    <p className="dean-content-text remove-top-padding">Welcome! The Scientific College of Design is an accredited specialized art and design higher
                                        education institution in the Sultanate of Oman. SCD students learn from distinguished
                                        professors and gain realistic experience through community projects in an engaging campus.
                                        Furthermore, SCD students learn from leading practitioners and partners through
                                        collaborations and community engagements.</p>
                                    <p className="dean-content-text remove-top-padding">The Scientific College of Design is committed to empower its students and the community at
                                        large through its commitment to academic and service excellence. Please join us at the
                                        Scientific College of Design and contribute to the creative disciplines.</p>
    
                                    <p className="dean-content-text dean-name-text remove-top-padding">Dr. Mona Ismail, <br />Scientific College of Design Dean</p>
                            </div>
                            
                        </div>
                    </div>
                </section>

              
                <div className="row">
                    <div className="col-12 green-box-bot">
                    SCD Board Members
                    </div>
                </div>

                <p className="internal-content-text padding-bottom-20">The Scientific College of Design is formed from eight practitioners and academicians to guarantee professional and diverse governance.  The Board endorses long term strategic and annual operational plans as well as approves all SCD policies and operational budget.  Board members advance the development of SCD through effective leadership and strategic decision making and active oversight. The Board generates its annual report reflecting its activities and progress.</p>
                <div className="internal-heading">
                    <h1>Board of Trustees Chairman</h1>
                </div>

                <section className="section-height-3 border-0 mb-0">
                    <div className="container remove-all-padding remove-all-margin">
                        <div className="row">
                            <div className="col-lg-4 fluid-col-lg-4 col-mb-4" >
                                <div className="fluid-col">
                                    <img src="/assets/content/adham.png" className="img-fluid padding-bottom-20" width={1100} height={1200} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                
                                    <p className="bot-content-text remove-top-padding">The Scientific College of Design has made substantial progress in achieving academic excellence. The strength of SCD’s academic and professional offering has placed the college in a unique position as the only specialized art & design institute in Oman. This strength also allows the college to create opportunities for various stakeholders from students, artists, and organizations. We look forward to the college expanding its offering of an in-depth art & design knowledge and practice in Oman and regionally.</p>
    
                                    <p className="bot-content-text bot-name-text remove-top-padding">HH. Sayyid Dr. Adham Al Said, <br />Board of Trustees Chairman</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
                <h5 className="padding-top-20">Board of Trustees <BotAcademicYearText academicyear={botacademic} /></h5>
                <hr />
                <BotsAccordion bots={bots} />
                <div className="internal-heading">
                    <h1>Board of Directors</h1>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <img src="/assets/content/Dr.Mohammed.jpg" className="img-fluid padding-bottom-20" width={1100} height={1200} />
                        <p className="text-font padding-bottom-20">Dr. Moahmmed Adel <br /> Chairman </p>
                    </div>
                    <div className="col-lg-2">
                    </div>
                    <div className="col-lg-4">
                        <img src="/assets/content/MissThuriya.jpg" className="img-fluid padding-bottom-20" width={1100} height={1200} />
                        <br />
                        <p className="text-font padding-bottom-20">Mrs Thuraiya Salah El Deen <br /> Deputy Chairman </p>
                    </div>
                    
                    <div className="col-lg-2">
                    </div>
                </div>
                <h5 >Board of Directors <BodAcademicYearText academicyear={bodacademic} /></h5>
                <hr />
                <BodsAccordion bods={bods} />
            </div>
            <div className="tab-pane tab-pane-navigation"  id="joinus">
                
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 content">
                        <div className="text">
                          <h2>Work at SCD</h2>
                          <p className="internal-content-text">The Scientific College of Design provides an opportunity for creative academicians to join the hub of art and design. The college is keen on providing an approachable environment and gladly accepts all its members ideas and initiatives. SCD allows individuals to help shape the future generations creative mindset. Click the below link to know more about our available vacancies.</p>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="row">
                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="form-style">
                                <div className={`form-group required ${isFValid? 'valid' : 'invalid'}`}>
                                    <Controller
                                    name="FullName"
                                    control={control}
                                    rules={{ required: true,pattern: /^[A-Za-z]+$/i }}
                                    render={({ field }) => <input className="form-control" onChange={onChange(errors.FullName,"FullName")}  name="FullName" id="FullName"  type="text"  placeholder="Full name"  {...field} />}
                                    />
                                    <i className="error-icon fas fa-exclamation-triangle"></i>
                                    <span className="error-text">{errors.FullName?.type === 'required' && "First name is required"}{errors.FullName?.type === 'pattern' && "only alphabits is accepted"}</span>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="form-style">
                                <div className={`form-group required ${isEValid? 'valid' : 'invalid'}`}>
                                    <Controller
                                    name="emailaddress"
                                    control={control}
                                    rules={{ required: true,pattern:  /^\S+@\S+\.\S+$/}}
                                    render={({ field }) => <input className="form-control" onChange={onChange(errors.emailaddress,"emailaddress")}  name="emailaddress" id="emailaddress"  type="text"  placeholder="Email Address"  {...field} />}
                                    />
                                    <i className="error-icon fas fa-exclamation-triangle"></i>
                                    <span className="error-text">{errors.emailaddress?.type === 'required' && "Email Address is required"}{errors.emailaddress?.type === 'pattern' && "Email format incorrect xxx@xxx.com"}</span>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="form-style">
                                <div className={`form-group required ${isPValid? 'valid' : 'invalid'}`}>
                                    <Controller
                                    name="PhoneNumber"
                                    control={control}
                                    rules={{ required: true,pattern: /^(\+?)([0-9] ?){9,20}$/ }}
                                    render={({ field }) => <input className="form-control" onChange={onChange(errors.PhoneNumber,"PhoneNumber")}  name="PhoneNumber" id="PhoneNumber"  type="text"  placeholder="Phone Number"  {...field} />}
                                    />
                                    <i className="error-icon fas fa-exclamation-triangle"></i>
                                    <span className="error-text">{errors.PhoneNumber?.type === 'required' && "Phone Number is required"}{errors.PhoneNumber?.type === 'pattern' && "Phone number format incorrect 0096899xxxxxx"}</span>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-5">
                                <div className="form-style">
                                <div className={`form-group required ${isAValid? 'valid' : 'invalid'}`}>
                                    <Controller
                                    name="AreaofConcern"
                                    control={control}
                                    
                                    render={({ field }) => <input className="form-control" onChange={onChange(errors.AreaofConcern,"AreaofConcern")}  name="AreaofConcern" id="AreaofConcern"  type="text"  placeholder="Area of Concern"  {...field} />}

                                    
                                    />
                                    <i className="error-icon fas fa-exclamation-triangle"></i>
                                    <span className="error-text">{errors.Message?.type === 'required' && "Area of Concern is required"}</span>
                                    
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 col-lg-10 ">
                                <div className="form-style">
                                <div className={`form-group required ${isMValid? 'valid' : 'invalid'}`}>
                                    <Controller
                                    name="Message"
                                    control={control}
                                    
                                    render={({ field }) => <textarea className="form-control" onChange={onChange(errors.Message,"Message")}  name="Message" id="Message"   placeholder="Message"  {...field} />}

                                    
                                    />
                                    <i className="error-icon fas fa-exclamation-triangle"></i>
                                    <span className="error-text">{errors.Message?.type === 'required' && "Message is required"}</span>
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                            <button type="submit" className="main-btn book-session-btn">Apply</button>
                        </form>
                      </div>
                      <div className="col-lg-6 col-md-12 content">
                          <img src="/assets/content/workatSCD.jpg" className="img-fluid" width={600} height={600} />
                    </div>
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
        <Script strategy="lazyOnload" src="js/zurb-twentytwenty/js/jquery.event.move.js"/>
        <Script strategy="lazyOnload" src="js/zurb-twentytwenty/js/jquery.twentytwenty.js"/>
        <Script strategy="lazyOnload" type="text/javascript" src="/js/rendro-easy-pie-chart/dist/jquery.easypiechart.min.js"/>
        <Script strategy="lazyOnload" type="text/javascript" src="/js/owl.carousel/dist/owl.carousel.min.js"/>
        <Script strategy="lazyOnload" src="js/aboutus.js"/>
    </div>
  )
}
export async function getServerSideProps() {

    const ress = await fetch('https://scd.edu.om/api/otherapps')
    const otherapp = await ress.json()

    const respublication = await fetch('https://scd.edu.om/api/publications')
    const publication = await respublication.json()

    const resacademicyear = await fetch('https://scd.edu.om/api/botacademic')
    const botacademicyear = await resacademicyear.json()
    
    const resbots = await fetch('https://scd.edu.om/api/bot')
    const bots = await resbots.json()

    const resbodacademicyear = await fetch('https://scd.edu.om/api/bodacademic')
    const bodacademicyear = await resbodacademicyear.json()
    
    const resbod = await fetch('https://scd.edu.om/api/bod')
    const bods = await resbod.json()
    
    return {
        props: {
            otherapps: otherapp,
            publication:publication,
            botacademic: botacademicyear,
            bots:bots,
            bodacademic:bodacademicyear,
            bods:bods

        },
    };
}