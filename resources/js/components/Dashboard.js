import React, { Component } from 'react'
import { Redirect } from 'react-router';
import { Button } from 'react-bootstrap';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";
import Sidebar from './Sidebar';
import Navbar from './Navbar';
export default class Dashboard extends Component {

    constructor(){
        super();
        this.state={
            logIn:true,
            pageName:localStorage.getItem("page_name")?localStorage.getItem("page_name"):"service_category",
            data:localStorage.getItem("data")
        }
        let apiToken=localStorage.getItem("apiToken");
        if(!apiToken){
            this.state.logIn=false;
        }
    }
    render() {
        return (
            <>
                <div style={{height:"100vh",width:"100vw"}}>
                    <div style={{height:"100%",paddingTop:"86px"}}>
                        {/* navbar */}
                        <div style={{height:"94px",width:"100%",position:"fixed",left:"0px",top:"0px",zIndex:2}}>
                            <Navbar  ChangePage={this.ChangePage}></Navbar>
                        </div>
                        <div className="d-flex flex-row" style={{height:"100%",width:"100%"}}>
                           {/* sidebar */}
                           <div style={{width:"160px"}}>
                              <Sidebar ChangePage={this.ChangePage}></Sidebar>
                           </div>
                           {/* main body */}
                           <div style={{width:"100%",height:"89vh",zIndex:1}}>
                              {/* <this.RenderMainPage pageName={this.state.pageName}></this.RenderMainPage> */}
                              <Switch>
                                <Route exact path="/caregiver_list">
                                    <Home></Home>
                                 </Route>
                              </Switch>
                           </div>
                        </div>
                    </div>
                    
                </div>
                
            </>
        )
    }
}
