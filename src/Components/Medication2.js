import React, {Component} from "react"
import {Card, CardBody, CardText, CardTitle, CardSubtitle} from 'reactstrap'
// import 'bootstrap/dist/css/bootstrap.css'

class Medication2 extends Component{
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
          <CardBody>
            <CardTitle>{props.DefName}</CardTitle>
            <br /><br />
            <CardSubtitle>Medication: {props.MedN}</CardSubtitle>
            <CardText>Symptoms: {props.Symp}</CardText>
          </CardBody>
        </Card>)
      }

    handleChange(event)
    {
        const { name, value } = event.target
        this.setState({[name]: value });
        console.log(this.state.special)
    }

    async userAction() {
        
        const response = await fetch('http://127.0.0.1:5008/medication2/' + this.state.special);
        const myJson = await response.json();
        this.setState({ "userdata": myJson })
        this.setState({ "clicked": !this.state.clicked })
      }

    render()
    {
        return(
            <div>
                <br />
                <label className ="headingstyle">CHECK FOR MEDICATION</label>
                <br />
                <br />
                <label className="labelstyle">Deficiency</label>
                <select className = "custom-select"
                        value = {this.state.special}
                        onChange={(e) => {this.setState({ special: e.target.value }); console.log(e.target.value)}}
                        name ="special">
                            <option value="">-Choose a Deficiency</option>
                            <option value="Vitamin D">Vitamin D</option>
                            <option value="B12">B12</option>
                            <option value="Calcium">Calcium</option>
                            <option value="Vitamin A">Vitamin A</option>
                            <option value="Iron">Iron</option>
                </select>
                <br />
                <br />
                <button className="checking" onClick={() => this.userAction()}>Check</button><br />
                <br />
                {this.card(this.state.userdata)}
            </div>
        )
    }
}

export default Medication2
