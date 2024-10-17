import React, { useEffect,useState } from 'react'
import { Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../Slice/wishListSlice';
import { addToCart } from '../Slice/cartSlice';
import Header from '../Components/Header';


function View() {

  const [product,setProduct] = useState({});
  const {loading} = useSelector((state)=>state.productReducer);
  const {wishList} = useSelector((state)=>state.wishListReducer);

  const dispatch = useDispatch();

  const {id} = useParams();

  useEffect(()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    setProduct(products?.find(product=>product?.id == id))
  },[])
  
  
  //  Adding to WishList
  const handleWishList = (product) => {
    const existingProduct = wishList.find(item=>item.id == product.id);
    if(existingProduct){
      alert("Item Already in your wishlist");
    }
    else{
      dispatch(addToWishList(product));
    }
  }

  // Adding to cart
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
    <Header/>
      <div className='mt-5'>
        { loading?<div className='mt-5 mb-5 text-center fw-bolder fs-5'>

          <Spinner animation="border" variant="success" className='me-2'/>Loading....

        </div>:<div className='container row' style={{marginTop:'100px'}}>


        <div className="col-lg-2">

        </div>

          <div className="col-lg-4">
            <img src={product.thumbnail} alt="product" />
          </div>

          

          <div className="col-lg-6">
            <p className='fs-4'>Pid:{product.id}</p>
            <h1>{product.title}</h1>
            <h4 className='fw-bolder'>Price: <span style={{color:"red"}}>{product.price}</span></h4>
            <p className='fs-5'>{product.description}</p>
            <div className="d-flex justify-content-betweeen mt-4 mb-5">
              <Button className='btn btn-outline-dark me-2 text-light' onClick={()=>{handleWishList(product)}}><i className="fa-solid fa-heart" ></i>Wishlist</Button>
              <Button className='btn btn-outline-dark  text-light' onClick={()=>{handleCart(product)}}><i className="fa-solid fa-cart-shopping"></i>Cart</Button>
            </div>
          </div>

          </div>
          }
      </div>
    </>
        
  )
}

export default View
