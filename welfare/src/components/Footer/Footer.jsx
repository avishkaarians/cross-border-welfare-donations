import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Welfare</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>
            <Col md={3} sm={5} className=''>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className=''>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Donate </li>
                <li>Corporate </li>
                <li>Transaction History</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className=''>
              <h2>Contact Us</h2>
              <ul>
                <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, possimus! </li>
                <li>Email: welfare.help@gmail.com</li>
                <li>Phone: +91 000 000 0000</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
