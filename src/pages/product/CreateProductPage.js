import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Button, Row, Col, Jumbotron, Card, CardBody, Form, FormGroup, Label, Input, CardHeader, CardTitle } from 'reactstrap';

import instance from '../../api/AxiosInstance';
export const axios = instance.apiInstance();

class CreateProductPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            item : {
                name : "",
                description : "",
                basePrice : "",
                stock : "",
            }
        }
    }

    componentDidMount() {
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }


    createProduct = () => {
        const item = this.state.item;
        axios.post(`merchant/product`, item)
            .then(res => {
                this.props.history.push(`/product`);
            });        
    }

    render(){
        return (
            <React.Fragment>
            <Container>
                <Row>
                <Col />
                <Col lg="4">
                    <Jumbotron>
                        <Card>
                            <CardHeader>
                                <CardTitle>
                                    <h3 className="text-center" >
                                        Create Product
                                    </h3>
                                </CardTitle>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <FormGroup >
                                        <Label for="name">name</Label>
                                        <Input 
                                            type="text" name="name" id="name"
                                            value={this.state.item.name}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <FormGroup >
                                        <Label for="description">Description</Label>
                                        <Input 
                                            type="text" name="description" id="description"
                                            value={this.state.item.description}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <FormGroup >
                                        <Label for="basePrice">Base Price</Label>
                                        <Input 
                                            type="number" name="basePrice" id="basePrice"
                                            value={this.state.item.basePrice}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <FormGroup >
                                        <Label for="number">Stock</Label>
                                        <Input 
                                            type="text" name="stock" id="stock"
                                            value={this.state.item.stock}
                                            onChange={this.handleInputChange}
                                        />
                                    </FormGroup>
                                    <br/>
                                    <Button 
                                        className="text-center" size="sm" color="success"
                                        onClick={this.createProduct}
                                    >Save</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Jumbotron>
                </Col>
                <Col />
                </Row>
            </Container>
            </React.Fragment>
        )
    }
}

export default withRouter(CreateProductPage)
