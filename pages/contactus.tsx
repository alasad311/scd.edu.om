import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { SubmitHandler, useForm } from "react-hook-form";
import React, { useState } from 'react';
import AdmissionOffice from '../components/admission-office'
export default function ContactusPage({otherapps,adminoffice,dept}) {
   
  return (
    <div>
      <Head>
        <title>Scientific College of Design</title>
        <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
        <meta name="keywords" content="" />
        <meta name="author" content="Scientific College of Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo/n_fav_icon.png" />
      </Head>
      <Header active="contactus" otherapp={otherapps} />
      <section className="section-internal margin-bottom-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="tabs tabs-vertical tabs-left tabs-navigation">
                <ul className="nav nav-tabs col-sm-3">
                  <li className="nav-item">
                    <a className="nav-link active" href="#generalcontact" data-bs-toggle="tab">General Contact</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#administrationoffice" data-bs-toggle="tab">Administration Office</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#admissionregistration" data-bs-toggle="tab">Admission & Registration</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactinquuriy" data-bs-toggle="tab">Contact Inquriy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mobile-spacing">
              
            <div className="tab-pane tab-pane-navigation active" id="generalcontact">
              <iframe className="padding-bottom-20" style={{border:"none"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9076207575836!2d58.28190301572748!3d23.57176108467775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8e00b4573ba82b%3A0xcfe4a6226e6acc42!2sScientific%20College%20of%20Design!5e0!3m2!1sen!2som!4v1613378243584!5m2!1sen!2som" width="100%" height="400"   aria-hidden="false" ></iframe>
              <div className="row padding-bottom-20">
                <div className="col-lg-4 col-md-12 padding-bottom-10">
                    <div className="circle">
                        <span><i className="fas fa-map-marker-alt" ></i></span> 
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 padding-bottom-10">
                    <div className="circle">
                        <span><i className="fas fa-phone-alt"></i></span> 
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 padding-bottom-10">
                    <div className="circle">
                        <span><i className="fas fa-envelope"></i></span> 
                    </div>
                </div>                 
                <div className="col-lg-4 p-1">
                    <p className="green-box-contactus">
                        Scientific College of Design Airport 
                        Heights – Matar Street, P.O. BOX: 1656, P.C. 114 
                        Matrah Sultanate of Oman</p>
                </div>
                <div className="col-lg-4 p-1">
                    <p className="green-box-contactus">
                        Contact us through the following numbers:<br />
                        <a href="tel:0096824513251"> +968 24513 251 - </a>
                        <a href="tel:0096824513252"> +968 24513 252</a><br />
                        <a href="tel:0096824513233"> +968 24513 233 - </a>
                        <a href="tel:0096896707755"> +968 9670 7755</a><br />
                    </p>
                </div>
                <div className="col-lg-4 p-1">
                    <p className="green-box-contactus">
                        Email us on: <br />
                        <a href="mailto:info@scd.edu.om">info@scd.edu.om</a>
                    </p>
                </div>
              </div>
            </div>
            <div className="tab-pane tab-pane-navigation" id="administrationoffice">
              <AdmissionOffice admissionData={adminoffice} />
            </div>
            <div className="tab-pane tab-pane-navigation" id="admissionregistration">
              <div className='row padding-bottom-20'>
                <div className="col-lg-12">
                  <img src="/assets/content/admission-1.jpg" className="img-fluid" width={1600} height={564} />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-12 contact-us-circle" data-target="callback">
                  <div className="circle">
                    <span><i className="fas  fa-phone-volume" ></i></span>
                  </div>
                  <h5 className="circle-title padding-top-20">Request a Call</h5>
                </div>
                <div className="col-lg-3 col-md-3 contact-us-circle" data-target="programs">
                  <div className="circle">
                    <span><i className="fas fa-search"></i></span>
                  </div>
                  <h5 className="circle-title padding-top-20">Borwser a Program</h5>
                </div>
                <div className="col-lg-3 col-md-3 contact-us-circle" data-target="booktourc">
                  <div className="circle">
                    <span><i className="fas fa-building"></i></span> 
                  </div>
                  <h5 className="circle-title padding-top-20">Book a Tour</h5>
                </div>
                <div className="col-lg-3 col-md-3 contact-us-circle" data-target="application">
                  <div className="circle">
                    <span><i className="fas fa-bars"></i></span> 
                  </div>
                  <h5 className="circle-title padding-top-20">Start Application</h5>
                </div>
              </div>

              <div className="modal fade " id="formModal"  role="dialog" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg ">
                    <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title" id="formModalLabel">Request a Call</h4>
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
                              <label className="col-sm-3   mb-0">Which major are you interested in? </label>
                              <div className="col-sm-9">
                                <select className="form-control">
                                  <option>major 1</option>
                                  <option>major 1</option>
                                  <option>major 1</option>
                                  <option>major 1</option>
                                  <option>major 1</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3   mb-0">Which academic year would you like to enrol in?</label>
                              <div className="col-sm-4">
                                <select className="form-control">
                                  <option>Fall</option>
                                  <option>Spring</option>
                                </select>
                              </div>
                              <div className="col-sm-4">
                                <select className="form-control">
                                  <option>2020-2021</option>
                                  <option>2021-2022</option>
                                  <option>2022-2023</option>
                                  <option>2023-2024</option>
                                  <option>2024-2025</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                          <button type="button" className="btn btn-primary">Request a Call</button>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            <div className="tab-pane tab-pane-navigation" id="contactinquuriy">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-12 col-md-6 content">
                    <div className="text">
                      <h2>Contact Inquriy</h2>
                    </div>
                    {/* <form onSubmit={handleSubmit(onSubmit)}> */}
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-style">
                        {/* ${isFValid? 'valid' : 'invalid'} */}
                          <div className={`form-group required`}>
                            <input className="form-control"   name="FirstName" id="FirstName"  type="text"  placeholder="First name" />
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            {/* <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span> */}
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-style">
                          {/* ${isFValid? 'valid' : 'invalid'} */}
                          <div className={`form-group required`}>
                            <input className="form-control"   name="LastName" id="LastName"  type="text"  placeholder="Last name" />
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            {/* <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span> */}
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-style">
                           {/* ${isFValid? 'valid' : 'invalid'} */}
                           <div className={`form-group required`}>
                            <select className="form-control" name="dept">
                                <option value="">Select Department</option>
                                  {dept.map((node) => {
                                    return <option value={node.ad_id}>{node.ad_name}</option>
                                  })}
                              </select>
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            {/* <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span> */}
                            
                          </div>

                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-style">
                          {/* ${isFValid? 'valid' : 'invalid'} */}
                          <div className={`form-group required`}>
                            <input className="form-control"   name="phone" id="phone"  type="text"  placeholder="Phone Number" />
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            {/* <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span> */}
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-6">
                        <div className="form-style">
                          {/* ${isFValid? 'valid' : 'invalid'} */}
                          <div className={`form-group required`}>
                            <input className="form-control"   name="email" id="email"  type="text"  placeholder="Email Address" />
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            {/* <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span> */}
                            
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-12 col-lg-12">
                        <div className="form-style">
                          {/* ${isFValid? 'valid' : 'invalid'} */}
                          <div className={`form-group required`}>
                            <textarea className="form-control" name="Message" id="Message"   placeholder="Message" />
                            
                            <i className="error-icon fas fa-exclamation-triangle"></i>
                            {/* <span className="error-text">{errors.FirstName?.type === 'required' && "First name is required"}{errors.FirstName?.type === 'pattern' && "only alphabits is accepted"}</span> */}
                            
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    <button type="submit" className="main-btn book-session-btn">Send</button>
                  {/* </form> */}
                  </div>
                  <div className="col-12 col-md-6 content">
                      <img width={600} height={600} src="/assets/content/bookatour.jpg"className="img-fluid" />
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <script src="js/jquery/jquery-3.6.0.min.js"></script>
      <script src="js/bootstrap/bootstrap.bundle.js"></script>
      <script type="text/javascript" src="/js/contactus.js"></script>
    </div>
  )
}
export async function getServerSideProps() {

  const ress = await fetch('https://scd.edu.om/api/otherapps')
  const otherapp = await ress.json()

  const resoffice = await fetch('https://scd.edu.om/api/admission-office')
  const adminoffice = await resoffice.json()

  const resdept = await fetch('https://scd.edu.om/api/dept')
  const dept = await resdept.json()

  return {
      props: {
          otherapps: otherapp,
          adminoffice: adminoffice,
          dept:dept
      },
  };
}