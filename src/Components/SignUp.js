import React, { Component } from 'react'
import { Form, Segment, Divider, Button, Grid, Dropdown, Checkbox } from 'semantic-ui-react'
import fetchData from './apicalls'

var api = new fetchData()

const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class FormExampleSubcomponentControl extends Component {
    state = {coordinator: false, subjects: {}, status: false, statusmsh: "", statusColor: ""}

    handleChange = (e, { value }) => this.setState({ value })

    manageChange = (e) => {
        // console.log(e.target.name)
        this.state[e.target.name] = e.target.value
    }

    singup = () => {
        api.singup(this.state).then((value) => {
            console.log(value)
            if(value.status === "error"){
                console.log(this.state.status)
                this.state.statusmsh = "Incorrect data or the user already exists"
                this.state.statusColor = "red"
                this.setState({status: true})
            }
            else if(value.status === "success"){
                console.log(value)
                this.state.statusmsh = "Success! Please go back and login"
                this.state.statusColor = "green"
                this.setState({status: true})
            }
        })
    }
    render() {
        const { value } = this.state
        return (
            <div>
                <Grid>
                    <Grid.Column style={{ flex: 1 }}></Grid.Column>
                    <Grid.Column style={{ flex: 1 }}>
                        <Segment style={{ width: "100%", marginTop: "50px", marginLeft: 0 }}>
                            <Form>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        onChange={(e) => this.manageChange(e)}
                                        label='First name'
                                        name="firstName"
                                        placeholder='First name' />
                                    <Form.Input
                                        fluid
                                        label='Last name'
                                        onChange={(e) => this.manageChange(e)}
                                        name="lastName"
                                        placeholder='Last name' />
                                    <Form.Select
                                        fluid
                                        id='gender'
                                        value={this.state.gender}
                                        onChange={(e, value) => this.setState({ gender: value.value })}
                                        label='Gender'
                                        options={options}
                                        placeholder='Gender'
                                    />
                                </Form.Group>
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid
                                        label='Last name'
                                        onChange={(e) => this.manageChange(e)}
                                        name="parentName"
                                        placeholder='Parent Name' />
                                    <Form.Select
                                        fluid
                                        name="dept"
                                        onChange={(e, value) => this.setState({ dept: value.value })}
                                        label='Department'
                                        options={dept}
                                        placeholder='EX: ISE'
                                    />

                                </Form.Group>
                                <Form.TextArea
                                    label='Address'
                                    name="address"
                                    placeholder='Type Here'
                                    onChange={(e) => this.manageChange(e)}
                                />
                                <Divider />
                                <Form.Group widths='equal'>
                                    <Form.Input
                                        fluid label='Hospital ID Number'
                                        name="hid"
                                        placeholder='Ex: 1MH25RP005'
                                        onChange={(e) => this.manageChange(e)}
                                    />
                                    <Form.Input
                                        fluid
                                        label='Password'
                                        name="password"
                                        placeholder='EX: password123'
                                        onChange={(e) => this.manageChange(e)}
                                    />

                                </Form.Group>
                                <Divider />
                                <Form.Field>
                                    <Checkbox toggle label="Signup as Coordinator" onClick={() => {
                                        this.setState({ coordinator: !this.state.coordinator })
                                        if (this.state.coordinator === true) {
                                            this.state.coordinator = false
                                        }
                                        else {
                                            this.state.coordinator = true
                                        }
                                    }} />
                                </Form.Field>
                                <p style={{fontWeight: "bolder", 
                                display: (this.state.status)?"":"none",
                                color: this.state.statusColor,
                                }}>{this.state.statusmsh}</p>
                                <Form.Button fluid onClick={() => this.singup()}>Submit</Form.Button>
                                <Divider horizontal>or</Divider>
                                <Form.Button fluid onClick={() => this.props.history.goBack()}>Login</Form.Button>
                            </Form>
                        </Segment>
                    </Grid.Column>

                    <Grid.Column style={{ flex: 1 }}></Grid.Column>
                </Grid>


            </div>
        )
    }
}

export default FormExampleSubcomponentControl
