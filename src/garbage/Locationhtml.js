import React from 'react';
import {Component} from 'react';
import './Locationhtml.css';
import './w3.css'

class Locationhtml extends Component
{
render()
{
    return(
        <div id="body">
            <h1 id="heading">Locations</h1>
            <hr id="lineone"/>
        
        <div>



  <div id="panel" className="w3-card-4" style={{width:"20%"}}>
    <header className="w3-container w3-blue">
      <h4>{sub.type}</h4>
    </header>

    <div className="w3-container" style={{height:"150px",textAlign:"center"}}>
    <h2>{sub.name}</h2>
    </div>

    <footer className="w3-container w3-blue">
      <h5>{sub.residents.length}</h5>
    </footer>
  </div>








         </div>   
        </div>
    );
}
}
export default Locationhtml;