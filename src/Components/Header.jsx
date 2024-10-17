import React, { useEffect, useState } from 'react'
import { Badge, Container, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../Slice/productSlice';



function Header({insideHome}) {

  const dispatch = useDispatch();

  const [wishListCount,setWishListCount] = useState(0);

  const [cartCount,setCartCount] = useState(0);


  const {wishList} = useSelector((state)=>state.wishListReducer);

  const cart = useSelector((state)=>state.cartReducer);


  // To add value to the badge according the length of the wishList

  useEffect(()=>{
    setWishListCount(wishList?.length)
    setCartCount(cart?.length)
  },[wishList,cart])



  return (
    <div>
      <Navbar expand="lg" className="bg-success">
      <Container>
        <Navbar.Brand>
          <Link to={'/'} style={{color:'black' , fontWeight:"bold" , textDecoration:"none"}} className='fs-4'>
          <i class="fa-solid fa-truck-fast fa-xl"></i>E-Cart
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            {insideHome&&<Nav.Link>
                <input type="text" className='form-control bg-dark text-light' style={{width:"300px"}} placeholder='Search Products'
                onChange={e=>dispatch(searchProducts(e.target.value.toLowerCase()))} />
              </Nav.Link>
            }

            <Nav.Link className='btn btn-outline-light fs-5'>
              <Link to={'/wishlist'} style={{color:'black' , fontWeight:"bold" , textDecoration:"none"}}>
                <i className="fa-solid fa-heart me-1" ></i>Wishlist
                <Badge bg="primary rounded ms-2">{wishListCount}</Badge>
              </Link>
            </Nav.Link>


            <Nav.Link className='btn btn-outline-light fs-5'>
            <Link to={'/cart'} style={{color:'black' , fontWeight:"bold" , textDecoration:"none"}}>
                <i className="fa-solid fa-cart-shopping me-1"></i>Cart
                <Badge bg="primary rounded ms-2">{cartCount}</Badge>
              </Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
