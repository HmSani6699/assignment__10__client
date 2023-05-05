import React from 'react';
import Banner from '../../Banner/Banner';
import slider_1 from '../../assets/slider_1.jpg'
import slider_2 from '../../assets/slider_2.jpg'
import slider_3 from '../../assets/slider__3.jpg'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="carousel w-2/4 h-72 mx-auto mt-10">
                <div id="item1" className="carousel-item w-full">
                    <img src={slider_1} className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slider_2} className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slider_3} className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Home;