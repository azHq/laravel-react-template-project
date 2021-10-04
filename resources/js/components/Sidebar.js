import React, { Component } from 'react'
import white_logo from '../src/images/logo_white.png';
import patient from '../src/images/patient.svg';
import doctor from '../src/images/doctor.svg';
import budget from '../src/images/budget.svg';
import contact_us from '../src/images/contact_us.svg';
import contact from '../src/images/contact.svg';
import book from '../src/images/book.svg';
import payment from '../src/images/payment.png';
import transaction from '../src/images/transaction.png';
import './Sidebar.css';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
var preItem=null;
export class Sidebar extends Component {
    
    constructor(){
        super();
        
    }
    OnSidebarItemSelect=(e)=>{
        preItem=document.getElementById(localStorage.getItem("pre_menu"));
       if(preItem) preItem.classList.replace('menu_item_click','menu_item');
        e.currentTarget.classList.replace('menu_item','menu_item_click');
        localStorage.setItem("pre_menu",e.currentTarget.id);
    }
    ChangePage=(pageName)=>{
        this.props.history.push({pathname:"/"+pageName});
    }
    componentDidMount=()=> {
        window.addEventListener('load', this.Load);
    }
    Load(){
        preItem=document.getElementById(localStorage.getItem("pre_menu"));
       if(preItem) preItem.classList.replace('menu_item','menu_item_click');
    }
   
    render() {
         return(
            <div>
                <section className="row m-0">
                    <div id="sidebar" style={{zIndex:"1",paddingTop:"15px"}} className="sidebar-show" >
                        <div  style={{width:"100%"}}>
                            <div ref="test" id="1" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("pending_services")}} className={`m-auto menu_item }`} style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%",margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={patient}></img>
                                </div>
                                <h3 className="sidebar-icon">Pending Requests</h3>
                                <div id="service_request_blade" style={{backgroundColor:"rgb(226, 6, 6)",height:"28px",width:"28px",borderRadius:"50%",position:"absolute",top:"20px",right:"5px",color:"white",fontWeight:"bolder",textAlign:"center",display: "flex",justifyContent:"center",alignItems:"center"}}>2</div>
                                <hr className="hr"></hr>
                            </div>
                            <div id="2" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("service_history")}} className={`m-auto menu_item }`} style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%",margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={patient}></img>
                                </div>
                                <h3 className="sidebar-icon">Service <br/> History</h3>
                                <div id="service_request_blade" style={{backgroundColor:"rgb(226, 6, 6)",height:"28px",width:"28px",borderRadius:"50%",position:"absolute",top:"20px",right:"5px",color:"white",fontWeight:"bolder",textAlign:"center",display: "flex",justifyContent:"center",alignItems:"center"}}>2</div>
                                <hr className="hr"></hr>
                            </div>
                            <div id="payment" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("payment")}} className="menu_item m-auto" style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%",margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={payment}></img>
                                </div>
                                <h3 className="sidebar-icon">Caregiver Payment</h3>
                                <div id="recruitment_request_blade" style={{backgroundColor:"rgb(226, 6, 6)",height:"28px",width:"28px",borderRadius:"50%",position:"absolute",top:"160px",right:"5px",color:"white",fontWeight:"bolder",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>2</div>
                                <hr className="hr"></hr>
                            </div>
                            <div id="3" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("transaction_history")}} className="menu_item m-auto" style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%",margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={transaction}></img>
                                </div>
                                <h3 className="sidebar-icon">Transaction History</h3>
                                <div id="recruitment_request_blade" style={{backgroundColor:"rgb(226, 6, 6)",height:"28px",width:"28px",borderRadius:"50%",position:"absolute",top:"160px",right:"5px",color:"white",fontWeight:"bolder",textAlign:"center",display:"flex",justifyContent:"center",alignItems:"center"}}>2</div>
                                <hr className="hr"></hr>
                            </div>

                            <div id="4" className="menu_item m-auto" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("accounting")}} style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%", margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={budget}></img>
                                </div>
                                <h3 className="sidebar-icon">Accounting</h3>
                                <hr className="hr"></hr>
                            </div>
                            <div id="5" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("contact_list")}} className="menu_item m-auto" style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%", margin:"auto",paddingTop:"10px"}}>
                                <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={contact}></img>
                                </div>
                                <h3 className="sidebar-icon">Contact</h3>
                                <hr className="hr"></hr>
                            </div>
                            <div id="6" className="menu_item m-auto" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("about")}}  style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%", margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={contact_us}></img>
                                </div>
                                <h3 className="sidebar-icon">About Us</h3>
                                <hr className="hr"></hr>
                            </div>

                            <div id="7" className="menu_item m-auto" onClick={(e)=>{this.OnSidebarItemSelect(e),this.ChangePage("faq")}} style={{width:"98%",margin:"2px"}}>
                                <div style={{width:"100%", margin:"auto",paddingTop:"10px"}}>
                                    <img style={{width:"calc(32px + 20%)",margin:"auto",display:"block"}}  src={book}></img>
                                </div>
                                <h3 className="sidebar-icon">FAQ</h3>
                                <hr className="hr"></hr>
                            </div>
                            <hr className="hr"></hr>
                            <div style={{height:"70px"}}></div>
                        </div> 
                    </div>
                  
                </section>
            </div>
        )
    }
}

export default withRouter(Sidebar)
