import Head from 'next/head'
import React  from 'react';

export default function aptitude() {
  return (
    <div>
      <Head>
        <title>Scientific College of Design</title>
        <meta name="description" content="The hub of art and design in the Sultanate of Oman. We inspire our students&#039; imagination and we encourage them to express their perceptions and sprinkle their talents in all their endeavors. We specialize in teaching Interior Design, Architecture Design, Fashion and Graphic Design." />
        <meta name="keywords" content="" />
        <meta name="author" content="Scientific College of Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel="icon" href="assets/logo/n_fav_icon.png" />
        <link rel="stylesheet" href="assets/plugins/css/plugins.css" />
        <link href="css/style.css" rel="stylesheet" />
      </Head>
      
      <div className="wrapper"> 
        <nav className="navbar navbar-default navbar-fixed navbar-light white bootsnav">

          <div className="container">            
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
              <i className="fa fa-bars"></i>
            </button>
            <div className="navbar-header">
              <a className="navbar-brand" href="/placement">
                
                <img src="/assets/logo/logo.jpg" className="logo logo-scrolled" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li></li>
              </ul>
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><a href="/placement-test" className="signin">English</a></li>
                <li className="left-br"><a href="placement-test/arabic" className="signin">عربى</a></li>
              </ul>
            </div>
          </div>   
        </nav>
        <section className="inner-header-title" style={{backgroundImage:"url(assets/content/programs.jpg)"}}>
          <div className="container">
          </div>
        </section>
        <div className="clearfix"></div>
        <section className="detail-desc">
          <div className="container">
            <div className="ur-detail-wrap top-lay">
              <div className="ur-detail-box">
                <div className="ur-thumb">
                  <img src="assets/placement/placement.png" className="img-responsive" alt="" />
                </div>
                <div className="ur-caption">
                  <h4 className="ur-title">Placement Testing</h4>
                  <p className="ur-location"><i className="fas fa-user-graduate mrg-r-5"></i>Academic Year 2022-2023</p>
                  <p className="ur-location"><i className="fas fa-building mrg-r-5"></i>English Language, Basic Sciences and Humanities Department</p>
                  <p className="ur-location"><i className="ti-location-pin mrg-r-5"></i>Airport Heights – Matar Street</p>
                  <span className="ur-designation"><i className="ti-home mrg-r-5"></i>Scientific College of Design</span>
                </div>
                
              </div>
              <div className="ur-caption hidden-md hidden-sm hidden-xs" style={{width:"50%",marginRight:"22px",textAlign:"justify"}}>
                  <h4 className="ur-title">Introduction</h4>
                  <p className="ur-location">The Scientific College of Design (SCD) administers the multi-level Placement Test to all students enrolling in SCD to measure overall knowledge in English, math, and computing. The placement test results assign students to the appropriate level. These tests should be taken seriously as it ensures that students are placed in the right level to maximize student success.</p>
                </div>
              <div className="ur-detail-btn">
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px"}}><i className="fas fa-globe-asia mrg-r-5"></i>College Website</a><br />
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px"}}><i className="fab fa-facebook-square mrg-r-5"></i>Facebook</a><br />
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px"}}><i className="fab fa-instagram-square mrg-r-5"></i>Instagram</a><br />
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px"}}><i className="fab fa-youtube-square mrg-r-5"></i>Youtube</a><br />
              </div>
            </div>
          </div>
        </section>
        <div className="clearfix"></div>
        <section className="full-detail-description full-detail">
				<div className="container">
					<div className="row">
						
						<div className="col-lg-8 col-md-8">
							
							<div className="row-bottom hidden-lg hidden-xl hidden-xxl">
								<h2 className="detail-title " style={{fontSize:"18px !important"}}>Introduction</h2>
								<p>The Scientific College of Design (SCD) administers the multi-level Placement Test to all students enrolling in SCD to measure overall knowledge in English, math, and computing. The placement test results assign students to the appropriate level. These tests should be taken seriously as it ensures that students are placed in the right level to maximize student success.</p>
							</div>
							
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Test Administration Procedures and Instructions</h2>
								<ul className="detail-list" style={{marginLeft:"12px"}}>
                  <li>Students should be available in the college 15 minutes prior to the commencement of the test to collect their Placement Test entry requirements from the Admission and Registration department.</li>
                  <li>Students should bring their national Identity Cards to be allowed to take the placement test.</li>
                  <li>Placement Tests are delivered on campus as computer-based test with the exception of the writing component which is paper-based. </li>
								</ul>
							</div>
							
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Composition of the Placement Tests</h2>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td><b>Skill</b></td>
                      <td><b>Total Questions</b></td>
                      <td><b>Mark</b></td>
                      <td><b>Duration</b></td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td style={{textAlign:"center",backgroundColor:"#ccc"}} colSpan={4}><b>English</b></td>
                    </tr>
                    <tr>
                      <td>Use of English</td>
                      <td>36</td>
                      <td>45 marks</td>
                      <td rowSpan={2}>30 minutes</td>
                    </tr>
                    <tr>
                      <td>Listening</td>
                      <td>12</td>
                      <td>15 marks</td>
                    </tr>
                    <tr>
                      <td>Reading</td>
                      <td>12</td>
                      <td>15 marks</td>
                    </tr>
                    <tr>
                      <td>Writing </td>
                      <td>1</td>
                      <td>25 marks</td>
                      <td>30 minutes</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"#ccc"}}><b>English Language</b> </td>
                      <td>61</td>
                      <td>100 marks</td>
                      <td>60 minutes</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"#ccc"}}><b>Math</b> </td>
                      <td>25</td>
                      <td>100 marks</td>
                      <td>30 minutes</td>
                    </tr>
                    <tr>
                      <td style={{backgroundColor:"#ccc"}}><b>Computing</b> </td>
                      <td>50</td>
                      <td>100 marks</td>
                      <td>30 minutes</td>
                    </tr>
                  </tbody>
                </table>
							</div>

              <div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Scoring</h2>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td colSpan={3} style={{textAlign:"center"}}><b>English</b></td>
                      <td colSpan={2} style={{textAlign:"center"}}><b>Math and Computing</b></td>
                    </tr>
                    <tr>
                      <td>Level</td>
                      <td>Score</td>
                      <td>CEFR<sup>*</sup> Level</td>
                      <td>Level</td>
                      <td>Score</td>
                    </tr>
                    <tr>
                      <td>GFP01</td>
                      <td>0-20</td>
                      <td>A1</td>
                      <td>GFP02</td>
                      <td>0-60</td>
                    </tr>
                    <tr>
                      <td>GFP02</td>
                      <td>21-40</td>
                      <td>A2</td>
                      <td>GFP03</td>
                      <td>61 - 79</td>
                    </tr>
                    <tr>
                      <td>GFP03</td>
                      <td>41-66</td>
                      <td>B1</td>
                      <td>Exempted</td>
                      <td>80 and above</td>
                    </tr>
                    <tr>
                      <td>Exempted</td>
                      <td>Total score must be 67% or higher with a minimum score of 60% in each component.</td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <p><sup>*</sup>Common European Framework of Reference for Languages </p>
							</div>
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Results</h2>
                <p>The results of the placement test will be announced by the Admission and Registration department within a week after taking the test.</p>
              </div>
						</div>
						
						<div className="col-lg-4 col-md-4">
							<div className="full-sidebar-wrap">															
							
								<div className="sidebar-widgets">
								
									<div className="ur-detail-wrap">
										<div className="ur-detail-wrap-header">
											<h4>Requirements</h4>
										</div>
										<div className="ur-detail-wrap-body">
											<ul className="simple-list-sshare">
												<li>Be present in person 30 minutes prior to the exam</li>
                        <li>Be present 15 minutes prior to the exam</li>
                        <li>You must adhere to precautionary measures and wear a mask</li>
											</ul>
										</div>
									</div>
									
								</div>

								<div className="sidebar-widgets">
								
									<div className="ur-detail-wrap">
										<div className="ur-detail-wrap-header">
											<h4>Contact Details</h4>
										</div>
										<div className="ur-detail-wrap-body">
											<div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-4">
                          <b>Name</b>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xs-4">
                          <b>Email</b>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xs-4">
                          <b>Phone</b>
                        </div>
                        <div className="col-lg-4 col-md-4 col-xs-4">Mrs. Amani Al-Jabri</div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="mailto:amanialjabri@scd.edu.om">amanialjabri @scd.edu.om</a></div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="tel:+96824513251">24513251</a></div>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-4">Ms. Shams Al-Riyami</div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="mailto:Shams@scd.edu.om">Shams @scd.edu.om</a></div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="tel:+96824513233">24513233</a></div>

                      </div>
                      {/* <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-4">Mr. Basil Al-Lamki</div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="mailto:b.allamki@scd.edu.om">b.allamki @scd.edu.om</a></div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="tel:+96824513252">24513252</a></div>

                      </div> */}
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-4">Admission and registration mobile </div>
                        <div className="col-lg-4 col-md-4 col-xs-4">-</div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="tel:+96896707755">96707755</a></div>
                      </div>
										</div>
									</div>
								</div>							
							</div>
						</div>
					
					</div>
				</div>
			</section>
      </div>
      <script type="text/javascript" src="assets/plugins/js/jquery.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/viewportchecker.js"></script>
			<script type="text/javascript" src="assets/plugins/js/bootstrap.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/bootsnav.js"></script>
			<script type="text/javascript" src="assets/plugins/js/select2.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/wysihtml5-0.3.0.js"></script>
			<script type="text/javascript" src="assets/plugins/js/bootstrap-wysihtml5.js"></script>
			<script type="text/javascript" src="assets/plugins/js/datedropper.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/dropzone.js"></script>
			<script type="text/javascript" src="assets/plugins/js/loader.js"></script>
			<script type="text/javascript" src="assets/plugins/js/owl.carousel.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/slick.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/gmap3.min.js"></script>
			<script type="text/javascript" src="assets/plugins/js/jquery.easy-autocomplete.min.js"></script>
      <script type="text/javascript" src="assets/plugins/js/counterup.min.js"></script>
    </div>
  )
}
