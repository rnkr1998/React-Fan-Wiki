import React from 'react';
import {Component} from 'react';
import CircularSpinner from "../common/circular";


class Home extends Component
{
constructor()
{
    super();
    this.state=
    {
        lists:{},
        list:[],
        loaded:true,
    }
}

handler = (e)=>
{
    this.setState({loaded:false});
}





    render()
    {
       
        let loaded=this.state.loaded;
        return(
          
           
           <div>

{!loaded && (
            <div className="image-container-overlay">
              <CircularSpinner />
            </div>
          )}
             <h1>hello</h1>
             <input type="button" value="click me" onClick={this.handler.bind()}/>
               </div>



        );
    }
}
export default Home;