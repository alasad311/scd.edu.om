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
                      <a className="nav-link" href="#Mission" data-bs-toggle="tab">Mission, Vision, Values & Objectives </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#teachingandlearning" data-bs-toggle="tab">Teaching and Learning Framework</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#Gradute" data-bs-toggle="tab">Graduate Attributes</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#Governance" data-bs-toggle="tab">Governance</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#joinus" data-bs-toggle="tab">Work at SCD</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="/assets/download/StrategicPlan202125_230528_124045.pdf" target='_blank' >Strategic Plan 2021/25</a>
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
                <p className="internal-content-text">The Scientific College of Design is a private art and design institution of higher education located in Muscat, Sultanate of Oman. Established by a ministerial decree a regulated by the Ministry of Higher Education, The College officially initiated its academic programs and services in October 2004. A board of trustees, guided by the Directorate General of Private Universities and Colleges, governs the College.</p>
                <p className="internal-content-text internal-content-text-adjustment">The Scientific College of Design is established upon the firm belief in the strong advocacy of the role of arts as an integral part of our social consciousness, as an agent of progressive change, and as a powerful catalyst in molding the thoughts and actions of our national and global communities. The college founders uphold the philosophy that design is both an art and a science whereby to create art is to engage in design and that meaningful design is based upon a scientific foundation. As such, the college is rooted in the enduring value of holistic education that endorses a liberal arts and sciences model of higher education and balances formal design study with a broad exposure to humanities, and the social sciences. Founded upon the principle of academic excellence and innovative creativity in art and design benchmarked against the dual criteria of local and international students.</p>
                <div className="internal-heading">
                    <h1>Growth over the years</h1>
                </div>
                <p className="internal-content-text internal-content-text-adjustment">The Scientific College of Design exhibited steady growth over the years in students, faculty, and staff numbers. Flexibility and resilience to have a solid operational base for academic programs was a natural output of efforts. The College graduated more than 3000 alumni since its first batch in 2008. Expansion and growth are an evident part of SCD success story. </p>
                
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
                            <h1>Awards and International Recognition </h1>
                        </div>
                            <p className="mb-2 internal-content-text remove-top-padding" >The college received recognition from well-reputed organizations at the national and international levels for its specific creative approaches in the field of art and design. The college is an official member of the Cumulus Association of Art & Design. </p>
                        </div>
                    </div>
                </div>
                <div className="row aboutus-section-with-background" >
                <div className="col-md-12  col-lg-6  py-lg-5 my-lg-5 mb-5" >
                    <div className="internal-heading remove-left-padding" style={{width:"100% !important"}}>
                        <h1 >National & International Collaborations </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-sx-12 col-md-12 aboutus-section-ul-with-background" >
                            <h5><i className="fas fa-angle-right padding-right-10" ></i>Academic</h5>
                            <ul className="mou-with-background">
                                <li>University of Technology and Applied Sciences - Nizwa</li>
                                <li>University of Minho</li>
                                <li>6th October University</li>
                                <li>Minia University</li>
                                <li>Ministry of Higher Education, Research and Innovation</li>
                                <li>Ajman University</li>
                                <li>Faculty Of Applied Arts Badr University-Cairo</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 col-sx-12 col-md-12 aboutus-section-ul-without-background" >
                            <h5><i className="fas fa-angle-right padding-right-10"></i>Others</h5>
                            <ul className="mou-without-background">
                                <li>Omani Journalists Association</li>
                                <li>Oman Society of Engineers</li>
                                <li>Oman Film Society</li>
                                <li>SME development fund</li>
                                <li>Authority for SME Development</li>
                                <li>Oman foodbank- Daymah</li>
                                <li>Saned project</li>
                                <li>Taiseer Group</li>
                                <li>National Museum Oman</li>
                                <li>Muscat Media Group</li>
                                <li>Career Counseling</li>
                                <li>Integrated Systems LLC-Kuwait</li>
                                <li>Omani Association  for the hearing impaired</li>
                                <li>Embassy of Italy</li>
                                <li>The Royal Hospital</li>
                                <li>Bait Al Zubair Museum</li>
                                <li>IDP Education</li>
                                <li>Vertex Business Solutions</li>
                                <li>ALtawasul Institute for Training</li>
                                <li>Ttickoneom for Training</li>
                                <li>General Directorate of Agricultural and Fisheries Marketing</li>
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
                    <p className="internal-content-text remove-top-padding">Collaboration with various organizations integrates SCD with the community and supports students and alumni to give back to the community. The Scientific College of Design actively participates in the network professional organizations, institutions, and ministries to serve its stakeholders and the art & design community. The college expanded its facilities and services with adequate resources to fulfil its mission, prepare students for creative careers, and empower the community at large.</p>
                    <div className="row">
                        <div className="col-6 col-md-6 col-sm-12 col-sx-12">
                            <h5 className="h5-clickable"><i className="fas fa-angle-right padding-right-10"></i>Governmental </h5>
                            <ul className="np display-none">
                                <li>Ministry of Health Oman</li>
                                <li>Ministry of Agriculture, Fisheries and Water Resources</li>
                                <li>Ministry of Labour</li>
                                <li>Royal Army of Oman</li>
                                <li>Royal Air Force of Oman</li>
                                <li>National Museum of Oman</li>
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
                                <li>Kempinski Hotel Muscat</li>
                                <li>Oman Film Society </li>
                                <li>Oman Society of Engineers  </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
            <div className="row">
                
                <div className="col-md-12  col-lg-6  py-lg-4 my-lg-4 mb-4">
                    <div className="internal-heading remove-left-padding" style={{width:"100% !important"}}>
                        <h1>Faculty Research</h1>
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
                <p className="internal-content-text">The Scientific College of Design started its journey for institutional accreditation in 2009 with a Quality Audit. The report was a roadmap for the development of procedures, plans, policies, and bylaws. The college participated in the quality projects national pilot studies at the institutional and program level supporting the national regulatory body in testing and finalising the manuals. Following this, SCD applied for an Institutional Standards Assessment by the Oman Authority for Academic Accreditation and Quality Assurance of Education and received Institutional Accreditation in July 2019. </p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="internal-heading-size remove-left-padding" style={{width:"100%"}}>
                            <h1>International Certifications:</h1>
                        </div>
                        <p  className='margin-top-10'>The college received Program Equivalency from the National Association of Schools of Art and Design (NASAD), United States of America for the following programs:</p>
                        <ul className="margin-left-20 accreditation">
                            <li>Bachelor of Arts - 4 years: Fine Arts; Photography.</li>
                            <li>Bachelor of Science - 4 years: Animation; Graphic Design (Digital); Interior Design.</li>
                            <li>Master of Arts - 1 year: Fine Art.</li>
                            <li>Master of Science - 1 year: Interior Design; Visual Communication.</li>
                        </ul>
                        <a href='https://nasad.arts-accredit.org/directory-lists/substantial-equivalency-programs/'>More details</a>

                
                        <p className='margin-top-10'>The college received International Program Certifications from the Accreditation & Quality Assurance Commission for Higher Education Institutions (AQACHEI), Jordan for the following programs:  </p>
                        <ul className="margin-left-20 accreditation">
                            <li>Bachelor of Architecture </li>
                            <li>Bachelor of Science in Interior Design</li>
                            <li>Bachelor of Science in Graphic Design Digital </li>
                            <li>Bachelor of Science in Animation </li>
                            <li>Bachelor of Arts in Fine Arts </li>
                            <li>Bachelor of Arts in Photography</li>
                            <li>Bachelor of Applied Arts in Fashion Design </li>
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
                                            <h2 className="font-weight-bold text-6 text-color-grey-2 text-font" >Values</h2>
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
                    <h1>Graduate Attributes</h1>
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
                                        c. Use research to explore theoretical and historical precedence
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
                <p className="internal-content-text remove-top-padding">Scientific College of Design, graduate attributes’ domains consist of academic excellence, professionalism, lifelong learning, and ethical responsibility. Therefore, it was critical to set up academic programs, which explore diverse philosophies, techniques, and materials for students to investigate the creation of art and design in their respective fields. Faculty are experienced artists and designers dedicated to providing students with a positive experimental platform to analyse design alternatives. As academic excellence is a domain of SCD graduate attributes and an integral part of our mission, it continues to be a main strategy in our operational plans. Scientific College of Design uses a holistic approach to academic excellence through its academic programs, extracurricular activities, community-based projects coursework, workshops, etc.</p>
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

                <p className="internal-content-text padding-bottom-20">The Scientific College of Design is comprised of nine members to guarantee professional and diverse governance. The Board endorses long-term strategic and annual operational plans as well as approves all SCD policies and annual operational budget. Board members advance the development of SCD through effective leadership and strategic decision making and active oversight. The Board generates its annual report reflecting its activities and progress.</p>
                <div className="internal-heading">
                    <h1>Board of Trustees Chairman</h1>
                </div>

                <section className="section-height-3 border-0 mb-0">
                    <div className="container remove-all-padding remove-all-margin">
                        <div className="row">
                            <div className="col-lg-4 fluid-col-lg-4 col-mb-4" >
                                <div className="fluid-col">
                                    <img src="/assets/content/khamis.jpg" className="img-fluid padding-bottom-20" width={1100} height={1200} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                
                                    <p className="bot-content-text remove-top-padding">The Scientific College of Design, was founded to be a unique higher education institution in the Sultanate of Oman. Hence, it has been witnessed that it has made substantial progress in achieving excellence amongst its counterparts in the Sultanate of Oman. The strength of SCD's academic and professional offerings has placed the college on the lead as it is also the pioneer in the field of art and design in the country. Having said this, the strength of SCD also allows the college to create great opportunities for various stakeholders from students, artists and organizations. We firmly trust that the college has the capability in expanding its strength of an in-depth art and design knowledge  and practice, not only in the Sultanate of Oman, but regionally too.</p>
    
                                    <p className="bot-content-text bot-name-text remove-top-padding">HE Dr. Khamis AL Bulushi, <br />Board of Trustees Chairman</p>
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
                <h5 >Board of Directors</h5>
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

                        <a href='mailto:hr@scd.edu.om;m.alrawahi@scd.edu.om;f.alabri@scd.edu.om' type="submit" className="main-btn book-session-btn">Apply</a>
                      </div>
                      <div className="col-lg-6 col-md-12 content">
                          <img src="/assets/content/workatSCD.jpg" className="img-fluid" width={600} height={600} />
                    </div>
                    </div>
                  </div>
              </div> 
            <div className="tab-pane tab-pane-navigation"  id="teachingandlearning">
                
                <div className="container-fluid">
                    <div className="row">
                      <div className="col-lg-12 col-md-12 content">
                        <div className="text" style={{textAlign:'center'}}>
                            <div className="internal-heading">
                                <h1>Teaching and Learning Framework</h1>
                            </div>
                            <img src='/assets/teaching & learning framework.png' className="img-fluid" width='700px' style={{marginTop:'50px'}} useMap="#image-map" />
                            <map name="image-map">
                                <area target="" alt="#pop1" title="#pop1" href="#" coords="2,347,14,261,52,167,118,90,211,36,319,3,378,61,332,115,246,132,185,177,140,248,115,340,64,291,34,321" shape="poly" data-toggle="modal" data-target="#pop1"/>
                                <area target="" alt="#pop2" title="#pop2" href="#" coords="351,1,494,34,591,99,679,225,697,319,636,377,584,332,559,225,485,160,397,119,356,114,406,62" shape="poly" data-toggle="modal" data-target="#pop2"/>
                                <area target="" alt="#pop3" title="#pop3" href="#" coords="583,355,558,464,513,514,444,557,373,585,318,636,377,697,451,683,540,647,616,572,680,461,696,352,644,405" shape="poly" data-toggle="modal" data-target="#pop3"/>
                                <area target="" alt="#pop4" title="#pop4" href="#" coords="339,584,292,636,351,698,237,677,158,644,92,592,42,519,7,419,2,376,58,319,117,372,132,444,168,505,236,556,286,577" shape="poly" data-toggle="modal" data-target="#pop4"/>
                                <area target="" alt="#pop5" title="#pop5" href="#" coords="349,349,219" shape="circle"  data-toggle="modal" data-target="#pop5"/>
                            </map>
                        </div>
                        <div className="modal fade" id="pop1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" >
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Rigorous Curriculum Design for Tomorrow&rsquo;s Artists and Designers</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    
                                </div>
                                <div className="modal-body">
                                <ul>
                                <li>Align Program learning outcomes with industry standards to prepare students for the job market.</li>
                                <li>Expose students to industry-practiced software design programs for technological readiness.</li>
                                <li>Collaborate with academicians, professionals, and alumni to gain insights into career pathways and expectations.</li>
                                <li>Follow a continuous program assessment process to ensure relevance to emerging practices.</li>
                                <li>Incorporate hands-on projects within the curriculum to explore new ideas and techniques.</li>
                                <li>Facilitate internships and industry-led projects to bridge the gap between learning and practice.</li>
                                </ul>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="pop2" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" >
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Unleashing Engaging Pedagogical Practices</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    
                                </div>
                                <div className="modal-body">
                                <ul>
                                    <li>Employ evidence-based teaching methods to engage, question and push artistic boundaries.</li>
                                    <li>Incorporate studio-based learning experiences for hands-on, real-world environments.</li>
                                    <li>Facilitate project-based group activities that simulate real-world collaboration.</li>
                                    <li>Provide learning opportunities with field trips and site visits.</li>
                                    <li>Incorporate a critique and review culture where students present their work and receive feedback.</li>
                                    <li>Analyze famous art and design projects to connect theoretical learning with practical application.</li>
                                    <li>Invite professionals, artists, and designers to conduct workshops and share their experiences.</li>
                                    <li>Promote engagement to foster a student-centered educational experience.</li>
                                    <li>Leverage digital tools and software programs to enhance design processes and critical thinking skills.</li>
                                </ul>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="pop3" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" >
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Empowering Learning with Assessment Strategies and Timely Feedback</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    
                                </div>
                                <div className="modal-body">
                                <ul>
                                    <li>Implement ongoing formative assessments to make instructional adjustments.</li>
                                    <li>Utilize portfolio assessments as a comprehensive tool to evaluate students' artistic growth.</li>
                                    <li>Develop clear assessment criteria using rubrics that communicate expectations for each project.</li>
                                    <li>Organize exhibitions where students present their work to a wider audience.</li>
                                    <li>Provide guidance on how to incorporate feedback effectively promoting continuous improvement.</li>
                                </ul>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="pop4" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" >
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Cultivating a Culture of Life Long Learning</h5>
                                   <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    
                                </div>
                                <div className="modal-body">
                                <ul>
                                    <li>Provide opportunities for networking and insights for a lifelong career in the creative field.</li>
                                    <li>Encourage students to participate in exhibitions to stay connected with current trends.</li>
                                    <li>Foster a mindset of continuous learning to prepare for the ever-changing industry trends.</li>
                                </ul>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                        
                        <div className="modal fade " id="pop5" role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg ">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title" id="formModalLabel">Cultivating a Culture of Life Long Learning</h4>
                                    <button type="button" className="close" data-bs-dismiss="modal" aria-hidden="true">&times;</button>
                                </div>
                                <div className="modal-body">
                                    <p>Scientific College of Design is guided by these set of values in conducting its daily activities and in planning future activities.&nbsp;&nbsp;</p>
                                        <p><strong>Excellence</strong></p>
                                        <p>Commit to academic and service excellence.</p>
                                        <p><strong>Integrity</strong></p>
                                        <p>Strive to uphold academic integrity including fairness, trust, respect, honesty, and accountability.</p>
                                        <p><strong>Ethical and Moral Responsibility</strong></p>
                                        <p>Foster a community of artists and designers who operate as an extended family with a strong sense of leadership and ethical and moral responsibility.</p>
                                        <p><strong>Lifelong Learning</strong></p>
                                        <p>Promote the pursuit of knowledge, understanding, and personal and professional development throughout one&rsquo;s lifetime.</p>
                                        <p><strong>Transparency</strong></p>
                                        <p>Maintain a culture of transparency among all SCD stakeholders.</p>
                                </div>
                                </div>
                            </div>
                            </div>
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
        <Script src="js/header.js" strategy="lazyOnload"/>
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