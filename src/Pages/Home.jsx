import React, { useEffect } from 'react'
import { Button, Card, Col, Row, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsData } from '../Slice/productSlice';
import { Link } from 'react-router-dom';
import { addToWishList } from '../Slice/wishListSlice';
import { addToCart } from '../Slice/cartSlice';
import Header from '../Components/Header';



function Home() {

  const dispatch = useDispatch();
  

  const {loading,products,error} = useSelector((state)=>state.productReducer);


  const {wishList} = useSelector((state)=>state.wishListReducer);
  
  
  useEffect(()=>{
    dispatch(fetchProductsData())
  },[]);


  // Function for handling wishlist(conditional checking is provided to see if the product is already in the wishlist)
  const handleWishList = (product) => {
    const existingProduct = wishList.find(item=>item.id == product.id);
    if(existingProduct){
      alert("Item Already in your wishlist");
    }
    else{
      dispatch(addToWishList(product));
    }
  }

  console.log(wishList);

  
  //Adding to cart

  const cart = useSelector((state)=>state.cartReducer);

  const handleCart = (product) => {
    const existingProduct = cart?.find(item=>item.id == product.id);
    if(existingProduct){
      dispatch(addToCart(product));
      alert("items added");
    }
    else{
      dispatch(addToCart(product));
      alert("item added successfully");
    }
  }  



  return (
    <>
      <Header insideHome={true}/>
      <div>
        { loading?<div className='mt-5 mb-5 text-center fw-bolder fs-5'>
          <Spinner animation="border" variant="success" className='me-2'/>Loading....
        </div>:<Row className='mt-5 mb-5 container' style={{marginLeft:"90px"}}>
            
          {
            products?.length>0?products.map((product,index)=>(
                <Col className="mt-5" sm={12} md={6} lg={4} xl={3}>
                <Card style={{ width: '18rem' }}  key={index} className='border'>
                  <Link to={ `/view/${product?.id}`}>
                    <Card.Img variant="top" src={product.thumbnail} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{product.title.slice(0,20)}</Card.Title>
                    <Card.Text>
                      {product.description.slice(0,50)}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                      <Button variant="primary" className='btn' onClick={()=>{handleWishList(product)}}><i className="fa-solid fa-heart" ></i></Button>
                      <Button variant="primary" className='btn' onClick={()=>{handleCart(product)}}><i className="fa-solid fa-cart-shopping"></i></Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )):<div className='text-danger text-center mt-5'>Nothing to diplay</div>
          }
        </Row>
        
        }
     </div>  
    </>
  )
}

export default Home
