import "./Blogs.css"
export default function Blogs() {
    return (
        <div id='container1'>
      <div class="frame1">
       <frame1>
        <h2 class="heading">&larr;SELECT PAYMENT OPTION</h2>
       
        <form action="payment " >
          <input type="radio" checked="radio button" class="r1" />
          < input type="text"  name="cash on delivery"  placeholder=" cash on delivery" class="f1"/> <br/> <br/>
          <input type="radio" />
          <input type="text" name="PhonePay/Google Pay/BHIM UPI" placeholder='PhonePay/Google Pay/BHIM UPI' class="f3"/> <br/> <br/>
          <input type="radio" />
          <input type="text" name="Net Banking" placeholder='Net Banking'/> <br/> <br/>
          
          <div class="frames">
            
          <input type="radio" />
          Credit/Debit Card &nbsp;&nbsp;&nbsp;
          <img src="payment icon.png"/>
          <img src="payment icon1.png"/> <br/> <br/>
          
          <input type="text" name="Card Number" placeholder='Card Number'/><br/> <br/>
          <input type="text" name=" Name on Card" placeholder="Name on Card"/> <br/> <br/>
          <input type="text" name="MM/YY" placeholder="MM/YY"/>&nbsp; &nbsp;
          <input type="text" name="CVV" placeholder="CVV"/> 
          </div>
        
        
          
        </form>
        </frame1> <br/><br/>

        <img src="payment icon.png"/>&nbsp;&nbsp;
        <img src="payment icon1.png"/>&nbsp;&nbsp;
        <img src="payment icon2.png"/>&nbsp;&nbsp;
        <img src="payment icon3.png"/>&nbsp;&nbsp;
        <img src="payment icon4.png"/>
      </div>
      
       
      
      <div class="vertical"/>
      
      <div class="col2">
        <h2 class="heading">PRICE DETAILS (2 ITEMS)</h2>
        <frame2 src="price">
           Total&nbsp;&nbsp;&nbsp;Rs.5,598 <br/><br/>
           </frame2>
           <frame3>
           Discount on MRP&nbsp;&nbsp;&nbsp;&#8209;Rs. 809<br/><br/>
           </frame3>
           <frame4>
           Coupon Discount&nbsp;&nbsp;&nbsp;Rs. 0<br/><br/>
        </frame4>
        <frame5>
        Delivery Charge&nbsp;&nbsp;&nbsp; Free<hr/>
        </frame5>
        <frame6>
          Total Amount &nbsp;Rs. 4,789
        </frame6>
        <button class="order"> <h4>Pay and Place Order&rarr;</h4></button>
        
        
        </div>


      
      
      </div >
  )
}
    