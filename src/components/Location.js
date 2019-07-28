import React from 'react';
import {Component} from 'react';
import './Location.css';
import './w3.css'
import rickyandmorky from './rickyandmorky.jpeg';
import { FaSearch } from 'react-icons/fa';




class Location extends Component
 {
  
   constructor(props)
   {
     super(props);
     this.state=
     {
       list:       //locations fetch
       {
          results:[]
       }
    
       ,
       lists:{},//location data fetch
       Names:{}, 
       error:null,
       input:'',
       count:1,
     
     
      showMe:false,//Location boxes
      showUs:false,//location data
      showLoc:true,//Location tag
      showHome:true,//Homepage
      showHometag:false,//Home tag
     }
   }
  

   





   Handler = (f) => {                                 // panel onclick handler
    
    this.setState({showHome:false})
   this.setState({id:f});
   this.setState({showMe:false});
   this.setState({showUs:true});
   this.setState({showLoc:true});
   this.setState({showHometag:true});
   this.setState({count:1});
   
   this.componentMount(f);
    
 

   
   }
   
componentMount(f)                                            //Get location data function
{
  var k=f;
   
    let url="https://rickandmortyapi.com/api/location/"+k;         // location data fetch api
    
     
    
    fetch(url)
    .then((resp) => resp.json())
    .then(json => {
     this.setState({lists: json})
   
       this.componentDidCatch(this.state.lists.residents);
     
       document.getElementById("searchbox").value=this.state.lists.name;
    })
   
    
    .catch(function(error) {
      console.log('Request failed', error);
    });
    

   
  

  }
  

  componentDidCatch(e)                                           //Get Location data residents names function
  {
    let v=e;
   
    for (let i in v)
    {
        
      
       let urll=v[i]; 
       fetch(urll)
       .then((respp) => respp.json())
       .then(json => {
        this.setState({Names: json})
        this.component(this.state.Names.name, i,v);
        
       })
       
       
       .catch(function(error) {
         console.log('Request failed', error);
       });
       
  }
  }


  component(e)                                                    // update location data residents list function 
  {
    let c=this.state.count;
    document.getElementById("residents").innerHTML +=   c+ ".<b id='resinames'> " +e+"</b><br/>";
    this.setState({count :c+1});
  }

















  redirect = () => {                     // location tag onclick handler

this.setState({showMe:true});
this.setState({showUs:false});
this.setState({showLoc:true});
this.setState({showHome:false})
this.setState({showHometag:true}); 
this.setState({count:1});
document.getElementById("searchbox").value="";
document.getElementById("searchbox").placeholder="Type a location";

  }
  

  homeredirect = () =>                                           //Home tag onclick handler function
  { 
    this.setState({showHome:true});
   
    this.setState({showMe:false});
    this.setState({showUs:false});
    this.setState({count:1});
    document.getElementById("searchbox").value="";
     document.getElementById("searchbox").placeholder="Type a location";
  }





 
 
   componentDidMount()                 //locations fetch api
   {
     let url="https://rickandmortyapi.com/api/location/";
   

   fetch(url)
   .then((resp) => resp.json())
   .then(json => {
    this.setState({list: json})
   
    
   
   })

   .catch(function(error) {
     console.log('Request failed', error);
   });
   
  
  }
  

  

  

  
    
   


                                                          
  render()
 {
  
let res= this.state.list.results;           // locations fetch to variable res
let r=this.state.lists;                     //location data fetch to r
                                                //declare and assign date to variable
let date=require('dateformat');             

 
   
 
                                          


  return (
    
    



                                                               
<div>



     <div style={{backgroundColor:"#ede3fc"}} className="headandnavigation">
                   <div id="navbar" style={{backgroundColor: "#dee3e3",
                 position: "fixed",
                 top:"0",
                 width:"100%",
                 height:"85px"}}>
                       <div>

                                     <img src={rickyandmorky} id="titleimg"  alt="" style={{height:"50px",
                                   width:"120px",
                                       margin:"10px 5px 5px 20px"}}/>
                                       <span id="searchcontent" style={{backgroundColor:"#b5b3ba" ,padding:"12px",borderRadius:"10px",
                   marginLeft:"900px" ,marginTop:"50px"}}>character
                                         
                                         <input type="search" className="searchbox" id="searchbox" placeholder="Type a location" 
                                         style={{borderStyle:"none", padding:"10px", width:"160px"}}/>
                                       
                                          <button className="glyphicon glyphicon-search" id="buttonn"><FaSearch/></button>
                                        
                                         </span>

                   





                   </div>
                    <hr id="lineone"/>

                    </div>
           
                    <div>

 </div>




 
                   <div className="sidenav">
                     {
                       this.state.showHometag?
                       <a href="#Home" id="homebtn"onClick={this.homeredirect}>Home</a>
                       :null
                     }
                     {this.state.showLoc?
                     <a href="#Locationid?" id="locbtn"onClick={this.redirect}>Locations</a>
                   :null}
 
                    </div>
                       
   </div>






 

 <div className="mainn">  

 
             {
               this.state.showHome?
               <div className="mainn">
              <h1 id="heading" style={{borderBottom: "2px solid #CECBCE", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Rick and Morty</h1><span>
            
               </span>
                     <span>

                      <p style={{fontSize:"14px",fontFamily:"times new roman" ,margin:"0 auto"}}>From Wikipedia, the free encyclopedia</p>
                     </span>

                     
        
                      
                           <div id="main-container">
 
                       <p id="paraone">
                       <strong id="strongdata">Rick and Morty</strong>  is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon for Cartoon Network's late-night programming block ‘Adult Swim’. 
                              The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
                             The series premiered on December 2, 2013, and the third season concluded on October 1, 2017. In May 2018, the series was picked up for an additional 70 episodes over an unspecified number of seasons.
                            </p>
                         <p id="paratwo">Roiland voices the eponymous characters, with Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of the family.
                         The series originated from an animated short parody film of Back to the Future, The Real Animated Adventures of Doc and Mharti, created by Roiland for Channel 101, a short film festival co-founded by Harmon. 
                        When Adult Swim approached Harmon for television show ideas, he and Roiland decided to develop a program based on the short. 
                           The series has been acclaimed by critics for its originality, creativity and humor.
                            </p>
                               </div>

                                 </div>





                          :null
                               }
  </div>



  <div className="mainn" id="Locationdata">
    
                             {this.state.showUs?
    


                            <div className="Location">
                      <div className="head">
           <h1  style={{borderBottom: "2px solid #CECBCE", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Locations - <span>{r.name}</span></h1>
           
                         </div>
                         <div className="Locationdatas" style={{marginLeft:"50px"}}>
                           <br/><br/>
                         
                          <h3 className="locationtitle">Type :     <span style={{fontSize:"20px", fontWeight:"lighter"}}>{r.type}</span></h3>
                         <h3 className="locationtitle">Dimension :    <span style={{fontSize:"20px" ,fontWeight:"lighter"}}>{r.dimension}</span></h3>
                           <h3 className="locationtitle">Created :     <span style={{fontSize:"20px", fontWeight:"lighter"}}>{date(r.created, "ddd mmm dd yyyy")}</span></h3>
                           
                            <br/>
                               </div>
                                <div className="residents" style={{marginLeft:"20px"}}>
                                  <h3 className="locationtitle">Residents:</h3>

                                   <div id="residents" style={{cursor:"pointer"}}>


                                   </div>
                                 
                             
                                      
                                           
                                     
                                       
                                      

                                        
       


                                       
       
     

                                   </div>


                                   </div>



    

                              :null}
    
                          {this.state.showMe?

                       <div className="Location">
      
                  <div className="head">
              <h1 id="headingg"  style={{borderBottom: "2px solid #CECBCE", marginBottom:"30px", fontFamily:"times new roman" ,fontStyle:"oblique", fontWeight:"bolder", fontSize:"40px"}}>Locations</h1>
           
                  </div>
                <div className="pagination">
                <a href="#about">Prev</a>
               <a href="#about">1</a>
                <a href="#about" className="active">2</a>
                        <a href="#about">3</a>
    
                        <a href="#about">5</a>
                        <a href="#about">6</a>
                          <a href="#about">Next</a>
                          </div>
                           <div className="row">
   
   
   
   
             {
                  res.map( sub =>
           {
            return <div key={sub.id} id="key" className="column" style={{marginTop:"20px"}}>
              
          
          
                    
   
         
         
          <div className="w3-card-4" onClick={this.Handler.bind(this,sub.id)}>
              <header className="w3-container w3-white" style={{textAlign:"center" ,height:"35px"}}>
          <h5 style={{marginTop:"5px"}} >{sub.type}</h5>
                  </header>
   
                   <div id="locationnameclass" className="w3-container" style={{height:"150px", backgroundColor:"#E8EAE3"}}>
                     <h4 style={{marginTop:"50px"}} className="locationame" >{sub.name}</h4>
                </div>
   
                   <footer className="w3-container w3-white"  style={{textAlign:"center" ,height:"35px"}} >
              <h5 style={{marginTop:"5px"}}>{sub.residents.length}<span> Residents</span></h5>
                 </footer>
                   </div>
   
                    
         
   
   
              
   
   
        
                 
   </div>
          })
      }
      
      
   </div>
  
   </div>
   :null
    }

   </div>
   </div>
   
 
  );
}
   }

export default Location;
