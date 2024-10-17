import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from 'mdb-react-ui-kit';


function Footer() {
  return (
    <div>
      <MDBFooter bgColor='success' className='text-white text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='fw-bold text-dark'><i class="fa-solid fa-truck-fast fa-xl"></i>E-Cart</h5>

            <p className='text-dark fw-bold'>
            At E-Cart, we offer a wide range of quality products at affordable prices. Our mission is
             to provide a seamless shopping experience, from browsing to checkout, with customer 
             satisfaction as our top priority.
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase fw-bolder text-dark'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-dark'>
                  Home
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Wishlist
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  Cart
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0 fw-bolder text-dark'>Guides</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-dark'>
                  React 
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                React Bootstrap
                </a>
              </li>
              <li>
                <a href='#!' className='text-dark'>
                  MD Bootstrap
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' , color:"black" }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a style={{color:'black'}} href='/'>
        E-Cart.com
        </a>
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
