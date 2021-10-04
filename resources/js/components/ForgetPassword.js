import {React,useState} from 'react';
import { Button,Form,InputGroup,FormControl,Alert} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import white_logo from '../src/images/logo_white.png';
import logo from '../src/images/logo_overlay_green.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {HiOutlineMail} from 'react-icons/hi';
import {VscLock} from 'react-icons/vsc';
import axios from 'axios';
import API from './API';

function ForgetPassword({forgetPassword}){

    const[error,setError]=useState("");
    const[user,setUser]=useState({
        email:"",
        password:""
    });
    const {email,password}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log('email',email,'password',password);
    }
    const submit=async (e)=>{
        e.preventDefault();
        user.type="moderator";
        const result=await axios.post(API.login,user);
        if(result.data.status=="success"){

        }
        else{
            setError(result.data.message.email[0]+"\n"+result.data.message.password[0]);
            console.log(result.data.message.email[0],result.data.message.password[0]);
        }
       
    }
    return(
        <>
           <div className="h-100" style={{height:"100vh",width:"100vw"}}>
             <div className="row h-100">
                <div className="col-12 bg-white h-100 center" >
                    <form style={{width:"30%",height:"65%"}} method='POST'>
                        <div style={{textAlign:"center"}}>
                            <img src={logo} height="120" width="170"></img>
                        </div>
                        <div style={{textAlign:"center",marginTop:"40px"}}>
                            <p style={{color:"var(--light-green)",fontSize:"20px",fontWeight:"500px"}}>Send Resend Password Link To Your Mail</p>
                        </div>
                        <div style={{height:"20px"}}></div>
                        {error.length>0&&<Alert key='3'  variant='danger'>
                            {error}
                        </Alert>}
                        <div style={{height:"10px"}}></div>
                        <div>
                            <div for="email" className="d-flex ml-2 mb-1">Email</div>
                            <div className="d-flex flex-row center-vertical" >
                                <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><HiOutlineMail color="white" size="20"/></div>
                                <input onChange={e=>onInputChange(e)} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} type="email" id="email" name="email" placeholder="Email"/>
                            </div>
                        </div>
                       
                        <div style={{height:"80px"}}></div>
                        <div style={{display:"flex"}}>
                            <button  onClick={e=>{
                                        e.preventDefault();
                                        forgetPassword(false);
                                    }
                                } className="w-100" style={{height:"45px",background:"var(--overlay-green)",border:"1.5px solid var(--overlay-green)",outline:"none",borderRadius:"50px",color:"white",fontSize:"17px",fontWeight:"700px",fontWeight:"bolder"}} placeholder="User Name">BACK</button>
                            <div style={{width:"100px"}}></div>
                            <button type='submit' onClick={e=>submit(e)} className="w-100" style={{height:"45px",background:"var(--overlay-green)",border:"1.5px solid var(--overlay-green)",outline:"none",borderRadius:"50px",color:"white",fontSize:"17px",fontWeight:"700px",fontWeight:"bolder"}} placeholder="User Name">SEND</button>
                        </div>
                    </form>
                </div>
             </div>
           </div>
        </>
    );
        
}
export default ForgetPassword;

if (document.getElementById('ForgetPassword')) {
    ReactDOM.render(<ForgetPassword/>, document.getElementById('ForgetPassword'));
}