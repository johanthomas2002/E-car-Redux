import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { removeFromWishList } from '../Slice/wishListSlice';
import { addToCart } from '../Slice/cartSlice';
import Header from '../Components/Header';

 

function Wishlist() {

  const {wishList} = useSelector((state)=>state.wishListReducer);

  const dispatch = useDispatch();

  // handling the cart from wishList component

  const handleCart = (product) => {
    dispatch(addToCart(product));
    dispatch(removeFromWishList(product.id));
  }


  return (
    <>
    <Header/>
      <Row className='container mt-5 mb-5 ' style={{marginLeft:"100px"}}>
        { 
          wishList?.length>0?wishList.map(product=>(
            <Col className="mt-5" sm={12} md={6} lg={4} xl={3}>
          <Card style={{ width: '18rem' }}>
            <Link to={`/view/${product?.id}`}>
            <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title.slice(0,20)}</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text> */}
              <div className='d-flex justify-content-between'>
                <Button variant="primary" className='btn' onClick={()=>dispatch(removeFromWishList(product?.id))}><i className="fa-solid fa-trash" ></i></Button>
                <Button variant="primary" className='btn' onClick={()=>handleCart(product)}><i className="fa-solid fa-cart-shopping"></i></Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
          )):<div>
            <img src="" alt="" />
            <h1 className='text-center mt-5'>WishList is empty</h1>
          </div>
          
        }
      </Row>
    </>
  )
}

export default Wishlist
