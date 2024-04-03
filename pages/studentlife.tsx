import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'
import React  from 'react';
import StudentServices from '../components/student-services'
export default function StudentLifePage({otherapps,services}) {
    
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
        <link rel="stylesheet" href="css/spidoche/Spidoche.minimal.css"></link>
        
      </Head>
      <Header active="studentlife" otherapp={otherapps} />
      <section className="section-internal margin-bottom-0">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="tabs tabs-vertical tabs-left tabs-navigation">
                <ul className="nav nav-tabs col-sm-3">
                  <li className="nav-item">
                    <a className="nav-link active" href="#studentspotlight" data-bs-toggle="tab">Student Spotlight</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#internationalstudentlife" data-bs-toggle="tab">International Student Life</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#studentservices" data-bs-toggle="tab">Student Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#healthwellness" data-bs-toggle="tab">Student Counselling </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#safety"  data-bs-toggle="tab">Health & Safety Regulations </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#housing"  data-bs-toggle="tab">Hostel Accommodation</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#dining"  data-bs-toggle="tab">Restaurant Services  </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#annualevents"  data-bs-toggle="tab">Annual Events</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 mobile-spacing">
              {/* START */}
              <div className="tab-pane tab-pane-navigation active" id="studentspotlight">
                  <div id="youtube"></div>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="internationalstudentlife">
                <div className="internal-heading margin-bottom-30">
                    <h1>International Student Life</h1>
                </div>
                <img src="/assets/content/internationalstudents.jpg" width={1600} height={613} className="img-fluid" alt="" />
                <p className="internal-content-text">
                International students enrolled at the Scientific College of Design represent 7% of the student body. Twenty one nationalities are represented where the majority belongs to expatriate families living in Oman. The Scientific College of Design has formal recognition in several countries such as Jordan, Egypt, India as well as other Regional Countries. The college supports international students in academic and governmental issues such as acquiring student visas, transportation, and housing (females).            
                </p>
                <div className="row">
                  <div className="col-lg-3">
                    <div className="featured-box featured-box-primary featured-box-effect-2">
                      <div className="box-content box-content-border-bottom fix-box-height-3">
                        <i className="icon-featured fas fa-graduation-cap"></i>
                        <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">1</strong> School Certificate</h4>
                        <p className="mb-2 mt-2 text-2">Students are required to Contact formal authorities to do the equivalency needed for the high secondary school certificate to equal the Omani grade 12 certificate</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="featured-box featured-box-primary featured-box-effect-2">
                      <div className="box-content box-content-border-bottom fix-box-height-3">
                        <i className="icon-featured fas fa-id-card"></i>
                        <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">2</strong> Admission & Registration</h4>
                        <p className="mb-2 mt-2 text-2"> complete the admission and registration procedures, to start <a href="https://apply.scd.edu.om">click here</a></p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="featured-box featured-box-primary featured-box-effect-2">
                      <div className="box-content box-content-border-bottom fix-box-height-3">
                        <i className="icon-featured fas fa-portrait"></i>
                        <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">3</strong> Student Visa & Health Insurance</h4>
                        <p className="mb-2 mt-2 text-2">For student visa & health insurance application and requirement please contact our <a href="contactus#administrationoffice">public relation unit</a> </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="featured-box featured-box-primary featured-box-effect-2">
                      <div className="box-content box-content-border-bottom fix-box-height-3">
                        <i className="icon-featured fas fa-bars"></i>
                        <h4 className="font-weight-normal text-5 mt-3"><strong className="font-weight-extra-bold">4</strong> Transportation</h4>
                        <p className="mb-2 mt-2 text-2"> upon student arrival, SCD offers a transportation from the airport to the campus following within orientation program and a campus tour.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="studentservices">
                <div className="internal-heading margin-bottom-30">
                    <h1>Student Services</h1>
                </div>
                <img src="/assets/content/services.jpg" width={1600} height={613} className="img-fluid" alt="" />
                <StudentServices servicesdata={services} />
                
              </div>
              {/* End */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="healthwellness">
                <div className="internal-heading margin-bottom-30">
                    <h1>Student Counselling </h1>
                </div>
                <img src="/assets/content/wellness.jpg" width={1600} height={613} className="img-fluid" alt="" />
                <p className="internal-content-text grey-box margin-top-20" style={{textAlign:"right", direction:"rtl"}}>يقع الارشاد ضمن مجموعة المهن المساعدة، مثل مهنة الطب والخدمة الاجتماعية وغيرها، حيث يجمع هذه المهن هدف مشترك وهو مساعدة الاخرين لأن يصبحوا أكثر توافقا وفاعلية
سعت الكلية الى توفير الخدمات الارشادية للطلبة بشكل عام، وللطلبة الذين يعانون من بعض المشكلات التعليمية والنفسية وضغوط الحياة بشكل خاص من خلال المكتب الارشاد النفسي، حيث ان جميع المقابلات مع المرشد النفسي خاصة وسرية تامة ولا يتم مشاركتها مع اي طرف من الكلية
</p>
<p className="internal-content-text grey-box margin-top-20">
Counseling falls within the group of helping professions, such as medicine, social service, and others, as these professions share a common goal, which is to help others become more compatible and effective.
The college sought to provide counseling services to students in general, and to students who suffer from some educational and psychological problems and life pressures in particular through the counselor office, as all interviews with the counselor are private and completely confidential and are not shared with any party in the college.

</p>

              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="safety">
                <img src="/assets/content/safety.jpg" className="img-fluid" width={1600} height={613} />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="internal-heading padding-top-20">
                      <h1>Safety and Hygiene Measures </h1>
                    </div>
                      <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Following Muscat Municipality regulations, the college building is equipped with adequate air circulation and ventilation. A biennial inspection visit by the Ministry of Civil Defence and a certificate issued by them guarantee these standards.</li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Adhere with the national protocols and have a trained staff in the areas of health safety & environment induction, basic firefighting, risk assessment and basic first aid. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Maintain a professionally trained and certified in charge personnel in the area of health and safety to adhere with the Ministry of Labour requirements. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>All classrooms, studios, labs and offices are well equipped to get sufficient light and ventilation. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Due to local weather conditions, the entire college building (including hostel) are fully air-conditioned. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Vision panels/see through glasses are fitted in order to look into in case the doors are locked from inside. </li>

                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>A maintenance contract with a cleaning company to ensure hygiene.  </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>SCD has a contract with a specialized company for annual maintenance of elevators. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>All potentially harmful equipment, materials are stored in lockable cabinets in the studios and store.  </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>In order to spread awareness, the college posted safety instructions in the woodwork shop, studios, print office, laser cutting room etc.  </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Painting studios are equipped with heavy-duty exhaust fans as a safety measure from pungent paint smell. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>The college does deep cleaning over the weekend and an annual maintenance of all facilities and buildings.  </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Students and staff must wear protective clothing (lab coats) and necessary equipment while working in the studios and woodwork shop. </li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>The college restaurant is outsourced. Maintenance is the sole responsibility of the restaurant manager and to ensure that national protocols are followed the Ministry of Health does an annual visit and issues a certificate.  </li>
                      </ul>
                      <p><b>Note:</b>Pets are strictly restricted into the college premises. </p>
                  </div>
                  <div className="col-lg-6">
                    <div className="internal-heading padding-top-20">
                      <h1>Medical and First aid facilities  </h1>
                    </div>
                    <p>The college hired a well-qualified nurse to cater to marginal medical service and first aid. In case of need for further medical attention, the nurse contacts local hospital authorities/ambulance. The clinic hours of operation is from 8:00 am to 3:00 pm to cater to college students, faculty & staff. After these hours, the hostel supervisors take the responsibility of the hostel girls in case of medical attention by contacting a nearby hospital to arrange the needful. Equipment available are: </p>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Nebulizer</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Blood sugar machine</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Oxygen cylinder</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Blood pressure machine</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Pico light</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Digital thermometer</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Stethoscope</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Wheel chair</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Mobile screen</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Examination bed </li>
                    </ul>
                  </div>
                </div>
                <div className="featured-boxes featured-boxes-style-8">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background" >
                        <div className="box-content p-4 ">
                          <div className="row">
                            <div className="col">
                              <h2 className="font-weight-bold text-color-white font-20" >Awareness Sessions and Evacuation drill </h2>
                              <div className="divider divider-small divider-small-center " >
                                <hr className="border-white" />
                              </div>
                              <p className="safety-internal-content">The college nurse gives presentations, sends health and safety emails, invites external speakers to guide students on medical attention and hygiene. Furthermore, to spread the awareness on emergency exits in case of fire/other emergencies, the college Administration & Human Resource Manager organizes an annual Evacuation Drill following the norms stated by the Royal Oman Police. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background">
                        <div className="box-content p-4 ">
                          <div className="row">
                            <div className="col">
                              <h2 className="font-weight-bold text-color-white font-20 ">Health and Safety during trips </h2>
                              <div className="divider divider-small divider-small-center  ">
                                <hr className="border-white" />
                              </div>
                              <p className="safety-internal-content">Faculty taking students on educational trips are responsible to take proper measures for students’ health and safety during trips. In the event of any incident, a faculty member is responsible to provide immediate medical attention from the nearest medical centre/hospital and report to the college nurse as they reach college to record the incident in the SCD Incident Record Form. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background">
                        <div className="box-content p-4 ">
                          <div className="row">
                            <div className="col">
                              <h2 className="font-weight-bold text-color-white font-20">National Protocol </h2>
                              <div className="divider divider-small divider-small-center  ">
                                <hr className="border-white" />
                              </div>
                              <p className="safety-internal-content">A biennial inspection by Ministry of Civil Defence and based on inspection results, the college receives a certificate valid for two years or recommendations for changes. However, Civil Defence holds authority to visit college and perform any unexpected inspection to assure that SCD adheres to the national law. Furthermore, following the national requirements, a nationally recognised and approved maintenance company visits the college every 6 months to evaluate facilities and services and inform changes/replacements needed in the form of a report. </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="featured-boxes featured-boxes-style-8">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background">
                        <div className="box-content p-4 ">
                          <div className="row">
                              <div className="col">
                                <h2 className="font-weight-bold text-color-white font-20">Record Keeping </h2>
                                <div className="divider divider-small divider-small-center  ">
                                  <hr className="border-white" />
                                </div>
                                <p className="safety-internal-content">The college nurse documents all accidents/injuries is in “Incident Record Form” and reports them to the Deputy Dean and Student Affairs Head on a weekly basis.  </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="featured-box featured-box-primary green-background">
                          <div className="box-content p-4 ">
                            <div className="row">
                              <div className="col">
                                <h2 className="font-weight-bold text-color-white font-20">Building Maintenance Work Permit </h2>
                                <div className="divider divider-small divider-small-center ">
                                    <hr className="border-white" />
                                </div>
                                <p className="safety-internal-content">Building maintenance work permit is for outsourced contractors engaged by SCD who will carry out work on SCD campus. SCD constituents are approximately 1200 plus visitors to the college in its day-to-day activities. Henceforth, specific precautions are required while performing any kind of work at the college. In order to document this, SCD uses Building Maintenance Work Permit form filled by outsourced contractors. SCD does not allow any kind of interference without completing this form and other relevant documentation, if needed. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="featured-box featured-box-primary green-background">
                          <div className="box-content p-4 ">
                            <div className="row">
                              <div className="col">
                                <h2 className="font-weight-bold text-color-white font-20">Risk Assessment </h2>
                                <div className="divider divider-small divider-small-center ">
                                    <hr className="border-white" />
                                </div>
                                <p className="safety-internal-content">SCD performs Risk assessment annually by applying a Risk Management Plan to guarantee the welfare of all internal stakeholders. Following the plan, all employees must mention possible risks to the supervisor and document them in a Risk Register. Refer to the Risk Management Plan for complete details. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="housing">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="internal-heading padding-top-20">
                      <h1>Hostel Accommodation</h1>
                    </div>
                    <div className="col-lg-12">
                      <img src="/assets/content/housing.jpg" className="img-fluid" width={1600} height={613} />
                    </div>
                    <div className="internal-heading margin-top-20">
                      <h1>Protocol and Behaviour code </h1>
                    </div>
                    <ul className="margin-left-30 padding-top-20 accreditation">
                      <li>Respect local customs and traditions regarding dress, language, and the hostel environment.</li>
                      <li>Treat fellow residents and staff with respect and courtesy.</li>
                      <li>Refrain from discussing politics, religion, or other sensitive topics.</li>
                      <li>Strictly prohibit parties, events, or loud music in the hostel.</li>
                      <li>Hearing-impaired residents may share a room with another hearing-impaired resident or have a single room.</li>
                      <li>Maintain quiet from 10:00 PM to 7:00 AM.</li>
                      <li>Limit entry to hostel rooms only to resident students.</li>
                      <li>Maintain cleanliness and hygiene in common facilities.</li>
                      <li>Strictly prohibited to cook inside the rooms due to safety concerns.</li>
                      <li>Common area lights (sitting rooms, hallways, and kitchens) turn off at 10:00 PM.</li>
                      <li>Obtain a leave permit from the hostel supervisor to leave campus.</li>
                      <li>Report any maintenance or other issues to the hostel supervisors.</li>
                      <li>Maintain cleanliness throughout the hostel.</li>
                      <li>Be present in your designated room for supervisor attendance checks before 9:30 PM.</li>
                      <li>Do not paste pictures or papers on room walls.</li>
                      <li>Do not vandalize furniture.</li>
                      <li>Strictly prohibited to bring artwork and art materials (paintings, colors, clay works, and sculptures) is inside the residence hall.</li>
                      <li>Dress modestly in hallways and other common areas.</li>
                      <li>Vacate the hostel during official holidays, emergencies, or maintenance periods.</li>
                      <li>Use the authorization provided in the Hostel Accommodation Form to take students outside campus. Guardians must appoint authorized individuals and/or bus driver details in the form. Changes or additions to authorized persons require the guardian to visit in person or email hostel@scd.edu.om/WhatsApp 00-968-91777728, specifying whether it's a one-time or permanent change, and include a copy of their ID.</li>
                      <li>Visiting family, relatives, and receiving items must occur only in the hostel supervisor's office.</li>
                    </ul>
                    <div className="internal-heading margin-top-20">
                      <h1>Prices and financial obligations </h1>
                    </div>
                    <ul className="margin-left-30 padding-top-20 accreditation">
                      <li>A refundable deposit of 50 OMR is required upon joining.</li>
                      <li>If a resident withdraws after one week of entering the hostel, they are liable for full semester fees.</li>
                      <li>Accommodation fees are due before the end of each semester.</li>
                    </ul>
                    <table className='table table-striped'>
                    <tbody>
                      <tr>
                          <th>Room Type</th>
                          <th>Fall Semester</th>
                          <th>Spring Semester</th>
                          <th>Summer Semester</th>
                      </tr>
                      <tr>
                          <td>Single room</td>
                          <td>500 to 600 OMR</td>
                          <td>500 to 600 OMR</td>
                          <td>250 to 300 OMR</td>
                      </tr>
                      <tr>
                          <td>Double  room</td>
                          <td>250 to 350 OMR</td>
                          <td>250 to 350 OMR</td>
                          <td>125 to 200 OMR</td>
                      </tr>
                      <tr>
                          <td>Triple  room</td>
                          <td>200 to 300 OMR</td>
                          <td>200 to 300 OMR</td>
                          <td>100 to 175 OMR</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="internal-heading margin-top-20">
                      <h1>Other Facilities & Services</h1>
                    </div>
                    <ul className="margin-left-30 padding-top-20 accreditation">
                      <li>Two washing machines are available on each floor.</li>
                      <li>One sitting common area/hall on every floor.</li>
                      <li>Two kitchens on every floor that are accessible from 7:00 AM to 9:00 PM.</li>
                      <li>One study room on every floor.</li>
                      <li>Internet connectivity (Open Wi-Fi and internet connectivity sockets in selected areas)</li>
                      <li>The college main campus is accessible from 7:00 AM until 6:00 PM.</li>
                      <li>Every 2 weeks transportation facility to a local mall/park under the supervision of the hostel supervisor.</li>
                      <li>College restaurant provides meals and snacks and accessible from 8:00 AM to 9:00 PM.</li>
                      <li>Other entertainment/sports facilities includes treadmill, upright bike, table tennis, table football game (baby foot) and air hockey table.</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="dining">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="internal-heading padding-top-20">
                      <h1>Dining</h1>
                    </div>
                      <div className="col-lg-12">
                        <img src="/assets/content/dining.jpg" className="img-fluid" width={1600} height={1066} />

                        <p className="internal-content-text padding-top-20">Food is fuel for the mind. The Restaurant nourishes and stimulates the intellect of hundreds of students at SCD. Our restaurant is dedicated to providing a variety of quality fresh foods and exceptional service in a friendly environment. Our restaurant offers a wide variety of wheat & gluten-free, low-fat, and more to accommodate various food preferences and allergies. Fresh foods are brought in from local and regional producers to develop healthy and delicious menu items. The Restaurant is constantly improving its menu and facility. The culinary chefs are mindful about purchasing fruits, vegetables, dairy, and meat products from Omani Organic Farms and other local producers.</p>
                        <p className="internal-content-text">The College Restaurant offers a blend of Gulf & Middle Eastern courses, prepared with fresh ingredients and served in generous portions. The restaurant offers full breakfast, lunch, and dinner menu, available any time. The restaurant staff is friendly and customer service oriented. Students & staff can also indulge into a delicious choice of ice-cream and other treats all day long. Occasional specials include authentic dishes prepared and served by an expert Chef from Jordan specialized in Middle Eastern & Arabian Gulf recipes. The gourmet specialties include Manssaf (a famous Jordanian dish), Scallops, Stuffed Vegetables, Steaks, Mixed BBQ Grill and other famous Omani gourmets like: Thareed, Harees and Shewah.</p>
                        <p className="internal-content-text">Restaurant Hours: 8:00 am – 10:00 pm</p>
                      </div>
                      
                  </div>
                </div>
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="annualevents">
                <div className="internal-heading padding-top-20">
                  <h1>Annual Events</h1>
                </div>
                <div className="row padding-bottom-50 padding-top-20">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row student-life-box">
                              <div className="col-lg-12">
                                <h3><i className="fas fa-caret-right"></i> Orientation Day</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <img src="/assets/studentservices/1.jpg" height={350} width={520} className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row student-life-box">
                              <div className="col-lg-12">
                                <h3 ><i className="fas fa-caret-right"></i> National Day</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <img src="/assets/studentservices/4.jpg" height={350} width={520} className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row student-life-box">
                              <div className="col-lg-12">
                                <h3><i className="fas fa-caret-right"></i> Open Day</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <img src="/assets/studentservices/2.jpg" height={350} width={520} className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-10">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="row student-life-box">
                              <div className="col-lg-12">
                                <h3 ><i className="fas fa-caret-right"></i> Mother Day</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-lg-12">
                            <img src="/assets/studentservices/3.jpg" height={350} width={520} className="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* END */}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Script strategy="beforeInteractive" src="js/jquery/jquery-3.6.0.min.js"/>
        <Script strategy="lazyOnload" src="js/bootstrap/bootstrap.bundle.js"/>
        <Script strategy="lazyOnload" type="text/javascript" src="/js/owl.carousel/dist/owl.carousel.min.js"/>
        <Script strategy="lazyOnload" src="js/simple-text-rotator/jquery.simple-text-rotator.min.js"/>
        <Script strategy="lazyOnload" src="js/spidoche/jquery.spidochetube.min.js"/>
        <Script strategy="lazyOnload" type="text/javascript" src="/js/studentlife.js"/>
        <Script src="js/header.js" strategy="lazyOnload"/>
    </div>
  )
}
export async function getServerSideProps() {

  const ress = await fetch('https://scd.edu.om/api/otherapps')
  const otherapp = await ress.json()
  
  const resservices = await fetch('https://scd.edu.om/api/student-services')
  const services = await resservices.json()
  
  return {
      props: {
          otherapps: otherapp,
          services:services          
      },
  };
}