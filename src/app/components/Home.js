import React, { Component } from 'react';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <div style={{marginTop:"20px"}}>
            <alert variant="primary">
              <h2 className="heading_style">Reactjs JWT Authentication Application</h2>
              <Button style={{backgroundColor:"#e4a663",marginLeft:"550px",marginTop:"20px"}}><Link to="/signin"><span style={{backgroundColor:"#e4a663",color:"white",fontSize:"20px"}}>Login</span></Link></Button>
            </alert>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;