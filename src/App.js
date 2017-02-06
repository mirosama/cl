import React, { Component } from 'react';

import 'bootstrap/scss/bootstrap.scss';

import './App.css'




class App extends Component {
 
constructor(props){
  super(props);

  this.state={
    IN_RAM:0,
    IN_CPU:0,
    IN_STORAGE:0,
    In_VM:0,
    OUT_TOTAL:0
  }
 
 this.updateState = this.updateState.bind(this);

};


calculate()
{
 var B26_CL_LICENSE =  3000;
var B19_SAN_STORAGE = 58500.00;
var B18_SERVER_PRICE = 71952.00;
var Year = 12;
var RAM_OF_INSTALLED_SERVER = 256;
var B14_NO_OF_SERVER = 2;
var B35_CL_DISCOUNT=1.00;
var NO_OF_CORE_ON_INSTALLED_SERVER=32;
var AMOUNT_IN_TB=20;
var B34_EXCHANGE_RATE=4.11;
var  C18=(B18_SERVER_PRICE/Year);
var C19=(B19_SAN_STORAGE/Year);
var C23 =(((C18/RAM_OF_INSTALLED_SERVER)*this.state.IN_RAM)/B14_NO_OF_SERVER);

var C24 =(C19/AMOUNT_IN_TB)*this.state.IN_STORAGE;

var C25= C24+C23;

var C26 = (((B26_CL_LICENSE*B34_EXCHANGE_RATE)*(this.state.IN_CPU/(NO_OF_CORE_ON_INSTALLED_SERVER*B14_NO_OF_SERVER)))*B35_CL_DISCOUNT);

var total = this.state.In_VM*(C26+C25);
total=total.toFixed(2);
this.state.OUT_TOTAL=total;
}



updateState(event) {
    this.setState({[event.target.name]: event.target.value});
 }
  

  render() {
    return (

 

     <div className="row">
        <div id="loginbox" className="col-md-12">                    
            <div className="panel panel-info" >
                    <div className="panel-heading">
                        <div className="panel-title">Price Calculator</div>
                   </div>     

                    <div  className="panel-body" >

               <form className="form-horizontal" role="form">

         

                    
                            <label>VIRTUAL MACHINE:</label>
                            <div className='input-group'>
                                  <input type="text" placeholder="Virtual Machine" value={this.state.In_VM} onChange={this.updateState} name="In_VM" className="form-control">
                                  </input>
                                  <span className="input-group-addon">
                                   VM
                                  </span>
                            </div>
                        
               

               
                            <label>RAM:</label>
                              <div className="input-group">
                                 <input type="text" placeholder="RAM" value={this.state.IN_RAM} onChange={this.updateState}  name="IN_RAM" 
                                  className="form-control"  aria-describedby="select_size"></input> 
                                  <span className="input-group-addon" id="select_size">
                                    GB
                                   </span>
                              </div>
                    
           


                        
                            <label>STORAGE:</label>
                            <div className="input-group">
                                <input type="text"  placeholder="STORAGE" value={this.state.IN_STORAGE} onChange={this.updateState}   name="IN_STORAGE" className="form-control"/>
                                <span className="input-group-addon" >
                                      <select >
                                      <option>TB</option>
                                      <option>GB</option>
                                      </select>
                                </span>
                           </div>
         




                
                             <label>CPU:</label>
                             <div className="input-group">
                                <input type="text" placeholder="CPU" value={this.state.IN_CPU} onChange={this.updateState}  name="IN_CPU" className="form-control">
                            </input>
                                <span className="input-group-addon">VCORE</span>
                            </div>
                    
    
                        <div className="giveTopPadding">
                               <div  className="form-group">
                                  <div className="col-sm-12 controls">
                                      <a id="btn-login"  href="#" className="btn btn-success hidden" onClick={this.calculate()} > CALCULATE </a>
                                  </div>
                               </div>
                        </div>



              </form>

<div id="uc-submit" className="uc-submit">
<h4 className="pricing">{this.state.OUT_TOTAL} <span className="badge badge-primary">RM/MONTH</span></h4>


    </div>



                        </div>                     
                    </div>  
        </div>





</div>












    );
  }
}



export default App;
