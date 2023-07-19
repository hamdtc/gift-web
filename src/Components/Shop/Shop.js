import "./Shop.css"
export default function Shop() {
  return (

    <div className='head-shop'>
      <h2> SHOP BY CATEGORIES</h2>

      <div className='image-shop'>
        
        <img src="./image1.png" className="i1" /> 
        

        <img src="./image2.png" className="i2" />

        <img src='./image3.png' className="i3" />

        <img src='./image4.png' className="i4" />

        <img src='./image5.png' className="i5" />

        <img src='./image6.png' className="i6" />


      </div>

    <div className="head-shop2" >
           <h2>PRODUCTS AT SLASHED PRICES</h2> 

           <div className='image-shop2'>
            <img src="./image7.png" className="i7"/> 
            <div>
              <img src="./Rating1.png" className="r1-shop"/>
              <img src="./vector4.png" className="v1-shop"/>
              <h2 className="banner-shop1"> ZARA</h2>
              <small-shop>Green High Neck Knit Sweater</small-shop>
              <div>
                <button className="product-shop">Add To Cart</button>
              </div>
            </div>
            
            
            <img src="./image8.png" className="i8"/>
            <div className="shop1"> 
              <img src="Rating2.png" className="r2-shop"/>
              <img src="./vector4.png" className="v1-shop"/>
              <h2 className="banner-shop2">ONLY </h2>
              <small-shop>Plush Jogging Trousers </small-shop>
              <div>
              <button className="product-shop">Add To Cart</button>
              </div>
            </div>
            

            <img src="./image9.png" className="i9"/>
            <div className="shop1"> 
              <img src="./Rating3.png" className="r3-shop"/>
              <img src="./vector3.png" className="v1-shop"/>
              <h2 className="banner-shop2">HnM </h2>
              <small-shop>Black sweater with long sleeves </small-shop>
              <div>
              <button className="product-shop">Add To Cart</button>
              </div>
            </div>
            

            

            <img src="./image10.png" className="i10"/>
            <div className="shop1"> 
              <img src="./Rating4.png" className="r4-shop"/>
              <img src="./vector3.png" className="v1-shop"/>
              <h2 className="banner-shop2">Plush </h2>
              <small-shop>High Rise Jeans- Ankle Length </small-shop>
              <div>
              <button className="product-shop">Add To Cart</button>
              </div>
            </div>
            

            


            </div>  
   </div >

    </div>
  )
}