import React from "react";

import {Col,Row, Container, Card, Button} from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'

import "./index.css";

export const HomeComponent = () => {

    const DATA1 = [
        {
        "match_id": "9077c926-bdc3-4caa-aca7-7074f0ed5ec5",
            "match_probability": 0.984,
            "candidates": [
                {
                    "id": "0e3abcb6-283d-4b08-8478-0af897770324",
                    "first_name": "John",
                    "middle_name": "J.",
                    "last_name": "Doe",
                    "dob": null,
                    "phone": "123-456-789",
                    "email": "john1997@yahoo.com",
                    "address": null,
                    "city": "houston",
                    "state": "tx",
                    "zip": null
                },
                {
                    "id": "14a2a946-e469-445b-ae36-4a4ca1fb0bac",
                    "first_name": "John",
                    "middle_name": "j.",
                    "last_name": "Doe",
                    "dob": null,
                    "phone": "(123) 456 789",
                    "email": null,
                    "address": null,
                    "city": "Houston",
                    "state": "Texas",
                    "zip": "12345",
                    
                }
            ]

    },
    {
        "match_id": "9077c926-bdc3-4caa-aca7-7074f0ed5ec5",
            "match_probability": 0.984,
            "candidates": [
                {
                    "id": "0e3abcb6-283d-4b08-8478-0af897770324",
                    "first_name": "John",
                    "middle_name": "J.",
                    "last_name": "Doe",
                    "dob": null,
                    "phone": "123-456-789",
                    "email": "john1997@yahoo.com",
                    "address": null,
                    "city": "houston",
                    "state": "tx",
                    "zip": null
                },
                {
                    "id": "14a2a946-e469-445b-ae36-4a4ca1fb0bac",
                    "first_name": "John",
                    "middle_name": "j.",
                    "last_name": "Doe",
                    "dob": null,
                    "phone": "(123) 456 789",
                    "email": null,
                    "address": null,
                    "city": "Houston",
                    "state": "Texas",
                    "zip": "12345",
                    
                }
            ]

    }
]
    return <>
<div className="container">
  <Row>
  <Accordion defaultActiveKey="0">

  {DATA1.map((item, index) =>  <Accordion.Item eventKey={index}>
    <Accordion.Header>
        <div className="header">
       <span> {item.candidates[0].first_name} {item.candidates[0].last_name}</span>

       <span>{item.match_probability}  % Probability </span>
        </div>
    </Accordion.Header>
    <Accordion.Body>
    <Container>
  <Row>
    <Col style={{width: '200px', display:'flex', flexDirection: 'column', padding: '8px 16px'}}>
        <div className="rowSection">
           First Name <span className="iconLeft"><i class="bi bi-check-circle-fill"></i> </span>
        </div> 
        <div className="rowSection">
             Middle Name <span className="iconLeft"> <i class="bi bi-share-fill"></i> </span>
        </div> 
        <div className="rowSection">
            DOB <span></span>
        </div> 
        <div className="rowSection">
             Phone <span></span>
        </div> 
        <div className="rowSection">
             Zip <span className="iconLeft"><i class="bi bi-check-circle-fill"></i></span>
        </div> 
        <div className="rowSection">
             Email  <span></span>
        </div> 
        <div className="rowSection">
           Address <span></span>
        </div> 
    </Col>
    <Col > 
    <Card style={{ width: '18rem' }}>
  <Card.Body>
    {/* <Card.Title>Card Title</Card.Title> */}
    <Card.Text>
    <Col style={{width: '400px', display:'flex', flexDirection: 'column'}}>
        <div className="rowSection">
            <span> {item.candidates[0].first_name} {item.candidates[0].last_name}</span>
        </div> 
        <div className="rowSection">
        {item.candidates[0].middle_name}
        </div> 
        <div className="rowSection">
        {item.candidates[0].dob ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[0].phone ?? '--'}
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
            <span> {item.candidates[1].first_name} {item.candidates[1].last_name}</span>
        </div> 
        <div className="rowSection">
        {item.candidates[1].middle_name}
        </div> 
        <div className="rowSection">
        {item.candidates[1].dob ?? '--'}
        </div> 
        <div className="rowSection">
        {item.candidates[1].phone ?? '--'}
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