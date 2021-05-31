import React from 'react';
import './HeaderMain.css';
import pastatwo from '../../../img/pastatwo.jpg'
const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center header-container">
            <div className="col-md-4 offset-md-1 text-sm-start ">
                <h1 style={{ color: 'aqua' }}>Your New taste <br /> Starts Here</h1>
                <p className="text-white">Pasta is a food made from starch and water. It is usually cooked in hot water before being eaten. </p>
                <button className="btn btn-primary fw-bold">GET THE FOOD</button>
            </div>
            <div className="col-md-6 container">
                <img src={pastatwo} alt="" className="img-fluid shadow-sm image" />
                {/* <div className="overlay">
                    <div className="text">Buy now</div>
                </div> */}
            </div>
        </main>
    );
};

export default HeaderMain;