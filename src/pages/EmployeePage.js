
import React from 'react';
import { 
    Button, Form, FormGroup, Label, Input ,
    ListGroup, ListGroupItem
} from 'reactstrap';
import {
    Card, CardBody, CardHeader, CardTitle
  } from 'reactstrap';
class EmployeePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isEditMode : false,
            idNumber : "",
            fullName : "",
            email : "",
            gender : "",
            birthdate : "",
            skills : [],
            note : "",
            alert : "",
            posts : [],
        }
    }
    
    componentDidMount() {
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value });
    }

    changeEditMode = (e) => {
        let isEditMode = this.state.isEditMode
        this.setState({isEditMode: !isEditMode});
    }

    handleArrChange = (e) => {
        let value = Array.from(e.target.selectedOptions, option => option.value);
        this.setState({skills: value});
    }

    render(){
        const isEditMode = this.state.isEditMode
        if(!isEditMode)
            return (
                <React.Fragment>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h5">Employee</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem style={{ textAlign: "left" }}>ID : {this.state.idNumber ? this.state.idNumber : 'none' }</ListGroupItem>
                                <ListGroupItem style={{ textAlign: "left" }}>Full Name {this.state.fullName ? this.state.fullName : 'none'}</ListGroupItem>
                                <ListGroupItem style={{ textAlign: "left" }}>E-mail : {this.state.email ? this.state.email : 'none' }</ListGroupItem>
                                <ListGroupItem style={{ textAlign: "left" }}>Gender : {this.state.gender ? this.state.gender : 'none'}</ListGroupItem>
                                <ListGroupItem style={{ textAlign: "left" }}>Birthdate : {this.state.birthdate ? this.state.birthdate : 'none'}</ListGroupItem>
                                <ListGroupItem style={{ textAlign: "left" }}>Skills : {this.state.skills.join(", ")}</ListGroupItem>
                                <ListGroupItem style={{ textAlign: "left" }}>Note : {this.state.note}</ListGroupItem>
                            </ListGroup>
                            <br/>
                            <Button 
                                className="pull-right" size="sm" color="primary" 
                                onClick={this.changeEditMode}
                            >Edit</Button>
                        </CardBody>
                    </Card>
                </React.Fragment>
            )
        else
            return (
                <React.Fragment>
                    <Card>
                        <CardHeader>
                            <CardTitle tag="h5">Employee</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <Form >
                                <br/>
                                <FormGroup style={{ textAlign: "left" }} >
                                    <Label for="exampleIDNumber">ID Number</Label>
                                    <Input 
                                        type="number" name="number" id="exampleIDNumber"
                                        value={this.state.idNumber} 
                                        onChange={(e) => this.setState({ idNumber : e.target.value })} 
                                    />
                                </FormGroup>
                                <br/>
                                <FormGroup style={{ textAlign: "left" }} >
                                    <Label for="examplefullName">Full Name</Label>
                                    <Input 
                                        type="text" name="number" id="examplefullName"
                                        value={this.state.fullName} 
                                        onChange={(e) => this.setState({ fullName : e.target.value })} 
                                    />
                                </FormGroup>
                                <br/>
                                <FormGroup style={{ textAlign: "left" }} >
                                    <Label for="exampleEmail">Email</Label>
                                    <Input 
                                        type="email" name="email" id="exampleEmail"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email : e.target.value })} 
                                    />
                                </FormGroup>
                                <br/>
                                <FormGroup style={{ textAlign: "left" }} >
                                    <Label for="exampleBirthDate">Birth Date</Label>
                                    <Input 
                                        type="date" name="birthdate" id="exampleBirthDate"
                                        value={this.state.birthdate} 
                                        onChange={(e) => this.setState({ birthdate : e.target.value })} 
                                    />
                                </FormGroup>
                                <br/>
                                <FormGroup style={{ textAlign: "left" }}  >
                                    <Label for="exampleSelect">Gender</Label>
                                    <Input 
                                        type="select" name="select" id="exampleSelect"
                                        value={this.state.gender} 
                                        onChange={(e) => this.setState({ gender : e.target.value })} 
                                    >
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Input>
                                </FormGroup>
                                <br/>
                                <FormGroup style={{ textAlign: "left" }} >
                                    <Label for="exampleSelectMulti">Skill</Label>
                                    <Input 
                                        type="select" name="skills" id="exampleSelectMulti" 
                                        multiple
                                        value={this.state.skills} 
                                        onChange={this.handleArrChange}
                                    >
                                    <option value="Python">Python</option>
                                    <option value="CPP">CPP</option>
                                    <option value="C#">C#</option>
                                    <option value="Java">Java</option>
                                    <option value="JavaScript">JavaScript</option>
                                    </Input>
                                </FormGroup>
                                <br/>
                                <FormGroup style={{ textAlign: "left" }} >
                                    <Label for="exampleText">Note</Label>
                                    <Input 
                                        type="textarea" name="note" id="exampleText" 
                                        value={this.state.note} 
                                        onChange={this.handleInputChange}
                                    />
                                </FormGroup>
                                <br/>
                                <Button 
                                    className="pull-right" size="sm" color="success"
                                    onClick={this.changeEditMode}
                                >Save</Button>

                            </Form>
                    </CardBody>
                    </Card>
                </React.Fragment>
            )
    }
}

export default EmployeePage
