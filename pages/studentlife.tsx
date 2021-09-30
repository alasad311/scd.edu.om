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
                    <a className="nav-link" href="#healthwellness" data-bs-toggle="tab">Health & Wellness</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#safety"  data-bs-toggle="tab">Safety</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#housing"  data-bs-toggle="tab">Housing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#dining"  data-bs-toggle="tab">Dining</a>
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
                International students enrolled at the Scientific College of Design represent 7% of the student body.  Twenty one nationalities are represented where the majority belongs to expatriate families living in Oman.  The Scientific College of Design has formal recognition in several countries such as Jordan, Egypt, India as well as other Regional Countries.  The college supports international students in academic and governmental issues such as acquiring student visas, transportation, and housing (females).            
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
                    <h1>Health & Wellness</h1>
                </div>
                <img src="/assets/content/wellness.jpg" width={1600} height={613} className="img-fluid" alt="" />
                <p className="internal-content-text grey-box margin-top-20">The Scientific College of Design takes meticulous care of the students mental health. We organize educational talks about dealing with work stress, anxiety, addictions and many more. The Scientific College of Design grant students access to a educational mental health platform. SCD students can now share their thoughts and receive feedback from licensed professionals.                        </p>

                <div className="internal-heading padding-top-20">
                    <h1>TalkCampus has arrived at Scientific College of Design!</h1>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <p className="internal-content-text font-13">Get instant support for your mental health any time of day and night through the TalkCampus app. Student life can be incredibly tough. At TalkCampus we’re here for the moments when you just need a friend. Talk anonymously to students from universities and colleges around the world going through the exact same struggles you are any time of day or night.</p>
                        <p className="internal-content-text font-13 remove-top-padding">This is a safe place where you can talk anonymously about anything and get support for your mental health and whatever is on your mind.</p>
                    </div>
                    <div className="col-lg-3">
                        <a href="https://apps.apple.com/gb/app/talkcampus/id1458337209?mt=8">
                          <img src="/assets/icons/app store.webp" className="img-fluid" width={300} height={88} /></a><br />
                        <a href="https://play.google.com/store/apps/details?id=com.bearpty.talkcampus&hl=en_GB">
                          <img src="/assets/icons/google play btn.webp" className="img-fluid" width={300} height={88} /></a>
                    </div>
                </div>
                <div className="internal-heading padding-top-20">
                    <h1>Download TalkCampus for free today!</h1>
                </div>
                <p className="internal-content-text font-13">Once signed up, you’ll be able to:</p>
                <ul className='margin-left-20 accreditation'>
                    <li>Talk about the ups and downs of life in a safe and supportive environment that’s just for students like you.</li>
                    <li>Share your own experiences and support others, It’s amazing how helpful you can be to someone out there, just by being you! </li>
                    <li>Open up or post anonymously – it’s totally up to you. However you want to talk, we let you do it just that way.</li>
                    <li>Safely share struggles with anxiety, depression, stress, bipolar, self-harm, anorexia or suicidal feelings. Whatever is going on for you right now we’re here. </li>
                </ul>
                <p className="internal-content-text font-13 remove-top-padding">To sign up to TalkCampus, please use your Scientific College of Design email which will unlock the app free of charge. You will be asked to verify your email before posting. You can read the details of our privacy policy here.</p>
              </div>
              {/* END */}
              {/* Start */}
              <div className="tab-pane tab-pane-navigation" id="safety">
                <img src="/assets/content/safety.jpg" className="img-fluid" width={1600} height={613} />
                <div className="row">
                  <div className="col-lg-6">
                    <div className="internal-heading padding-top-20">
                      <h1>Safety Measures at SCD</h1>
                    </div>
                      <ul className="fa-ul">
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Building is planned and equipped with adequate air circulation and ventilation</li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>All facilities are safe to maintain student wellbeing suchas locks on windows, doors and cabints.</li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Staircase is checked regularly so as to ensure that they are free from any hurdles and are not damaged.</li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Elevators are maintained with annual checkup under the contract with a maintenance company.</li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Any potentially harmful items/material is stored in lockable cabinets.</li>
                        <li><span className="fa-li"><i className="fas fa-check-square"></i></span>Rooms used for painting classes are equipped with heavy duty exhaust fans as a safety measure from pungent paint smell.</li>
                      </ul>
                  </div>
                  <div className="col-lg-6">
                    <div className="internal-heading padding-top-20">
                      <h1>First Aid and Medication</h1>
                    </div>
                    <ul className="fa-ul">
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>SCD clinic is equipped with a nebulizer, blood sugar machine, oxygen O2 cylinder, blood pressure machine, pico light, digital thermometer, stethoscope, wheel chair, mobile screen and examination bed.</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>First Aid and Medication on campus is available from 8:00 am to 3:00 pm under the guidance of a qualified nurse. If needed, she contacts hospital authorities to arrange further medical attention / ambulance.</li>
                      <li><span className="fa-li"><i className="fas fa-check-square"></i></span>SCD hostel supervisors take responsibility for hostel students after 3:00 pm. If any medical attention is needed they are responsible to contact a nearby hospital and arrange for medical attention / ambulance.</li>
                    </ul>
                  </div>
                </div>
                <div className="featured-boxes featured-boxes-style-8">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background" >
                        <div className="box-content p-4 fix-box-height-2">
                          <div className="row">
                            <div className="col">
                              <h2 className="font-weight-bold text-color-white font-20" >Health and Safety during trips</h2>
                              <div className="divider divider-small divider-small-center " >
                                <hr className="border-white" />
                              </div>
                              <p className="safety-internal-content">Faculty taking students on educational trips are responsible to take proper measures for students’ health and safety during trips. In the event of any incident faculty member is responsible to provide immediate medical attention from the nearest medical center and report to the college nurse as they reach college to record the incident.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background">
                        <div className="box-content p-4 fix-box-height-2">
                          <div className="row">
                            <div className="col">
                              <h2 className="font-weight-bold text-color-white font-20 ">Risk Assessment</h2>
                              <div className="divider divider-small divider-small-center  ">
                                <hr className="border-white" />
                              </div>
                              <p className="safety-internal-content">SCD performs Risk assessment every academic year to guarantee that the welfare of all internal stakeholders at the college is secured. All employees need to mention possible risks using risk register and submit it to his/her supervisor. Any risks identified are reported to respective personnel to mitigate them on time.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="featured-box featured-box-primary green-background">
                        <div className="box-content p-4 fix-box-height-2">
                          <div className="row">
                            <div className="col">
                              <h2 className="font-weight-bold text-color-white font-20">Evacuation drill</h2>
                              <div className="divider divider-small divider-small-center  ">
                                <hr className="border-white" />
                              </div>
                              <p className="safety-internal-content">Administrative and HR manager plans and organizes an annual evacuation drill with the support of Royal Oman Police. In times of any incident evacuation drill helps to spread awareness of emergency exits for all stakeholders in times of any accident on campus</p>
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
                        <div className="box-content p-4 fix-box-height-2">
                          <div className="row">
                              <div className="col">
                                <h2 className="font-weight-bold text-color-white font-20">Smoking</h2>
                                <div className="divider divider-small divider-small-center  ">
                                  <hr className="border-white" />
                                </div>
                                <p className="safety-internal-content">SCD desires to offer students and employees a clean and pleasant environment for study and work. Since smoking endangers health and safety, smoking is prohibited in any area of SCD campus. </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="featured-box featured-box-primary green-background">
                          <div className="box-content p-4 fix-box-height-2">
                            <div className="row">
                              <div className="col">
                                <h2 className="font-weight-bold text-color-white font-20">Crises Management</h2>
                                <div className="divider divider-small divider-small-center ">
                                    <hr className="border-white" />
                                </div>
                                <p className="safety-internal-content">SCD announces any impending crisis and uses Ma- zoon College facilities during the crisis. Approved company inspects all facilities and services and informs changes/replacements needed in the form of a report </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="featured-box featured-box-primary green-background">
                          <div className="box-content p-4 fix-box-height-2">
                            <div className="row">
                              <div className="col">
                                <h2 className="font-weight-bold text-color-white font-20">Record Keeping</h2>
                                <div className="divider divider-small divider-small-center ">
                                    <hr className="border-white" />
                                </div>
                                <p className="safety-internal-content">All accidents/injuries are recorded in “Incident Record Form” by the college nurse.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="alert-red">
                  <strong className="font-20"><i className="fas fa-exclamation-triangle"></i>Covid-19 Specific</strong>
                  <br />
                  <p className="color-red remove-bottom-padding">The college must provide the following:</p>
                  <ul className='color-red-ul'>
                      <li>High quality remote thermometer to measure the temperature of everyone entering campus</li>
                      <li>Liquid soap in all toilets, and alcoholic sanitizer with 70% alcohol concentration to be available across campus.</li>
                      <li>Face masks and gloves as needed</li>
                      <li>Tissues and all toilets and classrooms</li>
                      <li>Covered waste bins to be used as a standard</li>
                      <li>Floor cleaning supplies that adhere to certain specifications of containing alcohol to curb the spread of viruses.</li>
                      <li>Room to be specifically used as an isolation chamber</li>
                  </ul>
                </div>
              </div>
              {/* END */}
              {/* START */}
              <div className="tab-pane tab-pane-navigation" id="housing">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="internal-heading padding-top-20">
                      <h1>Housing</h1>
                    </div>
                    <div className="col-lg-12">
                      <img src="/assets/content/housing.jpg" className="img-fluid" width={1600} height={613} />
                    </div>
                    <ul className="margin-left-30 padding-top-20 accreditation">
                      <li>A comfortable and well lit environment for students to read and do their assignments.</li>
                      <li>Tidy beds with ample storage for clothing &amp; personal belongings.</li>
                      <li>A live-in nurse with several years of experience and available on call 24X7.</li>
                      <li>Washing machines and dryers are available for hygiene and convenience.</li>
                      <li>A large TV room with several local and foreign channels.</li>
                      <li>A resident Cafeteria that offers cuisine dishes from the Arab Orient.</li>
                      <li>Two custodians manage the building 24X7 and tend to student needs and welfare.</li>
                      <li>Refrigerators and water coolers are available on every floor and the refrigerators are periodically checked for perishables.</li>
                      <li>Hostel Students are allowed daily to access the labs and internet up to 8:00 PM, in order to do research and surf the internet.</li>
                      <li>Ordering out is an available option and one shopping trip is admitted per week</li>
                      <li>A non-smoking environment with frequent cleaning visits and rapid facility maintenance.</li>
                      <li>24×7 Security service, limiting access after business hours.</li>
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