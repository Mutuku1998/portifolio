import React from "react";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import {container,Row,Col} from "react-bootstrap";
import image from '../images/image-2.jpg';
function Contact(){
    return(
        <div className="contact">
            <div className>
<h3> Contacts</h3>
</div>
<hr style={{
        backgroundColor: 'red',
        color:"red",
}}/>
          <MDBRow>
      <MDBCol md='4'>
        <h4>Address:</h4>
        <p>Kilifi<br/>
North Coast<br/>
Kenya</p>
<h4>Email:
</h4>
<p>martinmutuku1998@gmail.com</p>
<h4>Phone:</h4>
<p>254-741934896</p>
      </MDBCol>
      <MDBCol md='4'>
      <img src={image} width="700" height="400"/>
      </MDBCol>
    </MDBRow>
    <div className="contactform">
        <h4>contact form</h4>
        <form>
        <Col lg="7"className='d-flex align-items-center'>
          <form className='contact_form w-100'>
            <Row>
              <Col lg="6"className='form-group'>
                <input 
                className='form-control'
                id='name'
                name='name'
                placeholder='Name'
                type="text"
                />

              </Col>
              <Col lg= "6" className='form-group'>
                <input
                className='form-control rounded -0'
                id = "email"
                placeholder='Email'
                type="email"
                />
              </Col>


            </Row>
            <br/>
            <textarea
            className='form-control rounded-0'id = "Message"
            name='message'
            placeholder='message'
            rows="5"
            >

            </textarea>
            <br/>
            <Row>
<Col lg ="12" className='form-group'>
  <button className=' btn 'type='submit' style={{
        backgroundColor: 'blue',
        color:"white",
        border: "none",
        borderRadius: "20px",
  }}>
    Send
  </button>
</Col>
            </Row>
          </form>
        </Col>
    
        </form>
    </div>
    </div>
    )
}
export default Contact