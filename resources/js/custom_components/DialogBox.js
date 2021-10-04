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
import PropTypes from 'prop-types';
import Spacer from './Spacer';
export class DialogBox extends Component {
    constructor(){
        super();
        
    }
    render() {
        return (
            <div>
                 <div className="center" style={{height:"100vh",width:"100vw",position:"fixed",top:"0px",background:"rgba(0,0,0,.5)"}}>
                        <div className="shadow-sm center-horizontal" style={{height:"75%",marginTop:"50px",width:"40%",marginRight:"150px",position:"relative",background:"white",borderRadius:"15px"}}>
                            <div style={{background:"white",width:"60%"}} >
                                    <div style={{height:"50px"}}></div>
                                    <div style={{textAlign:"center"}}>
                                        <img src={logo} height="110" width="160"></img>
                                    </div>
                                    <div style={{height:"70px"}}></div>
                                    <div className="center">
                                        <div style={{fontWeight:"bolder",fontSize:"24px",textAlign:"center"}}>
                                            {this.props.body}
                                        </div>
                                    </div>
                                    <div style={{height:"30%"}}></div>
                                    <div className="center">
                                        <button type='submit' onClick={this.props.cancel} className="w-100" style={{height:"45px",width:"220px",background:"var(--overlay-green)",border:"1.5px solid var(--overlay-green)",outline:"none",borderRadius:"50px",color:"white",fontSize:"18px",fontWeight:"bolder"}} placeholder="User Name">{this.props.left_button_text}</button>
                                        <Spacer width="50%"></Spacer>
                                        <button type='submit' onClick={this.props.yes} className="w-100" style={{height:"45px",width:"220px",background:"var(--overlay-green)",border:"1.5px solid var(--overlay-green)",outline:"none",borderRadius:"50px",color:"white",fontSize:"18px",fontWeight:"bolder"}} placeholder="User Name">{this.props.right_button_text}</button>
                                    </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
DialogBox.defaultProps = {
    body:"Do You Want Delete This Item?",
    left_button_text:"No",
    right_button_text:"Yes",
};
export default DialogBox
