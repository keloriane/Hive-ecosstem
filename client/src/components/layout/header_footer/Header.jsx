import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer from './SideDrawer';
import logo from './../../../resources/images/hive-pentagon-amber.png';
import { TweenMax } from "gsap/TweenMax";


 class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false,

  }
 
  componentDidMount(){
    window.addEventListener('scroll',this.handleScroll);

  }

  handleScroll = ()=>{
    if (window.scrollY>0) {
      this.setState({
        headerShow:true
      })
    } else {
      this.setState({
        headerShow:false
      })
    }
  }

  toggleDrawer = (value) =>{
    this.setState({
      drawerOpen: value
    })
  }
  render() {
    return (
     <AppBar 
     position="fixed"
     style={{
       backgroundColor:this.state.headerShow ? "#271F13" : 'transparent',
       boxShadow:'none',
       padding:'10px 0px',
       transitionDuration:0.5
       
     }}
     
     >
     <Toolbar style={{
       justifyContent:'space-between'
     }}>

      <div className="header_logo">
        <img src={logo} alt="" className='logo-penta'/>
        <div className="header_logo_title"> Hive Co-op</div>
      </div>

      <IconButton
        aria-label="Menu"
        color="inherit"
        style={{
          justifyContent:'flex-end'
        }}
        onClick={ () => this.toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <SideDrawer
        open={this.state.drawerOpen}
        onClose={(value)=>this.toggleDrawer(value)}
      
      ></SideDrawer>
     </Toolbar>
  </AppBar>
    )
  }
}
export default Header;