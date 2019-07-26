import React from 'react';
import {Component} from 'react';
import './Header.css'
import rickyandmorky from './rickyandmorky.jpeg';
import Home from '../components/Home';
//const {FaIcon} = require('react-fa-icon');
//import Locationhtml from '../components/Locationhtml';
import Location from "../components/Location"
//import Locationdata from '../components/Locationdata';
//import Locationdata from "../components/Locationdata";

class Header extends Component
{
  constructor()
  {
    super();
    this.state=
    {
      input: <Home/>,
      showLocc:true,
    }
    
  }
  eventHandler = (e) => 
  {
    
    this.setState({ 
      input: <Location/>

    });
    
    
  }

  




componentDidMount()
{


}




    render()
    {
        
        return(
            
<div style={{backgroundColor:"#ede3fc"}}>
<div id="navbar" style={{backgroundColor: "#dee3e3",
    position: "fixed",
    top:"0",
    width:"100%",
    height:"85px"}}>
<div>

  <img src={rickyandmorky} id="titleimg"  alt="" style={{height:"50px",
    width:"120px",
    margin:"10px 5px 5px 20px"}} />

  

</div>
<hr id="lineone"/>

  </div>


<div className="sidenav">
{this.state.showLocc?
  <a href="#about" id="locbtn"onClick={this.eventHandler}>Locations</a>
:null}
 

</div>



<div className="mainn">



{this.state.input}






</div>
</div>



        
        );
    }
}

export default Header;