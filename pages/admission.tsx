import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React from 'react';
import HodGFPDiv from '../components/hod-gfp'
import StaffGFPDiv from '../components/staff-gfp'
export default function AdmissionPage({otherapps,hod,staff}) {
    
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
      <Header active="admission" otherapp={otherapps}/>
      <section className="section-internal margin-bottom-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="tabs tabs-vertical tabs-left tabs-navigation">
                <ul className="nav nav-tabs col-sm-3">
                  <li className="nav-item">
                    <a className="nav-link active" href="#applytoscd" data-bs-toggle="tab">Apply to SCD</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#gfp" data-bs-toggle="tab">General Foundation Program</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#admissionfees" data-bs-toggle="tab">Admission Fees</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#bookatour" data-bs-toggle="tab">Book a Tour</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#financialaid" data-bs-toggle="tab">Financial Aid</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mobile-spacing">
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="financialaid">
                <div className="internal-heading padding-top-20">
                  <h1>Financial Aid</h1>
                </div>
                <table className='table table-striped'>
                  <tbody>
                    <tr>
                      <th>Categories</th>
                      <th>% of discount</th>
                    </tr>
                    <tr>
                      <td>Student sibling</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>College employee (Omani)</td>
                      <td>100</td>
                    </tr>
                    <tr>
                      <td>College employee (other nationality)</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Son/ daughter of college employee</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Students with special needs (medical assessment)</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td>Artists (Detail portfolio is to be submitted)</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Arab Embassies and Cultural Relations</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>Social Security with coordination of Ministry of Higher Education</td>
                      <td>50-100</td>
                    </tr>
                    <tr>
                      <td>Tuition fee payment in advance htmlFor entire year</td>
                      <td>5</td>
                    </tr>
                    <tr>
                      <td>Distinguished students (above 3.5 AGPA) who completed 80 hours (maximum one student per program in an academic year)</td>
                      <td>10</td>
                    </tr>
                  </tbody>
                </table>
                <div className="row">
                    <h1 className="col-lg-12 admssion-grey-box">Procedure</h1>
                </div>
                <ul>
                    <li>Complete the appropriate information on the Financial Aid Request form explaining the reasons in detail and submit in person to the Deputy Dean htmlFor Student Affairs. </li>
                    <li>Deputy Dean htmlFor Student Affairs is responsible to forward the form with all relevant documents to the Dean who in turn discusses with the Board of Directors according to the dedicated annual budget.</li>
                    <li>Finally, after getting consent from Board of Directors, the Dean is responsible htmlFor conveying the decision taken, to the Deputy Dean htmlFor Student Affairs to inform student/parent/guardian. </li>
                    <li>Decisions taken are final; no appeals will be entertained by the college. </li>
                </ul>
                <object data='assets/files/Financial Aid Policy.pdf#toolbar=1' style={{height:"75vh"}} type='application/pdf' width='100%' ></object>
                <div className="row">
                    <h1 className="col-lg-12 admssion-grey-box">The following rules govern the distribution of scholarship and tuition fee discount</h1>
                </div>
                <ul>
                    <li>Financial Aid will be provided only to those students who have submitted the set of documents as mentioned in Financial Aid request Form</li>
                    <li>If a student takes more than the total number of required credits htmlFor completion of program, the student is accountable htmlFor payment of extra credits taken.</li>
                    <li>Scholarship/tuition fee discount offered is not transferable.</li>
                    <li>Scholarship doesn’t cover any repeated courses or withdrawal.</li>
                    <li>Scholarship doesn’t cover any extra fee such as registration fee, educational material, graduation fee and hostel fee.</li>
                    <li>Based on student’s academic performance and status, the college reserves the right to confiscate the waiver at any time. </li>
                    <li>SCD offers 100% scholarship to maximum 10 students per year based on students financial situation. </li>
                </ul>
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation active" id="applytoscd">
                <div id="step-1">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="admission-apply-bk-image"></div> 
                    </div>
                  </div>
                  <div className="row">
                    <h1 className="col-lg-12 admssion-grey-box">What type of student are you?</h1>
                  </div>
                  <div className="row">
                    <div className="col-lg-3 col-md-12 contact-us-circle" data-target="undergraduate">
                      <div className="circle">
                        <span><i className="fas  fa-school" ></i></span>
                      </div>
                      <h5 className="circle-title padding-top-20">Undergraduate</h5>
                    </div>
                    <div className="col-lg-3 col-md-12 contact-us-circle" data-target="graduate">
                      <div className="circle">
                        <span><i className="fas  fa-graduation-cap" ></i></span>
                      </div>
                      <h5 className="circle-title padding-top-20">Postgraduate</h5>
                    </div>
                    <div className="col-lg-3 col-md-12 contact-us-circle" data-target="transfer">
                      <div className="circle">
                        <span><i className="fas  fa-exchange-alt" ></i></span>
                      </div>
                      <h5 className="circle-title padding-top-20">Transfer</h5>
                    </div>
                    <div className="col-lg-3 col-md-12 contact-us-circle" data-target="international">
                      <div className="circle">
                        <span><i className="fas  fa-globe" ></i></span>
                      </div>
                      <h5 className="circle-title padding-top-20">International</h5>
                    </div>
                  </div>
                </div>
                <div id="step-2-graduate" className="step-2">
                  <div className="d-flex justify-content-between">
                    <div className="p-2" > 
                      <button type="button" className="backstep1 btn btn-primary btn-with-arrow-left btn-with-arrow mb-2"><span><i className="fas fa-chevron-left"></i></span>Back</button>
                    </div>
                    <div className="internal-heading padding-top-20">
                      <h1>Prepare Required Documents</h1>
                    </div>
                    <div className="p-2" > 
                      <button type="button" className="nextstep3 btn btn-primary btn-with-arrow-right btn-with-arrow mb-2">Next<span><i className="fas fa-chevron-right"></i></span></button>
                    </div>
                  </div>
                  <section className="call-to-action call-to-action-default mb-5">
                    <div className="col-sm-12 col-lg-12">
                      <div className="call-to-action-content">
                        <p className="mb-0 internal-content-text">Postgraduate applicants obtained a bachelor degree in any relevant artistic field and are searching htmlFor an academically qualified degree htmlFor them to pursue an advanced career path. Search No More! SCD offers you additional practical skills, contextual knowledge, and research work.</p>
                      </div>
                    </div>
                  </section>
                  <div className="row justify-center">
                    <div className="col-lg-3">
                      <div className="featured-box featured-box-primary featured-box-effect-2">
                        <div className="box-content box-content-border-bottom fix-box-height">
                          <i className="icon-featured fas fa-file-image"></i>
                          <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">1</strong> A high School degree.</h4>
                          <p className="mb-2 mt-2 text-2">A certified copy of the original General Education certificate </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="featured-box featured-box-primary featured-box-effect-2">
                        <div className="box-content box-content-border-bottom fix-box-height">
                          <i className="icon-featured far fa-id-card"></i>
                          <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">2</strong> Bachelor degree</h4>
                          <p className="mb-2 mt-2 text-2">Consists of an Original Certificate, Graduation Notification &amp; Full Transcript). </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="featured-box featured-box-primary featured-box-effect-2">
                        <div className="box-content box-content-border-bottom fix-box-height">
                            <i className="icon-featured fas fa-portrait"></i>
                            <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">3</strong> Personal Image</h4>
                            <p className="mb-2 mt-2 text-2">A personal image with a clear white background </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-center">
                    <div className="col-lg-3">
                      <div className="featured-box featured-box-primary featured-box-effect-2">
                        <div className="box-content box-content-border-bottom fix-box-height">
                          <i className="icon-featured far fa-id-card"></i>
                          <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">4</strong> Identification Documents </h4>
                          <p className="mb-2 mt-2 text-2">A photocopy of the identity card from both sides.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="featured-box featured-box-primary featured-box-effect-2">
                        <div className="box-content box-content-border-bottom fix-box-height">
                          <i className="icon-featured fas fa-portrait"></i>
                          <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">5</strong> Passport Image </h4>
                          <p className="mb-2 mt-2 text-2">A copy of the passport image htmlFor non Omanis.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="featured-box featured-box-primary featured-box-effect-2">
                        <div className="box-content box-content-border-bottom fix-box-height">
                          <i className="icon-featured fas fa-receipt"></i>
                          <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">6</strong> Curriculum Vitae </h4>
                          <p className="mb-2 mt-2 text-2">An updated version of the curriculum vitae  .</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="internal-content-text padding-top-50">1. Note High school certificate from abroad need to be equaled from MOE</p>
                  <p className="internal-content-text remove-top-padding">2. Note If the bachelor degree was obtained abroad Oman, We request to equaled from MOHERI</p>
                </div>
                <div id="step-2-undergraduate" className="step-2">
                    <div className="d-flex justify-content-between">
                        <div className="p-2" > 
                            <button type="button" className="backstep1 btn btn-primary btn-with-arrow-left btn-with-arrow mb-2"><span><i className="fas fa-chevron-left"></i></span>Back</button>
                        </div>
                        <div className="internal-heading padding-top-20">
                          <h1>Prepare Required Documents</h1>
                        </div>
                        <div className="p-2" > 
                            <button type="button" className="nextstep3 btn btn-primary btn-with-arrow-right btn-with-arrow mb-2">Next<span><i className="fas fa-chevron-right"></i></span></button>
                        </div>
                    </div>
                    
                    <section className="call-to-action call-to-action-default mb-5">
                        <div className="col-sm-12 col-lg-12">
                            <div className="call-to-action-content">
                                <p className="mb-0 internal-content-text">Are looking htmlFor a creative career? Are wishing to obtain skills and academic knowledge on how to create effective and professional artwork? Then this is your place. 
                                    We believe that art and design is a skill to be learned and developed. Therefore we build our academic program to develop and encourage creative thinking, imagination, research and most importantly overcoming challenges while being equipped with problem solving technique.
                                    </p>
                            </div>
                        </div>
                    </section>
                  
                    <div className="row" >
                        <div className="col-lg-3">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom fix-box-height">
                                    <i className="icon-featured fas fa-graduation-cap"></i>
                                    <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">1</strong> School Certificate</h4>
                                    <p className="mb-2 mt-2 text-2">A certified copy of the General Education certificate or its equivalent.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom fix-box-height">
                                    <i className="icon-featured fas fa-id-card"></i>
                                    <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">2</strong> Identification Documents</h4>
                                    <p className="mb-2 mt-2 text-2"> A photocopy of the identity card from both sides</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom fix-box-height">
                                    <i className="icon-featured fas fa-portrait"></i>
                                    <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">3</strong> Personal Image</h4>
                                    <p className="mb-2 mt-2 text-2">A personal image with a clear background( passport standard)</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="featured-box featured-box-primary featured-box-effect-2">
                                <div className="box-content box-content-border-bottom fix-box-height">
                                    <i className="icon-featured fas fa-bars"></i>
                                    <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">4</strong> Admission Fee</h4>
                                    <p className="mb-2 mt-2 text-2"> A non-refundable application fee of 25 Omani Rials.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                  <div id="step-2-international" className="step-2">
                      <div className="d-flex justify-content-between">
                          <div className="p-2" > 
                              <button type="button" className="backstep1 btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" ><span><i className="fas fa-chevron-left"></i></span>Back</button>
                          </div>
                          <div className="internal-heading padding-top-20">
                            <h1>Prepare Required Documents</h1>
                          </div>
                          <div className="p-2" > 
                              <button type="button" className="nextstep3 btn btn-primary btn-with-arrow-right btn-with-arrow mb-2" >Next<span><i className="fas fa-chevron-right"></i></span></button>
                          </div>
                      </div>
                      <section className="call-to-action call-to-action-default mb-5" >
                          <div className="col-sm-12 col-lg-12">
                              <div className="call-to-action-content">
                                  <p className="mb-0 internal-content-text" >International students from the MENA region as well as Europe attend SCD to learn art and design majors. We are proud to offer a diverse community htmlFor emerging artists and designers to pursue their passion. In case of student request htmlFor a visa, processing fee and labor card expenses are incurred by the family/guardian.
                                      </p>
                              </div>
                          </div>
                      </section>  
                      
                      <div className="row" >

                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-certificate"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">1</strong> School Certificate</h4>
                                      <p className="mb-2 mt-2 text-2">A certified copy of the original General Education certificate or its equivalence from the Omani Higher Education.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-passport"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">2</strong> Passport Image</h4>
                                      <p className="mb-2 mt-2 text-2">A clear copy of the passport image.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-id-card"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">3</strong> Image of residency card</h4>
                                      <p className="mb-2 mt-2 text-2">A photocopy of the residency card from both sides.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-portrait"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold"></strong> Personal Image</h4>
                                      <p className="mb-2 mt-2 text-2">A personal image with a clear background (passport standard).</p>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                  </div>
                  <div id="step-2-transfer" className="step-2">
                      <div className="d-flex justify-content-between">
                          <div className="p-2" > 
                              <button type="button" className="backstep1 btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" ><span><i className="fas fa-chevron-left"></i></span>Back</button>
                          </div>
                          <div className="internal-heading padding-top-20">
                            <h1>Prepare Required Documents</h1>
                          </div>
                          <div className="p-2" > 
                              <button type="button" className="nextstep3 btn btn-primary btn-with-arrow-right btn-with-arrow mb-2" >Next<span><i className="fas fa-chevron-right"></i></span></button>
                          </div>
                      </div>
                      
                      <section className="call-to-action call-to-action-default mb-5" >
                          <div className="col-sm-12 col-lg-12">
                              <div className="call-to-action-content">
                                  <p className="mb-0 internal-content-text" >SCD opens its door to transfer students from respective college/Universities. SCD admission and registration team along with the specialized department review the applicant transcripts to determine which classes have the potential to be transfer to SCD.

                                      </p>
                              </div>
                          </div>
                      </section>  
                      <div className="row">
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-certificate"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">1</strong> A high School degree</h4>
                                      <p className="mb-2 mt-2 text-2"> A certified copy of the General Education certificate or its equivalent</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-id-card"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">2</strong> Identification Documents</h4>
                                      <p className="mb-2 mt-2 text-2">A photocopy of the identity card from both sides.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-portrait"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">3</strong> Personal Image</h4>
                                      <p className="mb-2 mt-2 text-2">A personal image with a clear background (passport standard).</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="featured-box featured-box-primary featured-box-effect-2">
                                  <div className="box-content box-content-border-bottom fix-box-height">
                                      <i className="icon-featured fas fa-check-circle"></i>
                                      <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">4</strong> GFP  certificate</h4>
                                      <p className="mb-2 mt-2 text-2">To submit a prove htmlFor completion of the general foundation program </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div id="step-3" className="step-3" >
                      <div className="d-flex justify-content-between">
                          <div className="p-2" > 
                              <button type="button" className="backstep2 btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" ><span><i className="fas fa-chevron-left"></i></span>Start Over</button>
                          </div>
                          <div className="internal-heading padding-top-20">
                            <h1>Upcoming Semester Dates</h1>
                          </div>
                          <div className="p-2" > 
                              <button type="button" className="nextstep4 btn btn-primary btn-with-arrow-right btn-with-arrow mb-2" >Next<span><i className="fas fa-chevron-right"></i></span></button>
                          </div>
                      </div>
                      <div className="row justify-center" >
                          
                          <div className="col-lg-4">
                              <div className="card border-0 border-radius-0 bg-color-primary">
                                  <div className="card-body" >
                                      <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Fall (Begins in September)</h4>
                                  </div>
                              </div>
                          </div>
                          <div className="col-lg-4">
                              <div className="card border-0 border-radius-0 bg-color-primary">
                                  <div className="card-body" >
                                      <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Spring (Begins in January)</h4>
                                  </div>
                              </div>
                          </div>
                          
                      </div>
                      <section className="call-to-action call-to-action-default mb-5" >
                          <div className="col-sm-12 col-lg-12">
                              <div className="call-to-action-content">
                                  <p className="mb-0 internal-content-text" >Applications are accepted at any time throughout the year. SCD has no deadlines to apply; although, we encourage students to apply at least 14 days before their intended semester start date.

                                      </p>
                              </div>
                          </div>
                      </section>
                      
                  </div>
                  <div id="step-4" className="step-4">
                      <div className="d-flex justify-content-between">
                          <div className="p-2" > 
                              <button type="button" className="backstep3 btn btn-primary btn-with-arrow-left btn-with-arrow mb-2" ><span><i className="fas fa-chevron-left"></i></span>Start Over</button>
                          </div>
                          <div className="internal-heading padding-top-20">
                            <h1>Final Step</h1>
                          </div>
                          <div className="p-2" ><p> &nbsp; &nbsp; &nbsp;</p>
                          </div>
                      </div>

                      <div className="row" >
                          <div className="col-lg-3">
                              <div className="card flip-cards text-center rounded-0">
                                  <div className="flip-front p-5">
                                      <div className="flip-content my-4">
                                          <strong className="font-weight-extra-bold text-color-dark line-height-1 text-13 mb-3 d-inline-block">01</strong>
                                          <h4 className="font-weight-bold text-color-primary text-4"> Start Application</h4>
                                          
                                      </div>
                                  </div>
                                
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="card flip-cards text-center rounded-0">
                                  <div className="flip-front p-5">
                                      <div className="flip-content my-4">
                                          <strong className="font-weight-extra-bold text-color-dark line-height-1 text-13 mb-3 d-inline-block">02</strong>
                                          <h4 className="font-weight-bold text-color-primary text-4">Fill The Form</h4>
                                      </div>
                                  </div>
                                 
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="card flip-cards text-center rounded-0">
                                  <div className="flip-front p-5">
                                      <div className="flip-content my-4">
                                          <strong className="font-weight-extra-bold text-color-dark line-height-1 text-13 mb-3 d-inline-block">03</strong>
                                          <h4 className="font-weight-bold text-color-primary text-4">Upload Documents</h4>
                                      </div>
                                  </div>
                                 
                              </div>
                          </div>
                          <div className="col-lg-3">
                              <div className="card flip-cards text-center rounded-0">
                                  <div className="flip-front p-5">
                                      <div className="flip-content my-4">
                                          <strong className="font-weight-extra-bold text-color-dark line-height-1 text-13 mb-3 d-inline-block">04</strong>
                                          <h4 className="font-weight-bold text-color-primary text-4">Submit Application</h4>
                                      </div>
                                  </div>
                                 
                              </div>
                          </div>
                      </div>
                      <br /><br />
                      <div className="row" >
                          <div className="col-lg-10">
                              <section className="call-to-action call-to-action-default mb-5" >
                                  <div className="col-sm-9 col-lg-9">
                                      <div className="call-to-action-content">
                                          <h3>Application are accepted during all time .</h3>
                                          <p className="mb-0">Start you application now an obtain a creative career </p>
                                      </div>
                                  </div>
                                  <div className="col-sm-3 col-lg-3">
                                      <div className="call-to-action-btn">
                                          <a href="https://apply.scd.edu.om" target="_blank" className="btn btn-modern text-2 btn-light">Start Now</a>
                                      </div>
                                  </div>
                              </section>
                          </div>
                      </div>
                      <div className="row justify-center" >
                        <div className="col-lg-3 col-md-12 contact-us-circle admission-circles" data-target="programs">
                          <div className="circle">
                            <span><i className="fas  fa-phone-volume" ></i></span>
                          </div>
                          <h5 className="circle-title padding-top-20">Borwse Programs</h5>
                        </div>
                        <div className="col-lg-3 col-md-12 contact-us-circle admission-circles" data-target="booktour">
                          <div className="circle">
                            <span><i className="fas  fa-phone-volume" ></i></span>
                          </div>
                          <h5 className="circle-title padding-top-20">Book a Tour</h5>
                        </div>
                        <div className="col-lg-3 col-md-12 contact-us-circle admission-circles" data-target="callback">
                          <div className="circle">
                            <span><i className="fas  fa-phone-volume" ></i></span>
                          </div>
                          <h5 className="circle-title padding-top-20">Request a Call</h5>
                        </div>
                      </div>
                  </div>
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="gfp">
                <div className="internal-heading padding-top-20">
                  <h1>Head of English Department</h1>
                </div>
                <HodGFPDiv hodGFP={hod} />
                <StaffGFPDiv staffGFP={staff} />
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="bookatour">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 col-md-6 content">
                      <div className="text">
                        <h2>Book a Tour</h2>
                        <p className="internal-content-text padding-bottom-20 remove-top-padding">Get a real life experience of SCD student life. We offer you a guided tour around SCD campus and faculties. Visit our state of art labs, various studios, theater, student lounge, outdoor sitting area along with answering all your inquires about the suspected major to enroll in.
                      </p>
                      </div>

                      <form action="#" className="form-style-2">
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group required">
                                      <label htmlFor="f_name">Full name</label>
                                      <input type="text" id="f_name" className="form-control" name="f_name" placeholder="" />
                                    </div>
                              </div>
                              <div className="col-lg-6">
                                  <div className="form-group required">
                                      <label htmlFor="email_address">Suspected Major</label>
                                      <select className="form-control">
                                          <option>Major 1</option>
                                          <option>Major 1</option>
                                          <option>Major 1</option>
                                          <option>Major 1</option>
                                      </select>
                                    </div>
                              </div>
                          </div>
                          <div className="row">
                              <div className="col-lg-6">
                                  <div className="form-group required">
                                      <label htmlFor="l_name">Phone Number</label>
                                      <input type="text" id="l_name" className="form-control" name="l_name" placeholder="" />
                                    </div>
                              </div>
                              
                          </div>
                          
                        
                          <button type="submit" className="main-btn book-session-btn">Book</button>
                      </form>
                    </div>
                    <div className="col-12 col-md-6 content">
                      <img src="/assets/content/bookatour.jpg" width={600} height={600} className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="admissionfees">
                <div className="internal-heading">
                  <h1>Admission Fees</h1>
                </div>
                <div className="row" >
                  <h1 className="col-lg-12 admssion-grey-box">General Foundation Program</h1>
                </div>
                <p>General Foundation Program is to enhance students’ proﬁciency in English language, Math, Information Technology, Research, and Study Skills by providing a student-centered teaching- learning environment to successfully engage in their academic programs and foster independent lifelong learning.</p>
                <table className='table table-striped'>
                  <tbody>
                    <tr>
                      <th>Levels</th>
                      <th>English</th>
                      <th>Math</th>
                      <th>Computer</th>
                      <th>Cost</th>
                    </tr>
                    <tr>
                      <td><b>GFP Level 1</b></td>
                      <td><i className="fas fa-check"></i></td>
                      <td style={{color:"#3c3c3c"}}>-</td>
                      <td style={{color:"#3c3c3c"}}>-</td>
                      <td>650 OMR</td>
                    </tr>
                    <tr>
                      <td><b>GFP Level 2</b></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td>950 OMR</td>
                    </tr>
                    <tr>
                      <td><b>GFP Level 3</b></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td><i className="fas fa-check"></i></td>
                      <td>950 OMR</td>
                    </tr>
                    <tr>
                      <td colSpan={4} style={{textAlign:"right"}}>Grand Total</td>
                      <td>2,550 OMR</td>
                    </tr>
                  </tbody>
                </table>
                <div className="row">
                  <h1 className="col-lg-12 admssion-grey-box"> Undergraduate Programs (Bachelors)</h1>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Fine Arts</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Graphic Design</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Architecture</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Photography</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Graphic Design Hearing Imparied</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light"> Interior Design</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Animation </h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Fashion Design</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h1 className="col-lg-12 admssion-grey-box"> Postgraduate Programs</h1>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-3 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light" >Master of Art in Fine Art</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-5 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light" >Master of Design in Visual Communication</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-4 col-9">
                        <a href="programs" className="cardlink">
                          <div className="card border-0 border-radius-0 bg-color-primary">
                            <div className="card-body">
                              <h4 className="card-title mb-1 text-4 font-weight-bold text-light" >Master of Design in Interior Design</h4>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <h1 className="col-lg-12 admssion-grey-box"> Other Fees</h1>
                  <table className='table table-striped'>
                    <tbody>
                      <tr>
                          <th>Fees</th>
                          <th>Amount</th>
                          <th>Notes</th>
                      </tr>
                      <tr>
                          <td><b>Equivalence</b></td>
                          <td>25 OMR</td>
                          <td><i>Our Equivalence fees are credited as part of the registration fees for the first semester and non-refundable</i></td>
                      </tr>
                      <tr>
                          <td><b>Registration Fees</b></td>
                          <td>25 OMR</td>
                          <td> - </td>
                      </tr>
                      <tr>
                          <td><b>Education Material</b></td>
                          <td>100 OMR</td>
                          <td><i>During the summer semester its 7 OMR per registered credit hours.</i></td>
                      </tr>
                      <tr>
                          <td><b>Graduation Fees</b></td>
                          <td>40 OMR</td>
                          <td>-</td>
                      </tr>
                    </tbody>
                  </table>
                  <span><i style={{color:"gray"}}>*  Fees / Tuitions are subject to be changed according to the college financial policies / procedures and after MOHERI approval</i></span>
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
      <script type="text/javascript" src="/js/admission.js"></script>
    </div>
  )
}
export async function getServerSideProps() {

  const ress = await fetch('http://localhost:3000/api/otherapps')
  const otherapp = await ress.json()
  const reshod = await fetch('http://localhost:3000/api/hod-gfp')
  const hod = await reshod.json()
  const resstaff = await fetch('http://localhost:3000/api/staff-gfp')
  const staff = await resstaff.json()
  
  return {
      props: {
          otherapps: otherapp,
          hod:hod,
          staff:staff            
      },
  };
}