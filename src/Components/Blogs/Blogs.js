import "./Blogs.css"
export default function Blogs() {
    return (
        <div id='container1'>
      <div className="frame1">
       
        <h2 className="heading">&larr;SELECT PAYMENT OPTION</h2>
       
       <input type="radio" checked="radio button" class="r1" />
          < input type="text"  name="cash on delivery"  placeholder=" cash on delivery" class="b1"/> <br/> <br/>
          <input type="radio" className="r2" />
          <input type="text" name="PhonePay/Google Pay/BHIM UPI" placeholder='PhonePay/Google Pay/BHIM UPI' class="b2"/> <br/> <br/>
          <input type="radio" />
          <input type="text" name="Net Banking" placeholder='Net Banking' className="b3"/> <br/> <br/>
          
          <div className="frames">
            
          <input type="radio" />
          Credit/Debit Card &nbsp;&nbsp;&nbsp;
          <img src="payment icon.png"/>
          <img src="payment icon1.png"/> <br/> <br/>
          
          <input type="text" name="Card Number" placeholder='Card Number' class="b4"/><br/> <br/>
          <input type="text" name=" Name on Card" placeholder="Name on Card" class="b5"/> <br/> <br/>
          <input type="text" name="MM/YY" placeholder="MM/YY" class="b6"/>&nbsp; &nbsp;
          <input type="text" name="CVV" placeholder="CVV" class="b7"/> 
          </div>
        
        
          
       
        <br/><br/>

        <img src="payment icon.png"/>&nbsp;&nbsp;
        <img src="payment icon1.png"/>&nbsp;&nbsp;
        <img src="payment icon2.png"/>&nbsp;&nbsp;
        <img src="payment icon3.png"/>&nbsp;&nbsp;
        <img src="payment icon4.png"/>
      </div>
      
       
      
      <div className="vertical"/>
      
      <div className="col2">
        <h2 className="heading">PRICE DETAILS (2 ITEMS)</h2>
        <frame2 src="price">
           Total<small className="price1">Rs.5,598 </small><br/><br/>
           </frame2>
           <frame3>
           Discount on MRP<small className="price2">Rs. 809</small><br/><br/>
           </frame3>
           <frame4>
           Coupon Discount<small className="price3">Rs. 0</small><br/><br/>
        </frame4>
        <frame5>
        Delivery Charge<small className="price4"> Free </small><hr/>
        </frame5>
        <frame6>
          Total Amount <small className="price5">Rs. 4,789</small>
        </frame6>
        <button className="order"> <h4>Pay and Place Order&rarr;</h4></button>
        
        
        </div>


      
      
      </div >
  )
}
    