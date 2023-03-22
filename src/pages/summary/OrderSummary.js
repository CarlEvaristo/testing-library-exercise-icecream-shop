import React from 'react';
import SummaryForm from './SummaryForm';

function OrderSummary(props) {
    
    return (
        <div>
            <h1>Order Summary</h1>
            <h2>`Scoops ${scoopsPrice}`</h2>
            <ul>
                <li>`${numScoops} ${flavour}`</li>
            </ul>

            <h2>`Toppings ${toppingsPrice}`</h2>
            <ul>
                <li>{toppingType}</li>
            </ul>
            <SummaryForm />
        </div>
    );
}

export default OrderSummary;