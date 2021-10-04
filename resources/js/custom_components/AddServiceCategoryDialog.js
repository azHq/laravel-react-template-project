import React, { Component } from 'react'
import {HiOutlineMail} from 'react-icons/hi';
import {VscLock} from 'react-icons/vsc';
import white_logo from '../src/images/logo_white.png';
import logo from '../src/images/logo_overlay_green.png';
import OutlineButton from './OutlineButton';
import { MdEdit, MdLowPriority } from "react-icons/md";
import { HiOutlineX } from "react-icons/hi";
import { BiImage } from "react-icons/bi";
import { FiPaperclip } from "react-icons/fi";
import axios from 'axios';
import API from '../components/API';
import APIRequestFactory from '../components/APIRequestFactory';
export class AddServiceCategoryDialog extends Component {
    constructor(props){
        super(props);
        this.state={
            error:"",
            show_dialog:false,
            name:this.props.name,
            description:this.props.description,
            position:this.props.position,
            logo_name:null,
            price:this.props.price,
            image:null
        }
    }
    AddService=()=>{
        this.setState({show_dialog:true});
    }
    Submit= async (e)=>{
        e.preventDefault();
        if(this.state.name==null){
            alert("Please Enter Name");
            return;
        }
        if(this.state.image==null&&this.props.type=="add"){
            alert("Please Choose Logo");
            return;
        }
        this.setState({show_dialog:false});
        
       
        const formData = new FormData();
        formData.append("id",this.props.id);
        formData.append("category_id",this.props.category_id);
        formData.append("sub_category_id",this.props.sub_category_id);
        formData.append("name",this.state.name);
        formData.append("logo",this.state.image);
        formData.append("price",this.state.price);
        formData.append("position",this.state.position);
        formData.append("description",this.state.description);
        formData.append("logo_name",this.state.logo_name);
        console.log("name",this.state.name,"logo",this.state.image);
        const result=await APIRequestFactory.post(this.props.url,formData);
        console.log("result:",result.data);
        if(result.data.status=="success"){
            this.props.submit(e);
        }
        else{
            console.log(result.data);
            if(result.data.message.name!=null){
                alert("Request Fail\n"+result.data.message.name);
            }
            else{
                alert("Request Fail\n"+result.data.message);
            }
        }
    }
    onInputChange=(e,type)=>{

        
        if(type=="logo"){
            var logo=e.target.files[0];
            this.setState({
                image:e.target.files[0],
                logo_name:logo.name
            });
        }
        else{
            this.setState({
                [e.target.name]:e.target.value,
            });
        }
        
    }

    render() {
      
        return (
            <div>
                 <div className="center" style={{height:"100vh",width:"100vw",position:"fixed",top:"0px",background:"rgba(0,0,0,.5)"}}>
                        <div className="shadow-sm center" style={{height:`${this.props.class_name=="service"?"85%":"80%"}`,marginTop:`${this.props.class_name=="service"?"70px":"50px"}`,width:"40%",marginRight:"150px",position:"relative",background:"white",borderRadius:"15px",overflowY:"scroll"}}>
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
                                    {
                                        this.props.class_name=="service"&&
                                        <div>
                                            <div style={{height:"20px"}}></div>
                                            <div>
                                                <div  className="d-flex ml-2 mb-1">Enter Price*</div>
                                                <div className="d-flex flex-row center-vertical" >
                                                    <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><FiPaperclip color="white" size="20"/></div>
                                                    <input value={this.state.price} required={true} onChange={e=>this.onInputChange(e,"price")} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} type="number" id="price" name="price" placeholder="Enter Price"/>
                                                </div>
                                            </div>
                                            <div style={{height:"20px"}}></div>
                                            <div>
                                                <div  className="d-flex ml-2 mb-1">Write Description</div>
                                                <div className="d-flex flex-row center-vertical" >
                                                    <input value={this.state.description} required={true} onChange={e=>this.onInputChange(e,"description")} className="w-100" style={{height:"75px",background:"white",border:"1.5px solid var(--overlay-green)",borderRadius:"10px",outline:"none",paddingLeft:"8px"}} type="text" id="description" name="description" placeholder="Write Description"/>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                    <div style={{height:"20px"}}></div>
                                    <div>
                                        <div  className="d-flex ml-2 mb-1">Enter Position*</div>
                                        <div className="d-flex flex-row center-vertical" >
                                            <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><MdLowPriority color="white" size="20"/></div>
                                            <input value={this.state.position} required={true} onChange={e=>this.onInputChange(e,"position")} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",paddingLeft:"8px"}} type="number" id="position" name="position" placeholder="Enter Position"/>
                                        </div>
                                    </div>
                                    <div style={{height:"20px"}}></div>
                                    <div>
                                        <div className="d-flex ml-2 mb-1">Choose Image*</div>
                                        <div className="d-flex flex-row center-vertical" >
                                            <div className="center" style={{width:"55px",background:"var(--overlay-green)",height:"45px",borderRadius:"50px 0px 0px 50px"}}><BiImage color="white" size="20"/></div>
                                            <input required={true} onChange={e=>this.onInputChange(e,"logo")} className="w-100" style={{height:"45px",background:"white",borderRight:"1.5px solid var(--overlay-green)",borderTop:"1.5px solid var(--overlay-green)",borderBottom:"1.5px solid var(--overlay-green)",borderRadius:"0px 50px 50px 0px",outline:"none",padding:"6px 5px 6px 8px"}} type="file" placeholder={this.props.type=="add"?"Choose Logo":this.props.logo} id="logo" name="logo" />
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
AddServiceCategoryDialog.defaultProps = {
    category_id:0,
    type:0,
    class_name:"category",
    description:"",
    price:"",
};
export default AddServiceCategoryDialog
