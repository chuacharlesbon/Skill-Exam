import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import Image from "react-bootstrap/Image";
import brand from './floqast-logo.png'

export default function BannerTop(){




	return(

	<Row className="my-5">

	<Col xl={6} className="bg-gradient-fade my-5">

	<div className="p-0 m-0 d-flex align-items-end">
	<Image src={brand} alt="Brand Logo" className="brand-logo" /><span className="banner-extratext ml-5 pl-5 mb-0 pb-0">The</span>
	</div>
	<h1 className="banner-text-head">Fastest,Most Accurate</h1>
	<h1 className="banner-subtitle">Way to Close Your Books!</h1>

	</Col>

	<Col xl={6} >


	</Col>



	</Row>

		)
}
