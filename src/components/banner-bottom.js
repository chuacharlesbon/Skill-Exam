import React, {useState} from 'react'
import {Row, Col, Form, Button,Container} from 'react-bootstrap'

export default function BannerBottom(){

const [firstName, setFirstName] = useState('')

const [email, setEmail] = useState('')


/*This function is for simulation only*/
function sendEvent(e){
	e.preventDefault()

	/*
	test Comment
	
	This is how I apply the fetch method using my server

	fetch('https://localhost:4000/path/path2', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email: email,
				firstName: firstName
			})
		})
		.then(res => res.json())
		.then(data => {
			if(condition){
				display result, modal, etc
			}else{
				display result, modal, etc
			}*/
	setFirstName('')
	setEmail('')


}

	return(

	<>


{/*This section will bedisplayed only for smaller devices*/}

	<Container className="text-center mx-auto p-0 m-0 d-md-none d-block banner-bottom">
	<Row className="justify-content-center text-center  mx-auto">
	<Col xs={12} className="bg-green text-center mx-auto demo-button p-2">
	<h3 className="text-light banner-text text-center">SCHEDULE A DEMO</h3>
    <h5 className="text-light banner-text text-center">Learn More About FloQast</h5>
    </Col>

    <Col xs={12} className="bg-light mt-1 py-2">
    <h5 className="text-secondary banner-text px-2">Learn How FloQast Can</h5>
    <h5 className="text-green">Improve Your Month-End</h5>
    </Col>

{/*Form Section*/}
	<Container className="bg-light">
    <Form onSubmit={e => sendEvent(e)} className="p-2">
    <Col xs={12} className="bg-light pb-3">
	<Form.Group controlId="firstName" className="my-1">
	<Form.Control type="text" placeholder="First Name&lowast;" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
	</Form.Group>
	
	<Form.Group controlId="email"  className="my-1">
	<Form.Control type="text" placeholder="Email&lowast;" required value={email} onChange={e => setEmail(e.target.value)}/>
	</Form.Group>

	<Button className="banner-btn"  type="submit">SCHEDULE NOW</Button>
    </Col>
    </Form>
    </Container>

	</Row>
	</Container>

	
{/*This section will be displayed for Tablet and Larger Screen Devices*/}
	
    <Row className="banner justify-content-center text-center mt-5 d-none d-md-flex banner-bottom mx-auto">

    
    <Col xs={12} md={10} lg={10} xl={3} className=" bg-light mx-0 mb-3 d-flex flex-column justify-content-center p-0">
    <div className="demo-button bg-green m-0 p-3">
    <h3 className="text-light banner-text">SCHEDULE A DEMO</h3>
    <h5 className="text-light banner-text">Learn More About FloQast</h5>
    </div>
    </Col>
    

    <Col xs={12} md={10} lg={10} xl={6} className="bg-light main-banner text-center mx-0 mb-lg-3 py-lg-3 py-3 mb-3">
    <div className="d-none d-lg-block">
    <h4 className="text-secondary banner-text px-3">Learn How FloQast Can
    <span className="text-green"> Improve Your Month-End</span>
    </h4>
    </div>

    <div className="d-md-block d-lg-none">
    <h4 className="text-secondary banner-text px-5">Learn How FloQast Can</h4>
    <h5 className="text-green"> Improve Your Month-End</h5>
    </div>

{/*Form Section*/}

    <Form onSubmit={e => sendEvent(e)}>
    <Row className="justify-content-center">
    <Col xs={12} md={6} lg={5} xl={4}>
	<Form.Group controlId="firstName">
	<Form.Control type="text" placeholder="First Name&lowast;" required value={firstName} onChange={e => setFirstName(e.target.value)}/>
	</Form.Group>
	</Col>

	<Col xs={12} md={6} lg={5} xl={4}>
	<Form.Group controlId="email">
	<Form.Control type="text" placeholder="Email&lowast;" required value={email} onChange={e => setEmail(e.target.value)}/>
	</Form.Group>
	</Col>

	<Col xs={12} md={10} lg={8} xl={4} className="mt-lg-2 mt-xl-0 mt-md-2">
   	<Button className="banner-btn" type="submit">SCHEDULE NOW</Button>
	</Col>
    </Row>
    </Form>


    </Col>


    </Row>
    

    </>
		)
}