import React, { Component } from 'react'
import slide_one from './../../../resources/images/hive-team.png';
import slide_two from './../../../resources/images/community.jpg';
import Button from './../../featured/Button';


class About extends Component {

  onShowClick = () => {
   console.log('hello')
  };

  render() {
    return (
    
      <div className="section-content">
      <div className="container-about">
      
      <div className="text-container">
      <h3 className='title-section'>About us</h3>
      <div className="underline"></div>
        <p className="text-about-us">We’ve got big news coming soon!
        
        
        After eight months and four successful events, various meet-ups and workshops gathering hundreds of people around blockchain, we decided to answer the ever-growing excitement we witnessed by opening a new chapter in our adventure.
        
        Our community emerged from a shared passion for blockchain technology.
        We grew and reinforced our blockchain-agnostic identity, while striving to introduce the general public to the potential if this disruptive, break-through innovation. HIVE slowly became a go-to point of contact in the Belgian capital.
        
        Convinced by the empowerment that blockchain can provide in many aspects of our everyday life, we decided to create an structure enabling professionals and tech-savvy individuals to interact with the industry. In opposition to the old ways, we want our model to give the technology back to the people.
        
        We’ll tell you more at our next BIP event in October.
        
        Stay tuned!”</p>
      
        </div>
        <div className="image-container">
        <img src={slide_one} alt="" className="team"  onClick={this.onShowClick}/>
        <div className="layer-image" ></div>
        <div className="button-container">
        <Button />
        </div>
        </div>
        
        </div>
        </div>
        
      )
  }
}
export default About;