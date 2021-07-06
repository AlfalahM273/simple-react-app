
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
          isAuthenticated: false
        };
    }
    
    componentDidMount() {
        this.setState({ isAuthenticated: this.isAuthenticated() })
    }

    getTimeIn = () => {
        const timeNow = new Date().getTime();
        return parseFloat((timeNow + 1) / 1000).toFixed(0);
    };

    isAuthenticated = () => {
        const expiresIn = localStorage.getItem("expiresIn");
        if (expiresIn) {
            if (expiresIn < this.getTimeIn()) {
            return false;
            } else {
            return true;
            }
        } else {
            return false;
        }
    }

    logOut = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    render(){
        return (
            <BrowserRouter>
            {this.state.isAuthenticated &&
            <Container>
                <Row>
                    <Col>
                        <Link to="/" >Home</Link>
                    </Col>
                    <Col>
                        <Link to="/product" >Product</Link>
                    </Col>
                    <Col>
                        <a href="#" 
                            onClick={this.logOut}
                         >
                            Logout
                        </a>
                    </Col>
                </Row>
            </Container>
            }
            <Switch>
                <Route exact path="/">
                    <HomePage isAuthenticated={this.state.isAuthenticated} />
                </Route>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <AuthRoute exact path="/product">
                    <ProductPage />
                </AuthRoute>
                <AuthRoute path="/product/create">
                    <CreateProductPage />
                </AuthRoute>
                <AuthRoute path="/product/:id">
                    <DetailProductPage />
                </AuthRoute>
            </Switch>
            </BrowserRouter>
        )
    }
}

export default MainPage
