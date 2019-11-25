import React, {Component} from "react"
import "./Doctors.css"
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css'

// var backImage={  
//     backgroundImage: `url(${Background})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat'
//   }

const headingStyle = 
{
    marginTop :'10px',
    marginBottom: '10px',
    fontSize: '40px',
    fontFamily: 'Times New Roman'
}



// const namestyle =
// {
//     width: '300px',
//     padding: '10px',
//     marginTop: '10px',
//     marginBottom: '5px',
//     borderRadius: '5px',
//     border: '1px solid #cbcbcb',
//     boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.18)',
//     fontSize: '16px'
// }

class Doctors extends Component{
    constructor()
    {
        super()
        this.state =
        {
            data: [],
            userdata: {},
            clicked: false,
            // specialisation: "",
            special: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.userAction = this.userAction.bind(this)
        // this.testprint = this.testprint.bind(this)
        this.renderCard = this.renderCard.bind(this)
        this.card = this.card.bind(this)
    }

    card = (props) => {
        // console.log(props)
        return (
          // <div className="col-md-6 col-lg-3" style={{display: (!this.state.clicked)? "none": "block"}}>
          //   <div className="card mb-3" style={{backgroundColor: "black"}}>
          //     <div className="card-body">
          //       <p className="card-title"><span>Doctor Name: </span>{props.fname + "  " + props.lname}</p>
          //       <p className="card-text">
          //         <span>Specialisation: </span>{props.specialisation} <br />
          //         <span>Time Start: </span>{props.timestart}<br />
          //         <span>Time End: </span>{props.timeend}<br />
          //                  </p>
          //     </div>
          //   </div>
          // </div>
          <Card className = "card" style={{display: (!this.state.clicked)? "none": "block", width: "180px", breadth:"180px", marginLeft: "auto", marginRight:"auto"}}>
          <CardBody>
            <CardTitle className= "card-title">{props.fname + "  "+ props.lname}</CardTitle>
            <br />
            <br />
            <CardSubtitle>{props.specialisation}</CardSubtitle>
            <CardText>{props.timestart +" - "+props.timeend}</CardText>
          </CardBody>
        </Card>)
      }
    
      renderCard = () => {
        // this.card(this.state.userdata)
        // console.log(this.state.userdata)
      }

      async userAction() {
        
        const response = await fetch('http://127.0.0.1:5008/doctor/' + this.state.special);
        const myJson = await response.json();

        // console.log(this.state.specialisation)
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
        this.setState({[name]: value });
        console.log(this.state.special)
        
      }

    render()
    {
        return(
            <div>
            <form id= "main">
                {/* <section style={backImage}></section> */}
                <br />
                <label style ={headingStyle}>DOCTORS APPOINTMENT</label>
                <br />
                <br />
                <label className="labelstyle">Specialisation</label>
                <select className = "custom-select"
                        value = {this.state.special}
                        onChange={(e) => {this.setState({ special: e.target.value }); console.log(e.target.value)}}
                        name ="special">
                            <option value="">-Choose a Specialisation</option>
                            <option value="Cardiologist">Cardiologist</option>
                            <option value="General Physician">General Physician</option>
                            <option value="Pediatrician">Pediatrician</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Gynaecologist">Gynaecologist</option>
                            <option value="Dietician">Dietician</option>
                </select>
                <br />
                <br />
            </form>
            <button className="checking" onClick={() => this.userAction()}>Check</button><br />
            <br />
            {this.card(this.state.userdata)}
            </div>
        )
    }
}

export default Doctors