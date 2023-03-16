import React from 'react';
import {container,Row,Col} from "react-bootstrap";



const Contact = () => {
  return (


    <div>
      <Row className="mb-5 mt-3">
        <Col lg = "8">
          <h1 className='display-4 mb-4'>
            Contact Me

          </h1>
          
        </Col>

      </Row>
      <Row className='sec_sp'>
        <Col lg="5"className='mb-5'>
          <h3 className="color_sec py-4">
          Get in Touch
          </h3>
          <address>
            <strong>
              Email: martinmutuku1998@gmail.com
            </strong>
            <br/>
            <br/>
            <p>
              <strong>  Phone: +254751934896</strong>

            </p>

          </address>
          <p> Martin is here to provide you with more information ,answer any question you may have and create an effective 
            solution to your technology needs.
          </p>
    
        </Col>
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
        backgroundColor: 'white',
        border: "none",
        borderRadius: "20px",
  }}>
    Send
  </button>
</Col>
            </Row>
          </form>
        </Col>
      </Row>
      </div>
  )
}
export default Contact