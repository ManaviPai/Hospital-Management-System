import React, {Component} from "react"
import "./Medications.css"
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css'

const headingStyle = 
{
    marginTop :'10px',
    marginBottom: '10px',
    fontSize: '40px',
    fontFamily: 'Times New Roman'
}

class Medications extends Component{
    constructor()
    {
        super()
        this.state =
        {
            data: [],
            userdata: {},
            clicked: false,
            special: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.userAction = this.userAction.bind(this)
        this.card = this.card.bind(this)
    }

    card = (props) => {
        return (
          <Card style={{display: (!this.state.clicked)? "none": "block", width: "250px", breadth:"250px", marginLeft: "auto", marginRight:"auto"}}>
          <CardBody >
            <CardTitle>{props.DisName}</CardTitle>
            <br /><br />
            <CardSubtitle>Medicine : {props.MedN}</CardSubtitle>
            <CardText>Symptoms: {props.Symp}</CardText>
          </CardBody>
        </Card>)
      }

      async userAction() {
        
        const response = await fetch('http://127.0.0.1:5008/medication/' + this.state.special);
        const myJson = await response.json();
        this.setState({ "userdata": myJson })
        this.setState({ "clicked": !this.state.clicked })
      }

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
                <br />
                <label style ={headingStyle}>CHECK FOR MEDICATION</label>
                <br />
                <br />
                <label className="labelstyle">Disease</label>
                <select className = "custom-select"
                        value = {this.state.special}
                        onChange={(e) => {this.setState({ special: e.target.value }); console.log(e.target.value)}}
                        name ="special">
                            <option value="">-Choose a Disease</option>
                            <option value="Malaria">Malaria</option>
                            <option value="Typhoid">Typhoid</option>
                            <option value="Jaundice">Jaundice</option>
                            <option value="Cholera">Cholera</option>
                            <option value="H1N1">H1N1</option>
                            <option value="Dengue">Dengue</option>
                            <option value="Food Poisoning">Food Poisoning</option>
                            <option value="AIDS">AIDS</option>
                            <option value="Hypothyrodism">Hypothyrodism</option>
                            <option value="Hyperthyroid">Hyperthyroid</option>
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

export default Medications