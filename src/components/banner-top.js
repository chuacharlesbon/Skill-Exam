import React from 'react'
import {Row, Col, Container} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import brand from './floqast-logo.png'

export default function BannerTop(){

	return(
	<>

{/*This section will bedisplayed only for smaller devices*/}

	<Container className="text-center mx-auto pt-2 pb-2 mb-5 d-md-none d-block banner-top-xs">
	<Row>
	<Image src={brand} alt="Brand Logo" className="brand-logo img-fluid" />
	<h3 className="banner-text-head">The Fastest,Most Accurate</h3>
	<h3 className="banner-subtitle">Way to Close Your Books!</h3>
	</Row>
	</Container>

{/*This section will be displayed for Tablet and Larger Screen Devices*/}

	<Row className="d-none d-md-flex banner-top">

	{/*First Column for Higlights and Logo*/}
	<Col xl={6} className="bg-gradient-fade my-5">
	<div className="p-0 m-0 d-flex align-items-end">
	<Image src={brand} alt="Brand Logo" className="brand-logo" /><span className="banner-extratext ml-5 pl-5 mb-0 pb-0">The</span>
	</div>
	<h1 className="banner-text-head">Fastest, Most Accurate</h1>
	<h1 className="banner-subtitle">Way to Close Your Books!</h1>
	</Col>

	{/*Second Column Empty for Alignment, delete 2nd column optional*/}
	<Col xl={6} >
	</Col>

	</Row>

	</>
		)
}
