// Product Component

import Productimg1 from "../assets/images/one.jpg"
import Productimg2 from "../assets/images/two.jpg"
import Productimg3 from "../assets/images/three.jpg"


function Product() {
    return (
        <div class="products">
            <div class="products-box">
                <img src={Productimg1} alt=""></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam vero culpa quidem <b>100ml</b></p>
            </div>

            <div class="products-box">
                <img src={Productimg2} alt=""></img>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis placeat, nihjjjjhlj. <b>100ml</b></p>
            </div>

            <div class="products-box">
                <img src={Productimg3} alt=""></img>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam vero culpa quidem <b>100ml</b></p>
            </div>
        </div>
    )
}

export default Product