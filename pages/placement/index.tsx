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
                <li><a href="/placement" className="signin">English</a></li>
                <li className="left-br"><a href="placement/arabic" className="signin">عربى</a></li>
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
                  <p className="ur-location"><i className="fas fa-user-graduate mrg-r-5"></i>Academic Year 2020-2021</p>
                  <p className="ur-location"><i className="fas fa-building mrg-r-5"></i>English Language, Basic Sciences and Humanities Department</p>
                  <p className="ur-location"><i className="ti-location-pin mrg-r-5"></i>Airport Heights – Matar Street</p>
                  <span className="ur-designation"><i className="ti-home mrg-r-5"></i>Scientific College of Design</span>
                </div>
                
              </div>
              <div className="ur-caption hidden-md hidden-sm hidden-xs" style={{width:"50%;",marginRight:"22px",textAlign:"justify"}}>
                  <h4 className="ur-title">Purpose of Placement Test</h4>
                  <p className="ur-location">Students who apply to study in Scientific College of Design should take placement tests in English Language, Math and Computing. Although placement tests are not “Pass” or “Fail” tests, they are used as indicators of a student’s current competence of English Language, Math and Computing. They help in placing students into appropriate levels in the General Foundation Program as per the given criteria.  </p>
                </div>
              <div className="ur-detail-btn">
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px;"}}><i className="fas fa-globe-asia mrg-r-5"></i>College Website</a><br />
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px;"}}><i className="fab fa-facebook-square mrg-r-5"></i>Facebook</a><br />
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px;"}}><i className="fab fa-instagram-square mrg-r-5"></i>Instagram</a><br />
                <a href="https://www.scd.edu.om" className="btn  mrg-bot-10 full-width" style={{fontSize:"14px;"}}><i className="fab fa-youtube-square mrg-r-5"></i>Youtube</a><br />
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
								<h2 className="detail-title " style={{fontSize:"18px !important"}}> Purpose of Placement Test</h2>
								<p>Students who apply to study in Scientific College of Design should take placement tests in English Language, Math and Computing. Although placement tests are not “Pass” or “Fail” tests, they are used as indicators of a student’s current competence of English Language, Math and Computing. They help in placing students into appropriate levels in the General Foundation Program as per the given criteria. </p>
							</div>
							
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Test Administration Procedures and Instructions</h2>
								<ul className="detail-list" style={{marginLeft:"12px"}}>
									<li>Placement Tests at SCD are conducted online (but in campus labs), so students should be available in the college 15 minutes prior to the commencement of the test to collect their Placement Test entry tickets, pass words, and the test instructions from the Admission Office</li>
									<li>After registration for the placement test, candidates should assemble in the place specified by the Registration Department on campus till the test starts in the special labs.</li>
									<li>Students should bring their Identity Cards to be allowed to take the placement test.</li>
									<li>The results of the placement test will be announced by the Admission Office within a week after taking the test.</li>
								</ul>
							</div>
							
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Composition of the Placement Tests</h2>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td><b>Skill</b></td>
                      <td><b>Questions</b></td>
                      <td><b>Mark</b></td>
                      <td><b>Duration</b></td>
                    </tr>
                  </tbody>
                  <tr>
                    <td style={{textAlign:"center",backgroundColor:"#ccc"}} colSpan={4}><b>A.	English Language </b></td>
                  </tr>
                  <tr>
                    <td>Listening</td>
                    <td>50</td>
                    <td>100</td>
                    <td>30 minutes</td>
                  </tr>
                  <tr>
                    <td>Reading</td>
                    <td>50</td>
                    <td>100</td>
                    <td>55 minutes</td>
                  </tr>
                  <tr>
                    <td>Grammar</td>
                    <td>70</td>
                    <td>70</td>
                    <td>35 minutes</td>
                  </tr>
                  <tr>
                    <td>Writing </td>
                    <td>50</td>
                    <td>100</td>
                    <td>Objective questions: 20 minutes <br />Essay writing:40 minutes</td>
                  </tr>
                  <tr>
                    <td style={{backgroundColor:"#ccc"}}><b>B.	Math</b> </td>
                    <td>25</td>
                    <td>50</td>
                    <td>30 minutes</td>
                  </tr>
                  <tr>
                    <td style={{backgroundColor:"#ccc"}}><b>C.	Computing</b> </td>
                    <td>50</td>
                    <td>50</td>
                    <td>30 minutes</td>
                  </tr>
                </table>
							</div>

              <div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Scoring and Placement Criteria</h2>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td colSpan={2} style={{textAlign:"center"}}><b>ENGLISH</b></td>
                      <td colSpan={2} style={{textAlign:"center"}}><b>MATH & COMPUTING</b></td>
                    </tr>
                  </tbody>
                  <tr>
                    <td>0-35</td>
                    <td>GFP001</td>
                    <td>0-60</td>
                    <td>GFP002 (Math I) & (Comp. I)</td>
                  </tr>
                  <tr>
                    <td>36-49</td>
                    <td>GFP002</td>
                    <td>61-79</td>
                    <td>GFP003 (Math II) & (Comp. II)</td>
                  </tr>
                  <tr>
                    <td>50-59</td>
                    <td>GFP003</td>
                    <td>80 and above</td>
                    <td>Exempted from both Math and Comp. at GFP</td>
                  </tr>
                  <tr>
                    <td>60 and above</td>
                    <td>Exempted from GFP English components</td>
                    <td></td>
                    <td></td>
                  </tr>
                </table>
                
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
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-xs-4">Mr. Basil Al-Lamki</div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="mailto:b.allamki@scd.edu.om">b.allamki @scd.edu.om</a></div>
                        <div className="col-lg-4 col-md-4 col-xs-4"><a href="tel:+96824513252">24513252</a></div>

                      </div>
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
