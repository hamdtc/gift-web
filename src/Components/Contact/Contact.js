import "./Contact.css"
export default function Contact( ) {
    return (
        <div id="container1">
        <div className="card">
        <form>
            <h2> CONTACT US</h2>
            <p className="para">Feel free to contact us any time. We will get back to <br/>you as soon as we can.</p>
            <input type="text" name="name" placeholder="Name" className="f1"/><br/><br/>
            <input type="text" name="Email" placeholder="Email" className="f2"/><br/><br/>
            <input type="text" name="Message" placeholder="Message" className="f3"/><br/><br/>
            <button class="send" > Send</button>
            </form>
          
            </div>

            <div className="card2">
                <div className="image">
                <img src="vector4.png" className="i1"/>&nbsp;&nbsp;14 GreenRoad St. <br/><br/>
                <img src="vector5.png" className="12"/>&nbsp;&nbsp;14 GreenRoad St.<br/><br/>
                <img src="vector6.png" className="i3"/>&nbsp;&nbsp;avira@getinfo.com<br/><br/>
                <img src="vector7.png" className="i4"/>&nbsp;&nbsp;Mon-Fri: 9:00 AM - 8:00 PM <br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sat: 9:30 AM - 6:30 PM<br/><br/><br/>
                <img src="vector8.png" className="i5"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="vector9.png" className="i6"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src="vector10.png" className="i7"/>
                </div>
                <div className="image2">
                <img src="img.png" />
                </div>
            </div>
            
                
           




    </div>
    )
}