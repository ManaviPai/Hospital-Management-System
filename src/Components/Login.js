import React from 'react'
import { Button, Icon, Form, Segment, Checkbox, Divider } from 'semantic-ui-react'
import fetchData from './apicalls'


const api = new fetchData()

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            "isadmin": false,
            "admin": false,
            "loginas": "Login as Receptionist/Doctor",
            "failloginmsg": "Incorrect Username or password",
            "loginfail": false
        }
        this.FormExampleForm = this.FormExampleForm.bind(this)
        this.manageChange = this.manageChange.bind(this)
        this.statusLogin = this.statusLogin.bind(this)
        this.signup = this.signup.bind(this)
        this.adminlogin = this.adminlogin.bind(this)
    }

    adminlogin = () => {
        this.props.history.push("/admin")
    }

    manageChange = (e) => {
        this.state[e.target.name] = e.target.value
    }

    signup = () => {
        this.props.history.push("/signup")
    }

    statusLogin = () => {
        api.login(this.state.username,
            this.state.password,
            this.state.isadmin).then((value) => {
                
                if (value.status === "success" && value.who === "receptionist") {
                    console.log(value)
                    this.props.history.push({pathname: '/user', state: {user: value.username}})
                }
                else if (value.status === "success" && value.who === "doctor") {
                    this.props.history.push({pathname: "/coordinator", state:{user: value.username} })
                }
                else if (value.status === "success" && value.who === "admin") {
                    this.props.history.push("/admin")
                }
                else {
                    this.setState({ loginfail: true })
                    console.log("trouble login in")
                }
            })
    }

    FormExampleForm = () => {
        return (
            <div style={{
                width: "100%",
                display: "grid",
                placeItems: "center",
                height: "100vh",
                margin: 0,
                backgroundColor: "blue"
            }}>
                {/* <h1 style={{ color: "white" }}>STUDENT MANAGEMENT SYSTEM</h1> */}
                <Segment style={{ width: "20%", marginTop: "-100px" }}>
                    <div style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                        <Icon name='student' size='massive' color='teal' />
                    </div>
                    <Form>
                        <Form.Field>
                            {/* <label>First Name</label> */}
                            <input placeholder='Username' name="username" onChange={(e) => this.manageChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            {/* <label>Last Name</label> */}
                            <input placeholder='Password' type="password" name="password" onChange={(e) => this.manageChange(e)} />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox toggle label="Login as Admin" onClick={() => {
                                this.setState({ "admin": !this.state.admin })
                                if (this.state.isadmin === true) {
                                    this.state.isadmin = false
                                    this.state.loginas = "Login as Receptionist/Doctor"
                                }
                                else {
                                    this.state.isadmin = true
                                    this.state.loginas = "Login as Admin"
                                }
                            }} />
                        </Form.Field>
                        {/* <Form.Field>
                            <Checkbox label='I agree to the Terms and Conditions' />
                        </Form.Field> */}
                        <p style={{
                            color: "red",
                            fontWeight: "bolder",
                            display: (this.state.loginfail) ? "" : "none"
                        }}>{this.state.failloginmsg}</p>
                        <Form.Group>
                            <Button type='submit' style={{ flex: 1 }} onClick={() => this.statusLogin()}>{this.state.loginas}</Button>
                        </Form.Group>
                        <Divider horizontal>Or</Divider>
                        <Form.Group style={{ display: "flex", alignContent: "center", justifyContent: "center" }}>
                            <Button type='submit' style={{ flex: 1 }} onClick={() => this.signup()}>Sign up</Button>
                            {/* <Divider vertical>or</Divider> */}
                        </Form.Group>
                    </Form>
                </Segment>
                <div style={{ position: "fixed", bottom: "0", height: "30px", width: "100%" }}>
                    <p style={{ textAlign: "center", fontWeight: "bolder" }}>Made with <Icon name="heart" />by Amit Jha</p>
                </div>
            </div>
        )
    }

    render() {
        return (
            this.FormExampleForm()
        )
    }

}

export default Login