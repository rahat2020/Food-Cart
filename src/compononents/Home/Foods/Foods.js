import React from 'react';
import './Foods.css';
import { Link } from 'react-router-dom';
const Foods = (props) => {
    const { name, img, description, price } = props.details;
    console.log(props.details)

    return (
        <main className="col-md-4">

            <div className="single_serviceBox ">
                <img src={img} alt="" />
                <div className="overlay"></div>
                <div className="serviceDex">
                    <h3>{name} </h3>
                    <hr />
                    <p>{description}</p>
                    <div className="d-flex justify-content-around">
                        <h3 className="price">${price}</h3>
                        <Link><button className="btn btn-light fw-bold btn-sm btn-buy">Buy now</button></Link>
                    </div>

                    {/* <Link to={`/order/$(_id)`}><button className="btn btn-light fw-bold btn-sm">Book now</button></Link> */}
                </div>
            </div>

        </main>
    );
};

export default Foods;