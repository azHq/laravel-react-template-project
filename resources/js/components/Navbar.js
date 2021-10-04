import React, { Component } from 'react'
import './Sidebar.css';
import white_logo from '../src/images/logo_white.png';
import logo from '../src/images/logo_overlay_green.png';
import notification_icon from '../src/images/notification_icon.svg';
import notification_icon2 from '../src/images/notification_icon.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
  
export class Navbar extends Component {
    //history=useHistory();
    sidebar_show=true;
    constructor(){
        super();
        
    }
    show_all_doctors=()=>{
        this.props.history.push("/dashboard");
    }
    show_all_users=()=>{

    }
    show_all_services=()=>{

    }
    show_all_services=()=>{

    }
    logout=()=>{
        localStorage.removeItem("apiToken");
        this.props.history.push("/login");
        
    }
    show=()=>{
        if(this.sidebar_show)
        {
            document.getElementById("sidebar").classList.replace("sidebar-show","sidebar-hide");
        }
        else{
            document.getElementById("sidebar").classList.replace("sidebar-hide","sidebar-show");
        }
        this.sidebar_show=!this.sidebar_show;
    }
    
    render() {
        return (
            <div>
                <nav className="container-fluid  shadow-sm bg-white navbar-light fixed-top d-flex" style={{height:"84px",zIndex:10}}>
                    <div className="w-100 my-auto">
                        <div className="row align-items-center my-auto">
                        <div className="col-9 col-sm-3 col-md-2  col-lg-2" >
                            <div className="row align-items-center" >
                            <div className="col-6">
                                <div id="ham-menu" style={{backgroundColor:"white",height:"38px",width:"50px",margin:"10px",borderRadius:"8px",padding:"10px"}}>
                                <div onClick={()=>{this.show()}} style={{cursor:"pointer"}}>
                                    <div style={{height:"100%",width:"100%"}}>
                                        <div style={{height:"2px",backgroundColor:"black",width:"100%",marginTop:"0px"}}></div>
                                        <div style={{height:"2px",backgroundColor:"black",width:"100%",marginTop:"6px"}}></div>
                                        <div style={{height:"2px",backgroundColor:"black",width:"100%",marginTop:"6px"}}></div>
                                    </div>    
                                </div>
                                </div>
                            </div>
                            <div className="col-6" >
                                <Link to="/home" className="navbar-brand text-dark" ><h1 ><span className="banner-text"  style={{fontSize:"17px",color:"#795548",fontFamily:" 'Russo One',sans-serif"}}></span>
                                    <img height="50" width="74" src={logo}></img></h1>
                                </Link>
                            </div>
                
                            </div>  
                        </div>
                        <div className="col-1 col-sm-8 col-md-9 col-lg-9" >
                            <div className="row align-items-center" >
                            <div className="w-100 d-none d-sm-block my-auto" >
                                <ul className="d-flex flex-row justify-content-center" style={{marginTop:"10px",marginBottom:"10px"}} >
                                    <li style={{listStyle:"none"}}><Link to="/patient_list" className="nav-link nav-item" style={{fontSize:"20px"}}>Patients</Link></li>
                                    <li style={{listStyle:"none"}}><Link to="/caregiver_list" className="nav-link nav-item"  style={{fontSize:"20px"}}>Caregivers</Link></li>
                                    <li style={{listStyle:"none"}}><Link to="/sub_admin_list" className="nav-link nav-item" style={{fontSize:"20px"}}>Sub-Admins</Link></li>
                                    <li style={{listStyle:"none"}}><Link to="/service_category" className="nav-link nav-item" style={{fontSize:"20px"}}>Service List</Link></li>
                                </ul> 
                            </div>  
                            </div>
                                
                        </div>
                        <div className="col-2 col-sm-1 col-md-1 col-lg-1 p-0" style={{textAlign:"right"}}>
                            <div className="d-flex">
                            
                            <button id="notification_list"  onClick={(e)=>{this.props.history.push("notification")}} style={{backgroundImage:`url(${notification_icon2})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",color:"red",height:"26px",width:"20px",borderStyle:"none",outline:"none",backgroundColor: "none",margin:"auto",textAlign:"center"}}>
                                <p id="total_notification" className="center" style={{width:"13.5px",height:"13.5px",marginLeft:"10px",marginTop:"0px",backgroundColor:"red",borderRadius:"50%",opacity:"80%",color:"white", fontSize:"7.5px",textAlign: "center",fontWeight:"bolder",display:"block"}}>10</p>
                            </button>
                           
                
                            <div className="dropdown" >
                                <div className="dropdown-toggle ml-auto text-success" style={{marginRight:"30px",color:"white",fontSize:"18px",fontFamily:"'Times New Roman', Times, serif",borderRadius:"10px",borderColor:"none",color:"black"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </div>
                                <div className="dropdown-menu" style={{fontSize:"22px",fontFamily:"'Times New Roman', Times, serif",textAlign:"center"}} aria-labelledby="dropdownMenuButton">
                                <div className="dropdown-item2 w-100" style={{textAlign:"center",height:"30px",cursor: "pointer"}}>Settings</div>
                                <hr></hr>
                                <div onClick={(e)=>this.logout()}  className="dropdown-item2 w-100" style={{textAlign:"center",height:"30px",cursor:"pointer"}}>Logout</div>
                                </div>
                            </div>
                            
                            </div>

                        </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default withRouter(Navbar)
