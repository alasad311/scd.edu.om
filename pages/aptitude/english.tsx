import Head from 'next/head'
import Script from 'next/script'
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
              <a className="navbar-brand" href="/aptitude">
                
                <img src="/assets/logo/logo.jpg" className="logo logo-scrolled" alt="" />
              </a>
            </div>

            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul className="nav navbar-nav navbar-left" data-in="fadeInDown" data-out="fadeOutUp">
                <li></li>
              </ul>
              <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                <li><a href="/aptitude/english" className="signin">English</a></li>
                <li className="left-br"><a href="aptitude/" className="signin">عربى</a></li>
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
                  <img src="assets/aptitude/aptitude.png" className="img-responsive" alt="" />
                </div>
                <div className="ur-caption">
                  <h4 className="ur-title">Aptitude Test</h4>
                  <p className="ur-location"><i className="fas fa-user-graduate mrg-r-5"></i>Academic Year 2023-2024</p>
                  <p className="ur-location"><i className="fas fa-building mrg-r-5"></i>Fine Arts Department</p>
                  <p className="ur-location"><i className="ti-location-pin mrg-r-5"></i>Airport Heights – Matar Street</p>
                  <span className="ur-designation"><i className="ti-home mrg-r-5"></i>Scientific College of Design</span>
                </div>
                
              </div>
              <div className="ur-caption hidden-md hidden-sm hidden-xs" style={{width:"50%",marginRight:"22px",textAlign:"justify"}}>
                  <h4 className="ur-title">Purpose of Aptitude Test</h4>
                  <p className="ur-location">Students who apply to study in Scientific College of Design should take an aptitude test in drawing skills. Although the aptitude test is not “Pass” or “Fail” test, it is used as an indicator of a student’s current competence in drawing skills. They help in deciding whether a student has basic artistic abilities to join the fine arts program. </p>
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
								<h2 className="detail-title " style={{fontSize:"18px !important"}}>Purpose of Aptitude Test</h2>
								<p>Students who apply to study in Scientific College of Design should take an aptitude test in drawing skills. Although the aptitude test is not “Pass” or “Fail” test, it is used as an indicator of a student’s current competence in drawing skills. They help in deciding whether a student has basic artistic abilities to join the fine arts program. </p>
							</div>
							
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Test Administration Procedures and Instructions</h2>
								<ul className="detail-list" style={{marginLeft:"12px"}}>
									<li>Aptitude test at SCD is conducted on campus, so students should be available in the college 15 minutes prior to the commencement of the test to collect material used for the test, and the test instructions from the Admission Office</li>
									<li>After registration for the aptitude test, candidates should assemble in the College theatre in the first floor and wait till the test starts in the special studio.</li>
									<li>Students should bring their Identity Cards to be allowed to take the aptitude test.</li>
									<li>The results of the aptitude test will be announced by the Admission Office within a week at the latest.</li>
								</ul>
							</div>
							
							<div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Composition of the aptitude Test</h2>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td><b>Question</b></td>
                      <td><b>Mark</b></td>
                      <td><b>Duration</b></td>
                    </tr>
                  </tbody>
                  <tr>
                    <td>Question I – Expressive Question I – Expressive topic </td>
                    <td>50</td>
                    <td>60 minutes</td>
                  </tr>
                  <tr>
                    <td>Question II – life observation</td>
                    <td>50</td>
                    <td>60 minutes</td>
                  </tr>
                  <tr>
                    <td colSpan={3}><b><i>Note: Student has to get total of 60 marks to pass the test, with at least 25 marks for each question</i></b></td>
                  </tr>
                </table>
							</div>

              <div className="row-bottom">
								<h2 className="detail-title" style={{fontSize:"18px !important"}}>Scoring and Criteria</h2>
                <h5>Question I – Expressive Question I – Expressive topic</h5>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{textAlign:"center"}}><b>Criterion</b></td>
                      <td style={{textAlign:"center"}}><b>Composition</b></td>
                      <td style={{textAlign:"center"}}><b>Human Proportions</b></td>
                      <td style={{textAlign:"center"}}><b>Idea and Creativity</b></td>
                      <td style={{textAlign:"center"}}><b>Light and Shade Rendering</b></td>
                      <td style={{textAlign:"center"}}><b>TOTAL</b></td>
                    </tr>
                  </tbody>
                  <tr>
                    <td>Percentage</td>
                    <td>15%</td>
                    <td>15%</td>
                    <td>10%</td>
                    <td>10%</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td style={{verticalAlign:"baseline"}}>The student achieves a visually pleasing, and balanced arrangement of shapes, tones, and other elements that make up the drawing.  </td>
                    <td style={{verticalAlign:"baseline"}}>The student depicts accurate human scale and relevant proportions throughout the scenery.    </td>
                    <td style={{verticalAlign:"baseline"}}>The drawing illustrates a unique, exclusive idea, demonstrates the student’s creative thinking.   </td>
                    <td style={{verticalAlign:"baseline"}}>The student acknowledges and implements the use of light and shadow to visually define objects, and create the illusion of a third dimension.  </td>
                    <td style={{verticalAlign:"baseline"}}>The student has excellently fulfilled all the previously stated criteria.  </td>
                  </tr>
                </table>
                <br />
                <h5>Question II – life observation</h5>
								<table className="table table-striped">
                  <tbody>
                    <tr>
                      <td style={{textAlign:"center"}}><b>Criterion</b></td>
                      <td style={{textAlign:"center"}}><b>Composition</b></td>
                      <td style={{textAlign:"center"}}><b>Human Proportions</b></td>
                      <td style={{textAlign:"center"}}><b>Idea and Creativity</b></td>
                      <td style={{textAlign:"center"}}><b>Light and Shade Rendering</b></td>
                      <td style={{textAlign:"center"}}><b>TOTAL</b></td>
                    </tr>
                  </tbody>
                  <tr>
                    <td>Percentage</td>
                    <td>15%</td>
                    <td>15%</td>
                    <td>10%</td>
                    <td>10%</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td style={{verticalAlign:"baseline"}}>The student depicts accurate scale and relevant proportions throughout the scenery. </td>
                    <td style={{verticalAlign:"baseline"}}>The student’s work illustrates a high level of detail, presented in a neat, clean manner. </td>
                    <td style={{verticalAlign:"baseline"}}>The student acknowledges and implements the use of light and shadow to visually define objects, create the illusion of a third dimension, and place emphasis on the depth of field.</td>
                    <td style={{verticalAlign:"baseline"}}>The student achieves a visually balanced arrangement of the elements that make up the composition within the defined borders of the page. </td>
                    <td style={{verticalAlign:"baseline"}}>The student has excellently fulfilled all the previously stated criteria.   </td>
                  </tr>
                </table>
							</div>
							
						</div>
						
						<div className="col-lg-4 col-md-4">
							<div className="full-sidebar-wrap">															
								<div className="sidebar-widgets">
								
									<div className="ur-detail-wrap">
										<div className="ur-detail-wrap-header">
											<h4>Material Requirements </h4>
                      <i>College will provide all materials</i>
										</div>
										<div className="ur-detail-wrap-body">
											<ul className="ove-detail-list">
											
												<li>
													<i className="fas fa-copy"></i>
													<h5>A3 canson paper (250 gsm)</h5>
												</li>
												
												<li>
													<i className="fas fa-pencil-alt"></i>
													<h5>HB, & 2B pencils</h5>
												</li>
												
												<li>
													<i className="fas fa-eraser"></i>
													<h5>Soft eraser</h5>
												</li>
												
												<li>
													<i className="fas fa-edit"></i>
													<h5>sharpener</h5>
												</li>
												
											</ul>
										</div>
									</div>
									
								</div>

								<div className="sidebar-widgets">
								
									<div className="ur-detail-wrap">
										<div className="ur-detail-wrap-header">
											<h4>Other Requirements</h4>
										</div>
										<div className="ur-detail-wrap-body">
											<ul className="simple-list-sshare">
												<li>Be present in person 30 minutes prior to the exam</li>
                        <li>Be present 15 minutes prior to the exam</li>
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
      <Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/jquery.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/viewportchecker.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/bootstrap.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/bootsnav.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/select2.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/wysihtml5-0.3.0.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/bootstrap-wysihtml5.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/datedropper.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/dropzone.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/loader.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/owl.carousel.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/slick.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/gmap3.min.js"/>
			<Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/jquery.easy-autocomplete.min.js"/>
      <Script strategy="lazyOnload" type="text/javascript" src="assets/plugins/js/counterup.min.js"/>
    </div>
  )
}
