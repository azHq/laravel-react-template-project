import React, { Component } from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {VscLock} from 'react-icons/vsc';
import white_logo from '../src/images/logo_white.png';
import logo from '../src/images/logo_overlay_green.png';
import OutlineButton from './OutlineButton';
import { MdEdit } from "react-icons/md";
import { HiOutlineX } from "react-icons/hi";
import { BiImage } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import { GiSmartphone } from "react-icons/gi";
import APIRequestFactory from '../components/APIRequestFactory';

export class AddOptionDialog extends Component {
    constructor(props){
        super(props);
        this.state={
            error:"",
            show_dialog:false,
            name:props.name,
            price:props.price,
            service_id:props.service_id,
        }
    }
    AddService=()=>{
        this.setState({show_dialog:true});
    }
    Submit= async (e)=>{
        e.preventDefault();
        if(this.state.name==null||this.state.name.length==0){
            alert("Please Enter Name");
            return;
        }
        if(this.state.price==null||this.state.price.length==0){
            alert("Please Enter Price");
            return;
        }
        this.setState({show_dialog:false});
       
        const formData = new FormData();
        formData.append("id",this.props.id);
        formData.append("name",this.state.name);
        formData.append("price",this.state.price);
        formData.append("service_id",this.state.service_id);
        console.log(this.state.service_id);
        const result=await APIRequestFactory.post(this.props.url,formData);
        if(result.data.status=="success"){
            this.props.submit(e);
        }
        else{
            console.log(result.data);
            if(result.data.email!=null){
                alert(result.data.name[0]);
            } 
            else if(result.data.password){
                alert(result.data.price[0]);
            } 
            else{
                alert(result.data);
            } 

        }
    }
    onInputChange=(e,type)=>{

        this.setState({
            [e.target.name]:e.target.value,
        });
        
    }
    render() {
      
        return (
            <div>
                 <div className="center" style={{height:"100vh",width:"100vw",position:"fixed",top:"0px",background:"rgba(0,0,0,.5)"}}>
                        <div className="shadow-sm center" style={{height:`${this.props.class_name=="service"?"85%":"80%"}`,marginTop:`${this.props.class_name=="service"?"70px":"50px"}`,width:"40%",marginRight:"150px",position:"relative",background:"white",borderRadius:"15px"}}>
                            <div style={{background:"white",width:"60%"}} >
                                <form style={{width:"100%",height:"100%"}} >
                                   {this.props.class_name!="service"&&
                                        <div style={{textAlign:"center"}}>
                                            <img src={logo} height="120" width="170"></img>
                                        </div>
                                   }
                                    <div style={{height:`${this.props.class_name=="service"?"20px":"30px"}`}}></div>
                                    {this.state.error.length>0&&<Alert key='3'  variant='danger'>
                                        {this.state.error}
                                    </Alert>}
                                    <div style={{height:"20px"}}></div>
                                    <div>
                                        <div  className="d-flex ml-2 mb-1">Enter Name*</div>
                                        <div className="d-flex flex-row center-vertical" >
                                            <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><FiPaperclip color="white" size="20"/></div>
                                            <input value={this.state.name} required={true} onChange={e=>this.onInputChange(e,"name")} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} type="text" id="name" name="name" placeholder="Enter Name"/>
                                        </div>
                                    </div>
                                    <div>
                                        <div style={{height:"20px"}}></div>
                                        <div>
                                            <div  className="d-flex ml-2 mb-1">Enter Price*</div>
                                            <div className="d-flex flex-row center-vertical" >
                                                <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><HiOutlineMail color="white" size="20"/></div>
                                                <input value={this.state.price} required={true} onChange={e=>this.onInputChange(e,"price")} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} type="number" id="price" name="price" placeholder="Enter Price"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{height:"10px"}}></div>
                                    <div style={{height:`${this.props.class_name=="service"?"50px":"80px"}`}}></div>
                                    <button type='submit' onClick={(e)=>{this.Submit(e)}} className="w-100" style={{height:"45px",background:"var(--overlay-green)",border:"1.5px solid var(--overlay-green)",outline:"none",borderRadius:"50px",color:"white",fontSize:"17px",fontWeight:"700px"}} placeholder="User Name">SUBMIT</button>
                                </form>
                            </div>
                            <div className="center" onClick={this.props.cancel} style={{height:"30px",width:"30px",background:"var(--overlay-green)",position:"absolute",borderRadius:"50%",right:"20px",top:"20px",cursor:"pointer"}}>
                                <HiOutlineX size="18" color="white"></HiOutlineX>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
AddOptionDialog.defaultProps = {
    id:0,
    class_name:"category",
};
export default AddOptionDialog
