import moment from 'moment'
import Image from 'next/image'
import React from 'react'
export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container-fluid">
          <div className="divider"></div>
          <div className="row footer-content">
              <div className="col-12 col-md-6 col-lg-1"></div>
              <div className="col-12 col-md-6 col-lg-2" >
                  <Image width={150} height={150} className="brand-logo" src="/assets/logo/Logo-Center.png" alt="SCD Logo" />
              </div>
              <div className="col-12 col-md-6 col-lg-2">
                  <h5>LEARN</h5>
                  <ul>
                      <li><a href="/admission">Apply to SCD</a></li>
                      <li><a href="/programs">Browse Programs</a></li>
                      <li><a href="/admission">Admission Fees</a></li>
                  </ul>
                  <div className="divider"></div>
              </div>
              <div className="col-12 col-md-6 col-lg-2" >
                  <h5>EXPLORE</h5>
                  <ul>
                      <li><a href="/studentlife">Student life</a></li>
                      <li><a href="/exhibition">Exhibitions</a></li>
                      <li><a href="/admssion">Book a tour</a></li>
                  </ul>
                  <div className="divider"></div>
              </div>
              <div className="col-12 col-md-6 col-lg-2" >
                  <h5>EXPERIENCE</h5>
                  <ul>
                      <li><a href="/studentlife">International Student Life</a></li>
                      <li><a href="/studentlife">Student Spotlight</a></li>
                      <li><a href="/aboutus">Work at SCD</a></li>
                  </ul>
                  <div className="divider"></div>
              </div>
              <div className="col-12 col-md-6 col-lg-2" >
                  <h5>CONNECT</h5>
                  <div id="connect-icon-container" className="d-none d-sm-block">
                      <a href="https://www.facebook.com/SCD.Art.Design" target="_blank"><i className="fab fa-facebook-square footer-icon"></i></a>
                      <a href="https://www.instagram.com/scd_oman/?hl=en" target="_blank"><i className="fab fa-instagram-square footer-icon"></i></a>
                      <a href="https://www.youtube.com/channel/UCA5Ahmkvx3ia4LMM3fs8JdA" target="_blank"><i className="fab fa-youtube-square footer-icon"></i></a>
                      <a href="https://twitter.com/scd_oman?lang=en" target="_blank"><i className="fab fa-twitter-square footer-icon"></i></a>
                  </div>
                  <div className="divider d-none d-sm-block" ></div>
                  <div className="contact-links">
                      <div className="link">
                        <i className="fas fa-envelope footer-icon-links"></i>
                        <p>info@scd.edu.om</p>
                      </div>
                      <div className="link">
                        <i className="fas fa-phone footer-icon-links"></i>
                        <p>+968 24513 222</p>
                      </div>
                  </div>
              </div>
          </div>


      </div>
      <div className="copyright">
          <div className="container-fluid">
              <p className="text-center">© Scientific College of Design {moment().year()} All rights reserved.</p>

          </div>
          <a id="scroll-top" className="d-flex justify-content-center align-items-center">
              <i className="fas fa-arrow-up scroll-icon"></i>
          </a>
      </div>
  </footer>
  )
}
