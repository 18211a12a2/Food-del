import React from "react";
import "./PlaceOrder.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";




const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <h2>Delivery Information</h2>
        <div className="multi-fields">
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="last Name"/>
        </div>
        
        <input type="email" placeholder="Email address"/>
        <input type="text" placeholder="street"/>
        <div className="multi-fields">
        <input type="text" placeholder="City"/>
        <input type="text" placeholder="State"/>
        </div>

        <div className="multi-fields">
        <input type="text" placeholder="PinCode"/>

        <input type="text" placeholder="Country"/>
        </div>

        <input type="text" placeholder="Phone Number"/>

      </div>
      <div className="place-order-right">
        <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>SubTotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivey Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                  <b>Total</b>
                  <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              <button>PROCEED TO PAYMENT</button>
            </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
