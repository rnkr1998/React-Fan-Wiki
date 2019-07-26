import React from 'react';
import {Component} from 'react';
import './Locationdata.css';


class Locationdata extends Component
 {
  
   constructor()
   {
     super();
     this.state=
     {
     Lists:[]
        
      
        
        
            
       
     ,
     
       error:null,
       input:[]
     }
   }


  
  render()
 {
  
let r=this.state
console.log(this.props.name);
  

  return (   
 
 

 
 <div className="Location">
    <div className="head">
           <h1>Locations - <span>{r.name}</span></h1>
            <hr id="lineonee"/>
   </div>
   <div className="Locationdatas">
<br/><br/><br/><br/>
     <h3>Type:     <span style={{fontSize:"20px"}}>{r.type}</span></h3>
     <h3>Dimension:    <span style={{fontSize:"20px"}}>{r.dimension}</span></h3>
     <h3>Created:     <span style={{fontSize:"20px"}}>{r.created}</span></h3>
  
     </div>
     <div className="residents">

   
        <h3>
       
       {r.residents}<br/>
       
       </h3>
       
     

     </div>


</div>

   
  );
}

}

export default Locationdata;
