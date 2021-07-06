import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Button, Row, Col, Jumbotron, Card, CardBody, Form, FormGroup, Label, Input, CardHeader, CardTitle } from 'reactstrap';

import instance from '../../api/AxiosInstance';
export const axios = instance.apiInstance();

class DetailProductPage extends React.Component {
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
        this.initData()
    }

    initData = () => {
        const {
            match: { params },
        } = this.props;
        var id = params.id;
        axios.get(`/merchant/product/${id}`)
            .then( res => {
                console.log( res.data )
                const item = res.data;
                item.basePrice = item.base_price
                this.setState({ item });
            })
            .catch( error => {
                if (error.response.status === 404) {
                    this.props.history.push(`/product`);
                }
            })
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        const item = this.state.item;
        item[name] = value;
        this.setState({ item });
    }


    updateProducts = () => {
        const {
            match: { params },
        } = this.props;
        var id = params.id;
        const item = this.state.item;
        axios.patch(`merchant/product/${id}`, item)
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
                                        Detail Product
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
                                        onClick={this.updateProducts}
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

export default withRouter(DetailProductPage)
