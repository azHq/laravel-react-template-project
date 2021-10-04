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
import ForgetPassword from './ForgetPassword';
import { Redirect, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login({setApiToken}){

    const[error,setError]=useState("");
    const[forget_password,forgetPassword]=useState(false);
    const[logIn,updateLoginState]=useState(false);
    const[user,setUser]=useState({
        email:"",
        password:""
    });
    const[deviceId,setDeviceId]=useState("");
    const {email,password}=user;
    const onInputChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
        console.log('email',email,'password',password);
    }
    const history=useHistory();
    const submit=async (e)=>{
        e.preventDefault();
        localStorage.removeItem("apiToken");
        if(email.length<5) {
            alert("Please Enter Email");
            return;
        }
        if(password.length<6) {
            alert("Please Enter Valid Password");
            return;
        }
        user.type="moderator";
        user.deviceId=deviceId;
        axios.defaults.withCredentials = true;
        console.log(user);
        const result=await axios.post(API.login,user);
        if(result.data.status=="success"){
            console.log("hello");
           // apiToken=result.data.apiToken;
            setApiToken(result.data.apiToken);
            localStorage.setItem("apiToken",result.data.apiToken);
            //updateLoginState(true);
            history.push("/dashboard");
        }
        else{
            console.log(result.data.message);
            if(result.data.message.email||result.data.message.password) setError(result.data.message.email[0]+"\n"+result.data.message.password[0]);
            else setError(result.data.message);
        }
        

    }
   
    let apiToken=localStorage.getItem("apiToken");
    if(apiToken){
        return <Redirect to='/'></Redirect>
    } 
    return(
        <>
         <div style={{height:"100vh",width:"100vw"}}>
        {!forget_password?
           <div className="h-100" style={{height:"100vh",width:"100vw"}}>
             <div className="row h-100">
                <div className="col-6 h-100 center" style={{backgroundImage: 'linear-gradient(to right,var(--dark-green), var(--overlay-green))'}}>
                    <img style={{opacity:'.85'}} src={white_logo} height="155" width="220"></img>
                </div>
                <div className="col-6 bg-white h-100 center" >
                    <form style={{width:"50%",height:"65%"}} method='POST'>
                        <div style={{textAlign:"center"}}>
                            <img src={logo} height="120" width="170"></img>
                        </div>
                        <div style={{height:"30px"}}></div>
                        {error.length>0&&<Alert key='3'  variant='danger'>
                            {error}
                        </Alert>}
                        <div style={{height:"20px"}}></div>
                        <div>
                            <div  className="d-flex ml-2 mb-1">Email</div>
                            <div className="d-flex flex-row center-vertical" >
                                <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><HiOutlineMail color="white" size="20"/></div>
                                <input required={true} onChange={e=>onInputChange(e)} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} type="email" id="email" name="email" placeholder="Email"/>
                            </div>
                        </div>
                        <div style={{height:"20px"}}></div>
                        <div>
                            <div className="d-flex ml-2 mb-1">Password</div>
                            <div className="d-flex flex-row center-vertical" >
                                <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><VscLock color="white" size="20"/></div>
                                <input required onChange={e=>onInputChange(e)} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} placeholder="Password" name="password" type="password"/>
                            </div>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <p onClick={e=>forgetPassword(true)} id="forget-password" >Forget Password?</p>
                        <div style={{height:"80px"}}></div>
                        <button type='submit' onClick={e=>submit(e)} className="w-100" style={{height:"45px",background:"var(--overlay-green)",border:"1.5px solid var(--overlay-green)",outline:"none",borderRadius:"50px",color:"white",fontSize:"17px",fontWeight:"700px"}} placeholder="User Name">LOGIN</button>
                    </form>
                </div>
             </div>
           </div>
           :<ForgetPassword forgetPassword={forgetPassword}></ForgetPassword>
           }
           </div>
        </>
    );
        
}
export default Login;

if (document.getElementById('Login')) {
    ReactDOM.render(<Login/>, document.getElementById('Login'));
}