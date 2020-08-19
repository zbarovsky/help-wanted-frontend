import React, {useState} from 'react'

interface Props {
    subscriptionId: any
}

const CancelSubscription: React.FC <Props> = ({subscriptionId}) => {

    const handleClick = (e) => {
        e.preventDefault()
        return fetch ('http://localhost:3001/stripe/cancel-subscription', {
            method: 'POST',
            headers: {
                'Container-type': 'application/json'
            },
            body: JSON.stringify({
                subscriptionId: subscriptionId,
            })
        }).then((response: any) => {
            return response.json()
        }).then((cancelSubscriptionResponse: any) => {
            console.log('delete successful')
        }).catch((error: any) => {
            console.log(error)
        })
    }

    return (
        <button onClick={handleClick}>
            Delete Account?
        </button>
    )
}

export default CancelSubscription