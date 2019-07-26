import React from 'react';
import {Component} from 'react';
import Locationdata from './Locationdata';

class Loc extends Component
{

  constructor()
  {
    super();
    this.state=
    {
      id:"",
      lists:{},
      data:[]

    }
  }


  
  Handler = (f) => {
    
    alert(f);
   this.setState({id:f});
   
    
   
   
    let url="https://rickandmortyapi.com/api/location/"+f;
    
     
    
    fetch(url)
    .then((resp) => resp.json())
    .then(json => {
     this.setState({lists: json})
    console.log(this.state.lists);
     
 
    })
    
    
    .catch(function(error) {
      console.log('Request failed', error);
    });
 
   
    
     
    
    
  }




  render()
  {

    

  let res=this.props.name;
  return(
   
    <div className="Location">
      
    <div className="head">
            <h1 id="headingg">Locations</h1>
            <hr id="lineonee"/>
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
          return <div key={sub.id} id="key" className="column">
            
        
        
                  
 
       
       
        <div className="w3-card-4" onClick={this.Handler.bind(this,sub.id)}>
            <header className="w3-container w3-white" style={{alignContent:"center"}}>
        <h4>{sub.type}</h4>
                </header>
 
                 <div id="locationnameclass" className="w3-container" style={{height:"150px", backgroundColor:"#E8EAE3"}}>
                   <h2 className="locationame">{sub.name}</h2>
              </div>
 
                 <footer className="w3-container w3-white"  style={{alignContent:"center"}} >
            <h5>{sub.residents.length}</h5>
               </footer>
                 </div>
 
                  
       
 
 
            
 
 
      
               
 
            </div>
        })
    }
    
    
 </div>
 <Locationdata name={this.state.lists}/>
 </div>
 
 
    
  )
 //
  }
  
}
export default Loc;