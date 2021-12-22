import React from "react";
import axios from "axios";

import {Col,Row, Container, Card, Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

import "./index.css";

export const HomeComponent = () => {
    const baseURL = "http://localhost:5000/matches/pending?page=2";

const [initialData, setInitialData] = React.useState([]);

React.useEffect(() => {
    axios.get(baseURL).then((response) => {
        setInitialData(response.data.pending_matches);
    });
  }, []);

    return <>
<div className="container">
  <Row>
  <Accordion defaultActiveKey="0">

  {initialData.map((item, index) =>  <Accordion.Item eventKey={index}>
    <Accordion.Header>
        <div className="header">
       <span> {item.candidates[0].first_name} {item.candidates[0].last_name}</span>

       <span>{item.match_probability * 100}  % Probability </span>
        </div>
    </Accordion.Header>
    <Accordion.Body>
    <Container>
  <Row>
    <Col style={{width: '200px', display:'flex', flexDirection: 'column', padding: '8px 16px'}}>
        <div className="rowSection">
           First Name
        </div> 
        <div className="rowSection">
             Middle Name
        </div>
        <div className="rowSection">
             Last Name
        </div>
        <div className="rowSection">
            DOB
        </div> 
        <div className="rowSection">
             Phone
        </div>
        <div className="rowSection">
             City
        </div>
        <div className="rowSection">
             State
        </div>
        <div className="rowSection">
             Zip
        </div> 
        <div className="rowSection">
             Email
        </div> 
        <div className="rowSection">
           Address
        </div> 
    </Col>
    <Col > 
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
    <Col style={{width: '400px', display:'flex', flexDirection: 'column'}}>
        <div className="rowSection">
            <span> {item.candidates[0].first_name} </span>
        </div> 
        <div className="rowSection">
        {item.candidates[0].middle_name}
        </div>
        <div className="rowSection">
        {item.candidates[0].last_name}
        </div>
        <div className="rowSection">
        {item.candidates[0].dob ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[0].phone ?? '--'}
        </div>
        <div className="rowSection">
        {item.candidates[0].city ?? '--'}
        </div>
        <div className="rowSection">
        {item.candidates[0].state ?? '--'}
        </div>
        <div className="rowSection">
         {item.candidates[0].zip ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[0].email ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[0].address ?? '--'}
        </div> 
    </Col>
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" >Keep The Left Record</Button>
        </div>
  </Card.Body>
</Card>
     </Col>
    <Col >

    <Card style={{ width: '18rem' }}>
  <Card.Body style={{padding: '8px 16px'}}>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
    <Col style={{width: '400px', display:'flex', flexDirection: 'column'}}>
        <div className="rowSection">
            <span> {item.candidates[0].first_name} </span>
        </div>
        <div className="rowSection">
        {item.candidates[1].middle_name}
        </div>
        <div className="rowSection">
        {item.candidates[1].last_name}
        </div>
        <div className="rowSection">
        {item.candidates[1].dob ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[1].phone ?? '--'}
        </div>
        <div className="rowSection">
        {item.candidates[1].city ?? '--'}
        </div>
        <div className="rowSection">
        {item.candidates[1].state ?? '--'}
        </div>
        <div className="rowSection">
         {item.candidates[1].zip ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[1].email ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[1].address ?? '--'}
        </div> 
    </Col>
    </Card.Text>
    <div className="d-grid gap-2">
    <Button variant="primary" >Keep The Right Record</Button>
        </div>

  </Card.Body>
</Card> 
    </Col>
  </Row>
</Container>
    </Accordion.Body>
  </Accordion.Item>)}
  
</Accordion>
  </Row>
</div>
    </>
}