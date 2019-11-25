import React, {Component} from "react"

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

class Medications extends Component{
    constructor()
    {
        super()
        this.state =
        {
            
        }  
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        //const {name, value} =  event.target
    }

    render()
    {
        return(
            <form id = "main">
                <br />
                <label className ="headingstyle">CHECK FOR MEDICATIONS</label>
                <br />
                <br />
                <label className ="labelstyle">Enter the Deficiency or Disease   </label>
                <input type="text" 
                       value= {this.state.disdef} 
                       name="disdef" 
                       placeholder="Disease/ Deficiency" 
                       onChange = {this.handleChange}
                       style = {namestyle} />
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
                <button className="checking" type="submit" name = "check">Check</button>
            </form>
        )
    }

    

}


export default Medications