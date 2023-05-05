import React from 'react';
import Banner from '../../Banner/Banner';
import slider_1 from '../../assets/slider_1.jpg'
import slider_2 from '../../assets/slider_2.jpg'
import slider_3 from '../../assets/slider__3.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

    const tostifyMassage = () => {
        toast.success('Register successfull!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
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

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content">
                    <div className="card  mt-6 mb-16 flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>

                            </div>
                            <div className="form-control mt-6">
                                <button type="submit" className="btn btn-primary">Send</button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};

export default Home;
