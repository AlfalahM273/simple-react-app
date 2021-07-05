
import React from 'react';
import LoginPage from './login/LoginPage';
import ProductPage from './product/ProductPage';
import HomePage from './home/HomePage';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AuthRoute from '../routes/AuthRoute';
import { 
    Container, Row, Col
} from 'reactstrap';
import CreateProductPage from './product/CreateProductPage';
import DetailProductPage from './product/DetailProductPage';

class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content : "",
            alert : "",
            posts : [],
        }
    }
    
    componentDidMount() {
    }

    render(){
        return (
            <BrowserRouter>
            <Container>
                <Row>
                    <Col>
                        <Link to="/" >Home</Link>
                    </Col>
                    <Col>
                        <Link to="/product" >Product</Link>
                    </Col>
                </Row>
            </Container>
            <Switch>
                <AuthRoute exact path="/">
                    <HomePage />
                </AuthRoute>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/product">
                    <ProductPage />
                </Route>
                <Route path="/product/create">
                    <CreateProductPage />
                </Route>
                <Route path="/product/:id">
                    <DetailProductPage />
                </Route>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default MainPage