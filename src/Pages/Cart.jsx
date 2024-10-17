import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Slice/cartSlice';
import Header from '../Components/Header';



function Cart() {

  const cart = useSelector((state)=>state.cartReducer);

  const dispatch = useDispatch();

  const [total,setTotal] = useState(0);

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product.totalPrice).reduce((p1,p2)=>p1+p2));
    }
    else{
      setTotal(0);
    }
  },[cart])

  return (
    <>
    <Header/>
      <div className='container' style={{marginTop:"100px"}}>
        
        { 
          cart?.length>0?
          <div className="row mt-5 mb-5">

          <div className="col-lg-8">
            <table className='table shadow border'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              { 
                cart?.map((product,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{product?.title}</td>
                    <td><img src={product?.thumbnail} alt=""style={{width:"150px",height:"150px"}}/></td>
                    <td><input type="text" readOnly value={product?.quantity} style={{width:"25px"}} /></td>
                    <td className='text-danger'>${product?.totalPrice}</td>
                    <td><button className='btn' onClick={()=>dispatch(removeFromCart(product?.id))}><i className="fa-solid fa-trash text-danger"></i></button></td>
                  </tr>
                ))
                }
              </tbody>
            </table>

            <div className="d-flex justify-content-between mb-5">
              <button className='btn btn-danger' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
              <Link to={'/'}  className='btn btn-primary'>Shop More</Link>
            </div>

          </div>

          <div className="col-lg-1">

          </div>

          <div className="col-lg-3">
            <div className="container border rounded shadow p-5 w-100">
              <h1>Cart Summary</h1>
              <h4>Total Products:{cart?.length}</h4>
              <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
            </div>
            <div className="d-grid">
              <button className='btn btn-success m-3 rounded'>Checkout</button>
            </div>
          </div>

          </div>:<div className='mb-5'>
              <img src="" alt="" />
              <h1 className='text-center mt-5'>Cart is empty</h1>
            </div>
        }

      </div>
    </>
  )
}

export default Cart
