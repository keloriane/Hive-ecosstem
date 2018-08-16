import React, { Component } from 'react';
import { TweenLite, Expo, TimelineLite } from 'gsap';
import ScrollMagic from 'scrollmagic';
require('animation.gsap');
require('debug.addIndicators');



 class Services extends Component {


    componentDidMount(){
        const controller = new ScrollMagic.Controller();
        const serviceSection = document.querySelector('services-container')
        const titleService = document.querySelector('services-container')
        const tlHeader = new TimelineLite('service-title');

        tlHeader
            .from(titleService,1,{y:-120,opacity:0, ease: Expo.easeInOut})

        const servicesAnimation = new ScrollMagic.Scene({
            triggerElement:serviceSection,
            reverse:true
        })
        setTween(tlHeader)
        .addTo(controller)
        addIndicators({
            colorStart: 'red'
        })
    }
  render() {


    return (
      <div className="section-content">
        <div className="services-container container">
            <h3 className="service-title">Services</h3>
                <div className="service-items">
                <p>Mark com</p>
                </div>
                <div className="service-items">
                <p>Business strategy</p>
                </div>
                <div className="service-items">
                <p></p>
                </div>
                <div className="service-items">
                <p></p>
                </div>



        
        </div>
        
      </div>
    )
  }
}
export default Services;