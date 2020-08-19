import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'
import './CardSectionStyles.css'
import CreateCustomerForm from './CreateCustomerForm'


const CardSection: React.FC = () => {


    return (
        <label>
            Card Details
            <CardElement />
        </label>
    )
}

export default CardSection