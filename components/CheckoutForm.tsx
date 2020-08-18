import React from 'react'
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js'
import CardSection from './CardElement'

interface Props {

}


const CheckoutForm: React.FC<Props> = () => {

    const stripe: any = useStripe()
    const elements: any = useElements()
    let customerId: any
    let priceId: any

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return console.log('🤬')
        }

        const cardElement: any = elements.getElement(CardElement)

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement
        })

        if (error) {
            console.log(error)
        } else {
            console.log(paymentMethod)
            createSubscription ({
                customerId: customerId,
                paymentMethod: paymentMethod, 
                priceId: priceId
            })
        }
    }

    // function createSubscription({customerId, paymentMethod, priceId}): any {

    // }


    return (
        <form onSubmit={handleSubmit}>
            <CardSection />
            <button disabled={!stripe}>Confirm Payment</button>
        </form>
    )

}

export default CheckoutForm