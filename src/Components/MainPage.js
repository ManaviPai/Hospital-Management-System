import React, { Component } from "react"
import "./MainPage.css"
import {Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css';


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



// const userAction = async () => {
//     const response = await fetch('http://127.0.0.1:5008/home');
//     const myJson = await response.json(); //extract JSON from the http response
//     // do something with myJson
//   }

//const myJson

class MainPage extends Component {
  constructor() {
    super()
    this.state =
      {
        data: [],
        userdata: {},
        clicked: false
      }
    this.handleChange = this.handleChange.bind(this)
    this.userAction = this.userAction.bind(this)
    this.testprint = this.testprint.bind(this)
    this.renderCard = this.renderCard.bind(this)
    this.card = this.card.bind(this)
  }


  // card = (props) => {
  //   console.log(props)
  //   return (
  //     <div className="cardM" style={{ display: (!this.state.clicked) ? "none" : "", width: "300px", breadth: "300px", marginLeft: "auto", marginRight: "auto" }}>
  //       <div className="card mb-3" > 
  //         <div className="card-body" style ={{width: "235px", height: "300px"}}>
  //           <p className="card-title">{props.fname + "  " + props.lname}</p>
  //           <p className="card-text">
  //             <span>Patient ID: </span>{props.pid} <br />
  //             <span>Date of Birth: </span>{props.dob}
  //             <span>Age: </span>{props.age} <br />
  //             <span>Gender: </span>{props.gender} <br />
  //             <span>Blood Group: </span>{props.blood} <br />
  //             <span>Diseases: </span>{props.disease}<br />
  //             <span>Deficiency: </span>{props.deficiency}<br />
  //           </p>
  //         </div>
  //       </div>
  //     </div>);
  // }

  card = (props) => {
    return (
      <Card className = "cardM" style={{display: (!this.state.clicked)? "none": "block",width: "250px", height:"260px", marginLeft: "auto", marginRight:"auto"}}>
      <CardBody>
        <CardTitle className = "card-title">{props.fname + "  " + props.lname}</CardTitle>
        <br /><br />
        <CardSubtitle>Patient ID: {props.pid}</CardSubtitle>
        <CardText>Date of Birth: {props.dob} <br/>
                  Age: {props.age} <br />
                  Gender: {props.gender}<br />
                  Blood Group: {props.blood}<br />
                  Disease: {props.disease}<br />
                  Deficiency: {props.deficiency}</CardText>
      </CardBody>
    </Card>)
  }

  renderCard = () => {
    // this.card(this.state.userdata)
    console.log(this.state.userdata)
  }

  async userAction(fname, lname) {
    console.log(this.state.pid)
    const response = await fetch('http://127.0.0.1:5008/home', {
      method:'POST',
      body: JSON.stringify({fname, lname}),
      headers: {
        'Content-Type':  'application/json'
      }
    });
    const myJson = await response.json();
    this.setState({ "userdata": myJson })
    // this.testprint()
    this.setState({ "clicked": !this.state.clicked })
    // console.log(this.state.clicked)
  }

  // handleData = () => {
  //     fetch('http://127.0.0.1:5008/home')
  //     .then(response => response.json())
  //     .then(data => this.setState({ items: data }));
  //   }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value });
    console.log({ name, value })
  }

  onSubmit = event => {
    event.preventDefault();
    const pid = this.pid.value;
    const fname = this.fname.value;
    const lname = this.lname.value;
    const dob = this.dob.value;
    const gender = this.gender.value;
    const blood = this.blood.value;
    const age = this.age.value;
    const info = { pid: pid, fname: fname, lname: lname, dob: dob, gender: gender, blood: blood, age: age };
    const data = [...this.state.data, info];
    this.setState({
      data: data
    });
  };

  testprint = () => {
    // console.log(this.state.userdata)
  }

  render() {
    return (
      <div>
        <form id="main">
          <br />
          <label className="headingstyle">PATIENT RECORD SYSTEM</label>
          <br />
          <br />
          <label className="labelstyle">Enter Patient First Name   </label>
          <input type="text"
            value={this.state.fname}
            name="fname"
            placeholder="First Name"
            onChange={this.handleChange}
            style={namestyle} />
          <br />
          <br />
          <label className="labelstyle">Enter Patient Last Name   </label>
          <input type="text"
            value={this.state.lname}
            name="lname"
            placeholder="Last Name"
            onChange={this.handleChange}
            style={namestyle} />
          {/* {this.state.items.map(
                (item, i) => 
                  <p key={i}>{item.List_Group}: {item.Content}</p>
                )} */}

          {/* <div className="row">
          {
            this.state.data.map((info, index) => <card key={index} info={info} />)
          }
        </div> */}
        </form>
        <br />
        <br />
        <button className="checking" onClick={() => this.userAction(this.state.fname, this.state.lname)}>Check</button>
        <br />
        <br />
        {this.card(this.state.userdata)}

      </div>


    )
  }
}


export default MainPage