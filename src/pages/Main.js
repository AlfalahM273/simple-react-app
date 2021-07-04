
import React from 'react';
import PostPage from './PostPage';
import NotePage from './NotePage';
import EmployeePage from './EmployeePage';
import { Row, Col } from 'reactstrap';

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
            <React.Fragment>
                <div className="App">
                <header>
                    <h1>
                        React Simple App
                    </h1>
                </header>
                <br/>
                <Row>
                    <Col md="3" ></Col>
                    <Col md="6" >
                        <EmployeePage></EmployeePage>
                    </Col>
                    <Col md="3" ></Col>
                </Row>
                <br/>
                <hr/>
                <table style={{ width: "100%" }} >
                    <thead>
                    <tr>
                        <td style={{ width: "50%" }}>
                        <h2>Posts</h2>
                        </td>
                        <td style={{ width: "50%" }}>
                        <h2>Notes</h2>
                        </td>
                    </tr>
                    </thead>
                    <tbody style={{ height: "800px" }} >
                    <tr>
                        <td style={{ padding: "16px", verticalAlign: "top" }} ><PostPage></PostPage></td>
                        <td style={{ padding: "16px", verticalAlign: "top" }} ><NotePage></NotePage></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        )
    }
}

export default MainPage
