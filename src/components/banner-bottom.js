import React, {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'

export default function BannerBottom(){

const [firstName, setFirstName] = useState('')

	return(

	
	
    <Row className="banner justify-content-center text-center mt-5">

    

    <Col xl={8} className="bg-light main-banner text-end m-3 py-3 ">

    <h4 className="text-secondary banner-text px-5">Learn How FloQast Can
    <span className="text-green"> Improve Your Month-End</span>
    </h4>

    <Row className="justify-content-end">

    <Col xl={3}>
    <Form>
			<Form.Group controlId="firstName">
			<Form.Control type="text" placeholder="First Name&lowast;" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
			</Form.Group>
	</Form>
	</Col>

	 <Col xl={3}>
    <Form>
			<Form.Group controlId="firstName">
			<Form.Control type="text" placeholder="Email&lowast;" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
			</Form.Group>
	</Form>
	</Col>

	<Col xl={3}>
   	
   	<Button className="banner-btn">SCHEDULE NOW</Button>
	</Col>

    </Row>

    </Col>


    </Row>
    


		)
}