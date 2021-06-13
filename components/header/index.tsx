import OtherApp from "./otherapp"
import OtherAppMobile from "./otherappmobile"
export default function Header({active,otherapp}) {
  return (
    <header id="header" className="header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyChangeLogo': true, 'stickyStartAt': 30, 'stickyHeaderContainerHeight': 70}">
            <div className="header-body border-top-0">
                <div className="header-top">
                    <div className="container-fluid" >
                        <div className="header-row">
                            <div className="header-column justify-content-start">
                                <div className="header-row">
                                    <nav className="header-nav-top">
                                        <OtherApp data={otherapp}  />
                                    </nav>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="header-container container-fluid">
                    <div className="header-row">
                        <div className="header-column">
                            <div className="header-row header-logo-special">
                                <div className="header-logo mt-0 mb-0">
                                    <a href="/">
                                    <img src="/assets/logo/logo.jpg" className="main-logo-header" alt="SCD Logo" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header-column justify-content-end">
                            <div className="header-row">
                                <div className="header-nav header-nav-line header-nav-bottom-line header-nav-bottom-line-effect-1">
                                    <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-2 header-nav-main-sub-effect-1">
                                        <nav id="navbarMenu"  className="collapse">
                                            <ul className="nav nav-pills " id="mainNav">
                                            {active === "home" ? (
                                                <li ><a className="active current-page-active" href="/">Home</a></li>
                                            ) : (
                                                <li ><a href="/">Home</a></li>
                                            )}
                                            {active === "aboutus" ? (
                                                <li ><a className="active current-page-active" href="about">About Us</a></li>
                                            ) : (
                                                <li ><a href="/aboutus">About Us</a></li>
                                            )}
                                            {active === "programs" ? (
                                                <li ><a className="active current-page-active" href="programs">Programs</a></li>
                                            ) : (
                                                <li ><a href="/programs">Programs</a></li>
                                            )}
                                            {active === "admission" ? ( 
                                                <li ><a className="active current-page-active" href="admission">Admission</a></li>
                                            ) : (
                                                <li ><a href="/admission">Admission</a></li>
                                            )}
                                            {active === "studentlife" ? (
                                                <li ><a className="active current-page-active" href="studentlife">Student Life</a></li>
                                            ) : (
                                                <li ><a href="/studentlife">Student Life</a></li>
                                            )}
                                            {active === "alumni" ? (
                                                <li ><a className="active current-page-active" href="alumni">Alumni</a></li>
                                            ) : (
                                                <li ><a href="/alumni">Alumni</a></li>
                                            )}
                                            {active === "exhibition" ? (
                                                <li ><a className="active current-page-active" href="exhibition">Exhibition</a></li>
                                            ) : (
                                                <li ><a href="/exhibition">Exhibition</a></li>
                                            )}
                                            {active === "contactus" ? (
                                                <li ><a className="active current-page-active" href="contactus">Contact Us</a></li> 
                                            ) : (
                                                <li ><a href="/contactus">Contact Us</a></li> 
                                            )}
                                            {/* <li className="dropdown-submenu d-lg-none d-xl-none d-xxl-none d-md-none" >
                                                <a href="#" className="dropdown-item">E-Services</a>
                                                <OtherAppMobile data={otherapp}  />
                                            </li> */}
                                            <li className="dropdown d-lg-none d-xl-none d-xxl-none d-md-none">
                                                <a className="dropdown-item dropdown-toggle" href="#">E-Services</a>
                                                <OtherAppMobile data={otherapp}  />
                                            </li>
                                        </ul>
                                        </nav>
                                    </div>
                                    <button className="navbar-toggler btn header-btn-collapse-nav" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                                        <i className="fas fa-bars"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
  )
}
