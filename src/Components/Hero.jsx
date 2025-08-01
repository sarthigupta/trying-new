function Hero(){
    return(
        <div className="hero container">
            <div className="content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="hero-button">
                    <button className="primary-btn">Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On</p>
                </div>
                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="" />
                    <img src="/images/flipkart.png" alt="" />
                </div>
            </div>
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="" />
            </div>
        </div>
    )
}

export default Hero;