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
                    <a className="nav-link" href="#latestexhibition" id="https://www.instagram.com/scd_oman/?hl=en" data-bs-toggle="tab">Latest Exhibition</a>
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
                    <p className="internal-content-text ">SCD Gallery has been an artistic venue for local and international artists over the years. The gallery has exhibited artworks from the MENA region, Europe and the United States of America. The gallery has impeccable importance in SCD student life since it is their gateway to exposure to various artwork techniques and expressions from current artists. The SCD is keen to raise awareness about art and design fields and to expand this education stream with the public.</p>
                  </div>
                </div>
                <div className="row padding-top-30">
                  <div className="col-lg-4 col-md-12 exhibition-circle">
                    <a href='https://www.instagram.com/scd_oman/?hl=en' className='customherflayout'>
                      <div className="circle">
                        <span><i className="fas fa-calendar" ></i></span>
                      </div>
                      <h5 className="circle-title padding-top-20">Upcoming Exhibition</h5>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-12 exhibition-circle">
                    <a href='tel:0096824513201' className='customherflayout'>
                      <div className="circle">
                        <span><i className="fas fa-phone-volume"></i></span>
                      </div>
                      <h5 className="circle-title padding-top-20">Get Informed</h5>
                    </a>
                  </div>
                  <div className="col-lg-4 col-md-12 exhibition-circle" data-target="exhibityourwork">
                    <div className="circle">
                      <span><i className="fas fa-palette"></i></span> 
                    </div>
                    <h5 className="circle-title padding-top-20">Exhibit your work</h5>
                  </div>
                </div>
              </div>             
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
      <Script src="js/header.js" strategy="lazyOnload"/>
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