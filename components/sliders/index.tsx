import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSlider } from '../../lib/swr-hooks';
import Slide from "../sliders/slider"
export default function SliderCustom() {
    const { sliderData } = useSlider()
    return (
        <div className="showcase">
            <div className="container-fluidS">
                <div className="side-social-icons hide-md-and-down">
                    <a target="_blank" href="https://www.facebook.com/SCD.Art.Design" style={{width: "26px"}}><FontAwesomeIcon icon={['fab', 'facebook-square']}  /></a>
                    <a target="_blank" href="https://www.instagram.com/scd_oman/?hl=en" style={{width: "26px"}}><FontAwesomeIcon icon={['fab', 'instagram']} /> </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCA5Ahmkvx3ia4LMM3fs8JdA" style={{width: "26px"}}><FontAwesomeIcon icon={['fab', 'youtube']} /> </a>
                    <a target="_blank" href="https://twitter.com/scd_oman?lang=en" style={{width: "26px"}}><FontAwesomeIcon icon={['fab', 'twitter']} /> </a>
                </div>
                <div className="scroll-next hide-md-and-down">
                    <div className="chevrons">
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                        <div className="chevron"></div>
                    </div>
                </div>
                <div className="indicator-style-3">
                    <div className="home-slider-progressbar">
                        <span className="home-slider-progress"></span>
                        <span className="home-slider-progress-active"></span>
                    </div>
                    <i className="flaticon-up-arrow"></i>
                    <div className="current">01</div>
                    <i className="flaticon-down-arrow"></i>
                </div>

                <Slide sliders={sliderData} />
            </div>
            <div className="Acc-main-content animated fadeInLeft delay-3s ">
                <h3 className="margin-bottom-30 title" style={{fontSize: "40px"}}>We are <span className="rotate"> Accredited</span>.</h3>
            </div>
        </div>
  )
}
