import React, { Component } from "react"
import './FamForm.css'
//import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

// import { threadId } from "worker_threads";

const headingStyle =
{
    marginTop: '10px',
    marginBottom: '10px',
    fontSize: '40px',
    fontFamily: 'Times New Roman'
}

const namestyle =
{
    width: '300px',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '5px',
    borderRadius: '5px',
    border: '1px solid #cbcbcb',
    boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.18)',
    fontSize: '16px'
}



class FamForm extends Component {
    constructor() {
        super()
        this.state =
            {
                pid: "",
                fname: "",
                lname: "",
                dob: "",
                blood: "",
                age: "",
                gender: ""
            }
        this.handleChange = this.handleChange.bind(this)
        this.toggle = this.toggle.bind(this);
        this.select = this.select.bind(this);
        this.print = this.print.bind(this);
        this.userAction = this.userAction.bind(this);
    }


    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    async userAction() {
        const response = await fetch('http://127.0.0.1:5008/family', {
            method: 'POST',
            body: JSON.stringify(this.state), // string or object
            headers: {
                'Content-Type': 'application/json'
            }
        });       
        const myJson = await response.json();
        console.log(myJson)
    }
    select(event) {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
            value: event.target.innerText
        });
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target
        // json.type = checked;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
        console.log({ name, value, type, checked })
    }

    print() {
        // console.log(this.state)
        this.userAction();
        // var final = {}
        // final.lastname = this.state.lname
        // final.finalname = this.state.fname
        // final.age = this.state.age
        // final.blood = this.state.blood
        // final.gender = this.state.gender
        // final.pid = this.state.pid

        // console.log(final)

    }

    render() {
        return (
            <form id="main" encType="multipart/form-data">
                <br />
                <label style={headingStyle}>
                    FORM FOR FAMILY
                </label>
                <br />
                <br />
                <label className="labelstyle">Patient ID   </label>
                <input type="text"
                    value={this.state.pid}
                    name="pid"
                    placeholder="Patient ID"
                    onChange={this.handleChange}
                    style={namestyle} />
                <br />
                <br />
                <label className="labelstyle">First Name   </label>
                <input type="text"
                    value={this.state.fname}
                    name="fname"
                    placeholder="First Name"
                    onChange={this.handleChange}
                    style={namestyle} />
                <br />
                <br />
                <label className="labelstyle">Last Name   </label>
                <input type="text"
                    value={this.state.lname}
                    name="lname"
                    placeholder="Last Name"
                    onChange={this.handleChange}
                    style={namestyle} />
                <br />
                <br />
                <label className="labelstyle">Date of Birth   </label>
                <input type="text"
                    value={this.state.dob}
                    name="dob"
                    placeholder="YYYY/MM/DD"
                    onChange={this.handleChange}
                    style={namestyle} />
                <br />
                <br />
                <label className="labelstyle">Age   </label>
                <input type="text"
                    value={this.state.age}
                    name="age"
                    placeholder="Age"
                    onChange={this.handleChange}
                    style={namestyle} />
                <br />
                <br />
                <label className="labelstyle">Gender     </label>
                <select className="custom-select"
                    value={this.state.gender}
                    onChange={this.handleChange}
                    name="gender">
                    <option placeholder="gender" value="">-----Please choose a gender------</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                <br />
                <br />
                <label className="labelstyle">Blood Group     </label>
                <select className="custom-select"
                    value={this.state.blood}
                    onChange={this.handleChange}
                    name="blood">
                    <option placeholder="bloodgrp" value="">---Please choose a Blood Group---</option>
                    <option value="A +ve">A +ve</option>
                    <option value="A -ve">A -ve</option>
                    <option value="B +ve">B +ve</option>
                    <option value="B -ve">B -ve</option>
                    <option value="AB +ve">AB +ve</option>
                    <option value="AB -ve">AB -ve</option>
                    <option value="O +ve">O +ve</option>
                    <option value="O -ve">O -ve</option>
                </select>
                <br />
                <br />
                {/* <label class="labelstyle">Blood Groups    </label>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle caret>
                        {this.state.value}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem value="apve" onClick={this.select}>A +ve</DropdownItem>
                        <DropdownItem value="anve" onClick={this.select}>A -ve</DropdownItem>
                        <DropdownItem value="abpve" onClick={this.select}>AB +ve</DropdownItem>
                        <DropdownItem value="abnve" onClick={this.select}>AB -ve</DropdownItem>
                        <DropdownItem value="bpve" onClick={this.select}>B +ve</DropdownItem>
                        <DropdownItem value="bnve" onClick={this.select}>B -ve</DropdownItem>
                        <DropdownItem value="opve" onClick={this.select}>O +ve</DropdownItem>
                        <DropdownItem value="onve" onClick={this.select}>O -ve</DropdownItem>
                    </DropdownMenu>
                </Dropdown> */}
                {/* <label class ="container">
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='apve' 
                           checked={this.state.bloodgrp === 'apve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark"/>A +ve
                </label>
                <label class ="container">
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='anve' 
                           checked={this.state.bloodgrp === 'anve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark" />A -ve
                </label>
                <br />
                <label class ="container">
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='abpve' 
                           checked={this.state.bloodgrp === 'abpve'} 
                           onChange={this.handleChange}
                            /> 
                    <span class = "checkmark"/>AB +ve
                </label>
                <label class ="container" >
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='abnve' 
                           checked={this.state.bloodgrp === 'abnve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark"/>AB -ve
                </label>
                <br />
                <label class ="container" >
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='bpve' 
                           checked={this.state.bloodgrp === 'bpve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark"/>B +ve
                </label>
                <label class ="container">
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='bnve' 
                           checked={this.state.bloodgrp === 'bnve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark"/>B -ve
                </label>
                <br />
                <label class ="container" >
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='opve' 
                           checked={this.state.bloodgrp === 'opve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark"/>O +ve
                </label>
                <label class ="container">
                    <input type ="radio" 
                           name ="bloodgrp" 
                           value='onve' 
                           checked={this.state.bloodgrp === 'onve'} 
                           onChange={this.handleChange}
                           /> 
                    <span class = "checkmark" />O -ve
                </label> */}
                <br />
                <button className="submit" name="submit" onClick={()=> this.userAction()}>Submit</button>
                {/* <a onClick={this.print} href="#">Just sample</a> */}
            </form>

        )
    }
}



export default FamForm
