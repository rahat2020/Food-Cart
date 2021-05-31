import React, { useEffect, useState } from 'react';
import './FoodInfo.css';
// import foods from '../../../FakeData/FakeData';
import Foods from '../Foods/Foods';
import { useSelector } from 'react-redux';

const FoodInfo = () => {
    const foods = useSelector((state)=> {

        return state.foods.foodList
        // console.log("state :", state.foods.foodList);
    })
    console.log("foods", foods)
    const [food, setFood] = useState([])
    useEffect(() => {
        setFood(foods)
    }, [foods])
    return (
        <div className="row mt-5 pt-5 info-container">
            <div className="titleText mt-3">
                <p>OUR <span style={{color:'white',  fontWeight:'bold'}}>SERVICES</span></p>
                <h1>  We provide healthy Food</h1>
                <hr />

            </div>
            {
                food?.map(details => <Foods details={details} key={details.id}></Foods>)
            }
        </div>
    );
};

export default FoodInfo;