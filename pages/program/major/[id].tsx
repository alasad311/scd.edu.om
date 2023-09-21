import converter from 'number-to-words'
import Head from 'next/head'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../../components/header'
import Footer from '../../../components/footer'

export default function programsDetailsPage({otherapp,programDetails,programYerCounter,programPlan,courseDesc,artwork,hod,staff,requirement,fees,totalFees}) {
    var nf = new Intl.NumberFormat();

    return (
        <div>
          <Head>
            <title>Scientific College of Design</title>
            <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
            <meta name="keywords" content="" />
            <meta name="author" content="Scientific College of Design" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="assets/logo/n_fav_icon.png" />
            <link rel="stylesheet" href="../../js/owl.carousel/dist/assets/owl.carousel.min.css" />
            <link rel="stylesheet" href="../../css/spidoche/Spidoche.minimal.css"></link>
          </Head>
          <Header active="programsinternal" otherapp={otherapp} />
          <section className="section margin-bottom-0">
            <div className="container-fluid">
              <div id="final-step">
                <div className="row">
                  <div className="col-lg-3">
                    <aside className="sidebar" id="sidebar" data-plugin-sticky data-plugin-options="{'minWidth': 991, 'containerSelector': '.container', 'padding': {'top': 110}}">
                    {programDetails &&
                      <div className="tabs tabs-vertical tabs-left tabs-navigation">
                        {programDetails[0]['major_level'] === "MA" &&
                          <ul className="nav nav-tabs col-sm-3">
                            <li className="nav-item displaynon" >
                                <a className="nav-link active" href="#generaloverview" data-bs-toggle="tab">General overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#courseplan" data-bs-toggle="tab">Course Plan</a>
                            </li>
                            <li  className="nav-item displaynon">
                                  <a className="nav-link" href="#studentartwork" data-bs-toggle="tab">Student artwork</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#deptFaculty" data-bs-toggle="tab">Department Faculty</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#requirements" data-bs-toggle="tab">Requirement</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="#fees" data-bs-toggle="tab">Fees</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apply.scd.edu.om" >Apply</a>
                            </li>
                          </ul>
                        }
                        {programDetails[0]['major_level'] === "BA" &&
                          <ul className="nav nav-tabs col-sm-3">
                            <li className="nav-item" >
                                <a className="nav-link active" href="#generaloverview" data-bs-toggle="tab">General overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#courseplan" data-bs-toggle="tab">Course Plan</a>
                            </li>
                            {programDetails[0]['major_name'] != "General Foundation Program" &&
                            <li  className="nav-item d-none d-lg-block d-xl-block">
                                <a className="nav-link" href="#studentartwork" data-bs-toggle="tab">Student artwork</a>
                            </li> }
                            {programDetails[0]['major_name'] != "General Foundation Program" &&
                            <li className="nav-item">
                                <a className="nav-link" href="#studentaction" data-bs-toggle="tab">Students In Action</a>
                            </li>}
                            {programDetails[0]['major_name'] === "General Foundation Program" &&
                            <li className="nav-item">
                                <a className="nav-link" href="#placementtest" data-bs-toggle="tab">Placement Test</a>
                            </li>}
                            <li className="nav-item">
                                <a className="nav-link" href="#deptFaculty" data-bs-toggle="tab">Department Faculty</a>
                            </li>
                            <li className={programDetails[0]['id'] === 23 ||  programDetails[0]['id'] === 18 ? "nav-item displaynon" : "nav-item"}>
                                <a className="nav-link" href="#requirements" data-bs-toggle="tab">Requirement</a>
                            </li>
                            {programDetails[0]['major_name'] != "General Foundation Program" &&
                            <li className={programDetails[0]['id'] === 18 ? "nav-item displaynon" : "nav-item"}>
                                <a className="nav-link" href="#fees" data-bs-toggle="tab">Fees</a>
                            </li>}
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.apply.scd.edu.om" >Apply</a>
                            </li>
                          </ul>
                        }
                        {!programDetails[0]['major_level'] &&
                          <ul className="nav nav-tabs col-sm-3">
                            <li className="nav-item" >
                                <a className="nav-link active" href="#generaloverview" data-bs-toggle="tab">General overview</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#courseplan" data-bs-toggle="tab">Courses</a>
                            </li>
                           
                          </ul>
                        }
                      </div>
                       }
                    </aside>
                  </div>
                  <div className="col-lg-9">
                   
                      {programDetails &&
                      <div className={programDetails[0]['major_level'] === "MA" ? "tab-pane tab-pane-navigation displaynon" : "tab-pane tab-pane-navigation active"} id="generaloverview">
                        <div className= {programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "row directionrtl" : "row"}>
                          <div className="col-lg-12">
                            <img src={"/assets/content/overview.jpg"} width={1600} height={400} className="img-fluid padding-bottom-50" />
                            <div className="row padding-bottom-20"  >
                              {programDetails[0]['md_duration'] &&
                                <div className="col-lg-2">
                                  <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" style={{height:"95px"}}>
                                      <h4  className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-title mb-1 text-4 font-weight-bold text-light arabic-font" : "card-title mb-1 text-4 font-weight-bold text-light"}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "مدة اﻟﺒﺮﻧﺎﻣﺞ " : "Duration"}</h4>
                                      <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-text text-light font-size-18 arabic-font" : "card-text text-light font-size-18"}>{programDetails[0]['md_duration']}</p>
                                    </div>
                                  </div>
                                </div>
                              }
                              {programDetails[0]['md_moi'] &&
                                <div className="col-lg-3">
                                  <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" style={{height:"95px"}}>
                                      <h4 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-title mb-1 text-4 font-weight-bold text-light arabic-font" : "card-title mb-1 text-4 font-weight-bold text-light"}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "ﻟﻐﺔ اﻟﺪراﺳﺔ " : "Medium of instruction"}</h4>
                                      <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-text text-light font-size-18 arabic-font" : "card-text text-light font-size-18"}>{programDetails[0]['md_moi']}</p>
                                    </div>
                                  </div>
                                </div>
                              } 
                              {programDetails[0]['md_degree'] &&
                                <div className="col-lg-3">
                                  <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" style={{height:"95px"}}>
                                      <h4 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-title mb-1 text-4 font-weight-bold text-light arabic-font" : "card-title mb-1 text-4 font-weight-bold text-light"}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? " ﺟﻬﺔ ﻣﻨﺢ اﻟﺪرﺟﺔ " : "Degree awarding body"}</h4>
                                      <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-text text-light font-size-18 arabic-font" : "card-text text-light font-size-18"}>{programDetails[0]['md_degree']}</p>
                                    </div>
                                  </div>
                                </div>
                              } 
                               {programDetails[0]['major_level'] &&
                                <div className="col-lg-4">
                                  <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" style={{height:"95px"}}>
                                      <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "card-text text-light font-size-18 arabic-font" : "card-text text-light font-size-18"} dangerouslySetInnerHTML={{__html:programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "ﻣﻌﺘﻤﺪة ﻣﻦ اﻟﻬﻴﺌﺔ اﻟﻌﻤﺎﻧﻴﺔ ﻟﻼﻋﺘﻤﺎد اﻻﻛﺎدﻳﻤﻲ " : 'Institutionally Accredited by <a class="font-size-18" href="http://www.oaaa.gov.om/ar/Default.aspx">OAAAQA</a> & Overseen by the <a  class="font-size-18" href="https://www.moheri.gov.om">MOHERI</a> in the Sultanate of Oman'}}>
                                        </p>
                                    </div>
                                  </div>
                                </div>
                                }
                            </div>
                            {programDetails[0]['md_mission'] &&
                              <div className="row">
                                <div className='col-lg-12 grey-box'>
                                  {!programDetails[0]['major_level'] &&
                                  <h3 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "grey-box-title arabic-font" : "grey-box-title"}>Training Unit Mission</h3>
                                  }
                                  {programDetails[0]['major_level'] &&
                                  <h3 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "grey-box-title arabic-font" : "grey-box-title"}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "رسالة البرنامج " : "Program Mission"}</h3>
                                  }
                                  <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"}>{programDetails[0]['md_mission']}</p>
                                </div>
                              </div>
                            } 
                            {programDetails[0]['md_description'] &&
                            <span>
                              <div className="internal-heading padding-top-20">
                                {!programDetails[0]['major_level'] &&
                                <h3 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "grey-box-title arabic-font" : "grey-box-title"}>Course Description</h3>
                                }
                                {programDetails[0]['major_level'] &&
                                <h3 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "grey-box-title arabic-font" : "grey-box-title"}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "وصف  البرنامج " : "Program Description"}</h3>
                                }
                              </div>
                              <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"}>{programDetails[0]['md_description']}</p>
                            </span>
                            } 
                            {programDetails[0]['md_objective'] &&
                            <span>
                              <div className="internal-heading padding-top-20">
                              {!programDetails[0]['major_level'] &&
                                <h3 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "grey-box-title arabic-font" : "grey-box-title"}>Training Unit Objectives</h3>
                                }
                                {programDetails[0]['major_level'] &&
                                <h3 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "grey-box-title arabic-font" : "grey-box-title"}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "اهداف  البرنامج " : "Program Objectives"}</h3>
                                }
                              </div>
                              <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"} dangerouslySetInnerHTML={{__html:programDetails[0]['md_objective']}}></div>
                            </span>
                            } 
                              {programDetails[0]['md_outcome'] &&
                            <span>
                              <div className="internal-heading padding-top-20">
                                <h1 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "arabic-font" : ""}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "مخرجات البرنامج  " : "Program Learning Outcomes"}</h1>
                              </div>
                              <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"} dangerouslySetInnerHTML={{__html:programDetails[0]['md_outcome']}}></div>
                            </span>
                            }
                            {programDetails[0]['md_career'] &&
                            <span>
                              <div className="internal-heading padding-top-20">
                                <h1 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "arabic-font" : ""}>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "فرص العمل   " : "Career Opportunities"}</h1>
                              </div>
                              <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"} dangerouslySetInnerHTML={{__html:programDetails[0]['md_career']}}></div>
                            </span>
                            }
                            {programDetails[0]['major_name'] === "General Foundation Program" &&
                            <span>
                              <div className="internal-heading padding-top-20">
                                <h1>Exit Exam</h1>
                              </div>
                              <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"}>
                              An exit exam is conducted for all GFP3 students by the end of each and every semester. This is to make sure that the GFP requirements and academic standards are successfully met.
                                </p>
                            </span>
                            } 
                            {programDetails[0]['major_name'] === "General Foundation Program" &&
                            <span>
                              <div className="internal-heading padding-top-20">
                                <h1>Certificates of Attainment</h1>
                              </div>
                              <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"}>
                              A GFP student is not eligible to get a certificate of GFP completion unless he/she fulfills all GFP requirements; that is, passing all GFP courses including Math and IT.
                                </p>
                            </span>
                            } 
                            {programDetails[0]['major_name'] === "General Foundation Program" &&
                            <span>
                              <div className="internal-heading padding-top-20">
                                <h1>GFP Club</h1>
                              </div>
                              <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-content-text program-ul-ar remove-top-padding arabic-font" : "internal-content-text program-ul remove-top-padding"}>
                              This club provides a good opportunity for students to use English language in a friendly and comfortable setting outside their classroom. It gives participants the opportunity to take part in many co/extra-curricular activities at their own convenience and choice.
                                </p>
                            </span>
                            } 
                          </div>
                        </div>
                      </div>
                      } 
                      {programYerCounter &&
                      <div className={programDetails[0]['major_level'] === "MA" ? "tab-pane tab-pane-navigation active" : "tab-pane tab-pane-navigation"} id="courseplan">
                        {programYerCounter[0]['pp_year'] !== 0 &&
                        <div className= {programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "row process directionrtl arabic-font" : "row process"}>
                          {
                            programYerCounter.map((e) => (
                              <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "process-step-ara col-md-6 col-lg-2 mb-5 mb-md-4 appear-animation" : "process-step col-md-6 col-lg-2 mb-5 mb-md-4 appear-animation"}  data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
                                <div className="process-step-circle" style={{cursor:"pointer"}} id={converter.toWordsOrdinal(e.pp_year)+"Year"}>
                                  <strong className="process-step-circle-content" dangerouslySetInnerHTML={{__html:programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? " السنة" + "<br /> "+e.pp_year : converter.toWordsOrdinal(e.pp_year)+" <br /> Year"}}>
                                    
                                    </strong>
                                </div>
                               <div className="mb-0 d-block d-md-block d-lg-none">
                                  <div className="row mobile-box-grey text-font" id="mfirstYear">
                                    <div className="col-lg-6">
                                      <h5><b>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "الفصل الدراسي 1" : "Semester 1"}</b></h5>
                                      {programPlan &&
                                        programPlan.map((b) => {
                                          if(e.pp_year === b.pp_year && b.pp_sem === 1)
                                            return <div className="row">
                                                      <div style={{width:"20%"}}>
                                                          <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_code}</p>
                                                      </div>
                                                      <div style={{width:"70%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_name}</p>
                                                      </div>
                                                      <div style={{width:"10%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_credit_hours}</p>
                                                      </div>
                                                  </div>
                                        })}
                                    </div>
                                    <div className="col-lg-6 padding-top-20">
                                      <h5><b>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "الفصل الدراسي 2" : "Semester 2"}</b></h5>
                                      {programPlan &&
                                        programPlan.map((b) => {
                                          if(e.pp_year === b.pp_year && b.pp_sem === 2)
                                            return <div className="row">
                                                     <div style={{width:"20%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_code}</p>
                                                      </div>
                                                      <div style={{width:"70%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_name}</p>
                                                      </div>
                                                      <div style={{width:"10%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_credit_hours}</p>
                                                      </div>
                                                  </div>
                                        })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
    
                        </div>
                        }
                        {programYerCounter[0]['pp_year'] !== 0 &&
                        <div className= {programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "row padding-bottom-20 directionrtl" : "row padding-bottom-20"}>
                        {programYerCounter &&
                          <div className="col-lg-12 d-none d-lg-block d-xl-block course-green-box">
                            {programYerCounter.map((e) => (
                              
                              <div className={e.pp_year=== 1 ? converter.toWordsOrdinal(e.pp_year)+ (programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "YearArrowara row semdata" : "YearArrow row semdata"): converter.toWordsOrdinal(e.pp_year)+ (programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "YearArrowara row semdata displaynone" : "YearArrow row semdata displaynone")} id={converter.toWordsOrdinal(e.pp_year)+"YearTab"}>
                                <div className="col-lg-6">
                                  <h5><b>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "الفصل الدراسي 1" : "Semester 1"}</b></h5>
                                  {programPlan &&
                                  programPlan.map((b) => {
                                    if(e.pp_year === b.pp_year && b.pp_sem === 1)
                                      return <div className="row">
                                                <div className="col-lg-3">
                                                    <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_code}</p>
                                                </div>
                                                <div className="col-lg-7">
                                                  <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_name}</p>
                                                </div>
                                                <div className="col-lg-2">
                                                  <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_credit_hours}</p>
                                                </div>
                                            </div>
                                  })}
                                </div>
                                <div className="col-lg-6">
                                      <h5><b>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "الفصل الدراسي 2" : "Semester 2"}</b></h5>
                                      {programPlan &&
                                        programPlan.map((b) => {
                                          if(e.pp_year === b.pp_year && b.pp_sem === 2)
                                            return <div className="row">
                                                     <div className="col-lg-3">
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_code}</p>
                                                      </div>
                                                      <div className="col-lg-7">
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_name}</p>
                                                      </div>
                                                      <div className="col-lg-2">
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_credit_hours}</p>
                                                      </div>
                                                  </div>
                                        })}
                                    </div>
                                    {programDetails[0]['id'] === 28 &&
                                    <div className="col-lg-6 padding-top-20">
                                      <h5><b>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "الفصل الدراسي 3" : "Semester 3"}</b></h5>
                                      {programPlan &&
                                        programPlan.map((b) => {
                                          if(e.pp_year === b.pp_year && b.pp_sem === 3)
                                            return <div className="row">
                                                     <div style={{width:"20%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_code}</p>
                                                      </div>
                                                      <div style={{width:"70%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_course_name}</p>
                                                      </div>
                                                      <div style={{width:"10%"}}>
                                                        <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mobile-box-texta arabic-font" : "mobile-box-text text-font"}>{b.pp_credit_hours}</p>
                                                      </div>
                                                  </div>
                                        })}
                                    </div>
                                    }
                              </div>
                              ))}
                          </div>
                        }
                        </div>
                        }
                        <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "row directionrtl" : "row"}>
                          <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "internal-heading padding-top-20 arabic-font" : "internal-heading padding-top-20"}>
                            {programDetails[0]['id'] !== 28 &&
                              <h1>{programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "تفاصيل المواد " : "Course Details"}</h1>
                            }
                          </div>
                          {courseDesc &&
                            <div className="accordion accordion-wrapper" id="accordionPrimary">
                              <div className="row">
                                {
                                  courseDesc.map((b) => {
                                        return <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "ara col-lg-6" : "cardz col-lg-6"}>
                                            <div className="card-header" id={"ch"+b.pp_id}>
                                              <h5 className="mb-0">
                                              <a className="collapsed" role="button" data-bs-toggle="collapse" data-bs-target={"#c"+b.pp_id}
                                                  aria-expanded="false" aria-controls={"c"+b.pp_id}>
                                                  {b.pp_course_code} {b.pp_course_name}
                                              </a>
                                              </h5>
                                            </div>
                                            <div id={"c"+b.pp_id} className="collapse" aria-labelledby={"ch"+b.pp_id} data-bs-parent="#accordionPrimary">
                                              <div className="cardz-body">
                                                {b.pp_course_description}
                                              </div>
                                            </div>
                                          </div>
                                  })}
                              </div>
                            </div>
                          }
                        </div>
                      </div>
                      }
                      <div className="tab-pane tab-pane-navigation" id="studentartwork">
                        <div className="row">
                        {artwork &&
                          <div className="col-lg-12 padding-bottom-50">
                            <div className="owl-carousel" style={{height:'500px'}}>
                              {
                                artwork.map((b) => {
                                  return <div >
                                          <img src={"/assets/studentartwork/"+b.pa_image} className="img-fluid" />
                                          <div className="col-lg-12 student-artwork">
                                              Student Name : {b.pa_student_name}
                                          </div>
                                        </div>
                                })}
                            </div>
                          </div>
                        }
                      </div>
                    </div>
                    <div className="tab-pane tab-pane-navigation" id="studentaction">
                      <div id="youtube"></div> 
                    </div>
                    {programDetails[0]['major_name'] === "General Foundation Program" &&
                      <div  className=" tab-pane tab-pane-navigation" id="placementtest">
                          <div className="internal-heading padding-top-20">
                            <h1>Purpose of Placement Test</h1>
                          </div>
                          <p className='internal-content-text program-ul remove-top-padding'>Students who apply to study in Scientific College of Design should take placement tests in English Language, Math and Computing. They are used as indicators of a student’s current competence of English Language, Math and Computing and help in placing students into appropriate levels in the General Foundation Program.</p>
                          <div className="internal-heading padding-top-20">
                            <h1>Test Administration</h1>
                          </div>
                          <div className='internal-content-text program-ul remove-top-padding'>
                              <ol>
                                <li>Placement Tests at SCD are conducted on campus, so students should be available in the college 15 minutes prior to the commencement of the test to collect their Placement Test entry tickets, pass words, and the test instructions from the Admission Office.</li>
                                <li>Students should bring their Identity Cards to be allowed to take the placement test.</li>
                                <li>The results of the placement test are announced by the Admission Office within two working days at the latest.</li>
                              </ol>
                          </div>
                          <div className="internal-heading padding-top-20">
                            <h1>Composition of the Placement Tests</h1>
                          </div>
                          <table className='table table-striped'>
                            <tbody>
                              <tr>
                                <th>
                                <strong>Component</strong>
                                </th>
                                <th>
                                <strong>Questions</strong>
                                </th>
                                <th>
                                <strong>Mark</strong>
                                </th>
                                <th>
                                <strong>Duration</strong>
                                </th>
                              </tr>
                              <tr>
                                <td>
                                <strong>A. </strong><strong>English Language</strong>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                                <td>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <strong>Listening</strong>
                                </td>
                                <td>
                                50
                                </td>
                                <td>
                                100
                                </td>
                                <td>
                                30 minutes
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <strong>Reading</strong>
                                </td>
                                <td>
                                50
                                </td>
                                <td>
                                100
                                </td>
                                <td>
                                55 minutes
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <strong>Grammar</strong>
                                </td>
                                <td>
                                70
                                </td>
                                <td>
                                70
                                </td>
                                <td>
                                35 minutes
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <strong>Writing</strong>
                                </td>
                                <td>
                                31
                                </td>
                                <td>
                                100
                                </td>
                                <td>
                                [Objective/20 minutes + Essay writing/40 minutes]=60 minutes
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <strong>B. </strong><strong>Math</strong>
                                </td>
                                <td>
                                25
                                </td>
                                <td>
                                100
                                </td>
                                <td>
                                30 minutes
                                </td>
                              </tr>
                              <tr>
                                <td>
                                <strong>C. </strong><strong>Computing</strong>
                                </td>
                                <td>
                                50
                                </td>
                                <td>
                                100
                                </td>
                                <td>
                                30 minutes
                                </td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    }
                    {programDetails &&
                    <div  className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "tab-pane tab-pane-navigation directionrtl" : " tab-pane tab-pane-navigation"} id="deptFaculty">
                    {hod &&
                    <span>
                      <div className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "directionrtl internal-heading padding-top-20 arabic-font" : "internal-heading padding-top-20"}>
                        <h1>{hod[0]['staff_title']}</h1>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 fluid-col-lg-4 col-mb-4" >
                            <div className="fluid-col">
                                <img src={"/assets/employees/"+hod[0]['staff_image']} width={400} height={400} className="img-fluid cardImg padding-bottom-20" />
                            </div>
                        </div>
                          <div className="col-lg-8">
                            <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "dean-content-text remove-top-padding arabic-font" : "dean-content-text remove-top-padding"}>{hod[0]['hod_message']}</p>
                                <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "dean-content-text dean-name-text remove-top-padding arabic-font" : "dean-content-text dean-name-text remove-top-padding"}>{hod[0]['staff_name']}, <br /> {hod[0]['staff_title']} <br />Scientific College of Design</p>
                          </div>
                      </div>
                    </span>
                    }
                    {staff &&
                    <div className="row">
                      {staff.map((e) => (
                        <div className="col-md-6 col-lg-3" key={e.staff_id}>
                          <div className="staff-member my-md-3 my-lg-3 my-sm-0">
                            <div className="cards text-center">
                              <img src={`/assets/employees/`+e.staff_image} style={{width:"150px"}} className="cardImg img-fluid m-auto pt-4" />
                              <div className="cardz-body">
                                <h5 className="teacher mb-0">{e.staff_name}</h5>
                                <span>{e.staff_title}</span>
                                <p className="teacher-quote pt-3">{e.dept_name}</p>
                                <ul className="list-inline pt-2 social">
                                  <li className="list-inline-item"><a href={`mailto:`+e.staff_email} target="_blank"><span className="fas fa-envelope"></span></a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    }
                  </div>}
                    <div className="tab-pane tab-pane-navigation" id="requirements">
                      <div className="row padding-bottom-50">
                        <div className="col-lg-12">
                            <img src={"/assets/content/requirement.jpg"} width={1600} height={400} className="img-fluid" />
                        </div>
                      </div>
                        {requirement &&
                          <div className="row">
                             {requirement.map((e) => (
                                <div className="col-lg-12">
                                  <div className="card border-0 border-radius-0 bg-color-primary">
                                      <div className="card-body card-body-issue" style={{height:"110px"}} >
                                          <p className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "text-light font-size-18 arabic-font" : "text-light font-size-18"}>
                                            <h1 className={programDetails[0]['id'] === 23 || programDetails[0]['id'] === 18 ? "mb-1 text-4 font-weight-bold text-light arabic-font padding-right-10" : "mb-1 text-4 font-weight-bold text-light padding-right-10"} style={{display:"inline"}}>
                                              {e.rq_num}
                                            </h1>
                                              {e.rq_description}
                                          </p>
                                      </div>
                                  </div>
                              </div>
                             ))}
                          </div>
                        }
                    </div>
                    <div className="tab-pane tab-pane-navigation" id="fees">
                        {hod &&
                          <div className="row">
                              <h1 className="col-lg-12 program-box-fees">{hod[0]['major_name']}</h1>
                          </div>
                        }
                        <div className="internal-heading padding-top-20">
                          <h1>Tuition Fees</h1>
                        </div>
                        {fees &&
                          <table className='table table-striped'>
                            <tbody>
                              <tr>
                                <th></th>
                                <th>Duration</th>
                                <th>Credit Hours</th>
                                <th>Fees</th>
                                <th>Other Fees</th>
                                <th>Sub Total</th>
                              </tr>
                              {fees.map((e) => (
                                <tr>
                                  
                                  <td><b>{e.pf_name}</b></td>
                                  <td>{e.pf_duration} Semesters</td>
                                  <td>{e.pf_credit}</td>
                                  <td>{e.pf_fees}</td>
                                  <td>{e.pf_otherfees}</td>
                                  <td>{nf.format(Number(e.pf_fees.replace(/\D/g,'')) + Number(e.pf_otherfees.replace(/\D/g,'')))} OMR</td>
                                </tr>
    
                              ))}
                              {totalFees &&
                                <tr>
                                    <td colSpan={5} style={{textAlign:"right"}}>Grand Total</td>
                                    <td>{nf.format(totalFees[0]['TOTAL'])} OMR</td>
                                </tr>
                                }
                            </tbody>
                          </table>
                        }
                            
                        <p  className="ps">* Fees / tuitions are subject to changed accoridng to the college financial polcies / procedures and upon MoHERI approval</p>
                        <div className="internal-heading padding-top-20">
                          <h1>Finance Details</h1>
                        </div>
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" >
                                        <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Oman Arab Bank</h4>
                                        <p className="card-text financial-text text-light" >
                                            3128231666500
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" >
                                        <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Bank Muscat</h4>
                                        <p className="card-text financial-text text-light" >
                                            0313029205120016
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" >
                                        <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Email</h4>
                                        <p className="card-text financial-text text-light" >
                                            <a href="mailto:finance@scd.edu.om" className="financial-text" >finance@scd.edu.om</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="card border-0 border-radius-0 bg-color-primary">
                                    <div className="card-body" >
                                        <h4 className="card-title mb-1 text-4 font-weight-bold text-light">Phone</h4>
                                        <p className="card-text financial-text text-light" >
                                            <a href="tel:0096824513254" className="financial-text">+968 24513254</a>,<a href="tel:0096824513214" className="financial-text">+968 24513214</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="ps">*All payment are accepted through bank deposit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          <Footer />
          <Script strategy="lazyOnload" src="../../js/jquery/jquery-3.6.0.min.js"/>
            <Script strategy="lazyOnload" src="../../js/bootstrap/bootstrap.bundle.js"/>
            <Script strategy="lazyOnload" type="text/javascript" src="../../js/owl.carousel/dist/owl.carousel.min.js"/>
            <Script strategy="lazyOnload" src="../../js/spidoche/jquery.spidochetube.min.js"/>
            <Script strategy="lazyOnload" type="text/javascript" src="../../js/programs.js"/>
            <Script strategy="lazyOnload" type="text/javascript" src="../../js/courses.js"/>
            <Script strategy="lazyOnload" type="text/javascript" src="../../js/artwork.js"/>
            <Script strategy="lazyOnload" type="text/javascript" src="../../js/studnetVideo.js"/>
            <Script src="../../js/custom.js" strategy="lazyOnload"/>
        </div>
      )
    }
// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.
export async function getServerSideProps (context) {
    const { id } = context.query;
    let majordetailsjsondata = null
    let majoryearcounter = null
    let majorplan = null
    let coursedec = null
    let artw = null
    let hod = null
    let staff = null
    let requirement = null
    let fees = null
    let finalfee = null
      const mrequest = await fetch(`https://scd.edu.om/api/program-major-details?id=${id}`);
      majordetailsjsondata = await mrequest.json();
  
      const planyrequest = await fetch(`https://scd.edu.om/api/program-plan-year?id=${majordetailsjsondata[0]['md_id']}`);
      majoryearcounter = await planyrequest.json();
  
      const plan = await fetch(`https://scd.edu.om/api/program-plan?id=${majordetailsjsondata[0]['md_id']}`);
      majorplan = await plan.json();
  
      const courserequest = await fetch(`https://scd.edu.om/api/course-description?id=${majordetailsjsondata[0]['md_id']}`);
      coursedec = await courserequest.json();
  
      const artrequest = await fetch(`https://scd.edu.om/api/program-artwork?id=${majordetailsjsondata[0]['md_id']}`);
      artw = await artrequest.json();
      
      const hodreq = await fetch(`https://scd.edu.om/api/hod-dpt?id=${id}`);
      hod = await hodreq.json();
  
      const staffreq = await fetch(`https://scd.edu.om/api/staff-dpt?id=${id}`);
      staff = await staffreq.json();
      
      const reqirementreq = await fetch(`https://scd.edu.om/api/criteria?id=${majordetailsjsondata[0]['md_id']}`);
      requirement = await reqirementreq.json();
  
      const feesreq = await fetch(`https://scd.edu.om/api/fees?id=${majordetailsjsondata[0]['md_id']}`);
      fees = await feesreq.json();
  
      const finalfeereq = await fetch(`https://scd.edu.om/api/totalfees?id=${majordetailsjsondata[0]['md_id']}`);
      finalfee = await finalfeereq.json();
  
      const ress = await fetch('https://scd.edu.om/api/otherapps')
      const otherapp = await ress.json()
    
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        programDetails: majordetailsjsondata,
        programYerCounter: majoryearcounter,
        programPlan: majorplan,
        courseDesc: coursedec,
        artwork: artw,
        hod:hod,
        staff:staff,
        requirement:requirement,
        fees:fees,
        totalFees: finalfee,
        otherapps: otherapp
      },
    }
  }

