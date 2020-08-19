import React, {useState} from 'react'


interface Props {
    email: string
}

interface customer {
    customer: any,
    id?: string,
    object?: string
    address?: null,
    balance?: number,
    created?: number,
    currency?: null,
    default_source?: null,
    delinquent?: false,
    description?: null,
    discount?: null,
    email?: string,
    invoice_prefix?: string
}


const CreateCustomerForm: React.FC<Props> = () => {

    const [email, setEmail]: any = useState('')
    const [customer, setCustomer]: any = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch ('http://localhost:3001/stripe/create-customer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            }),
        // }).then((response) => {
        //     console.log(response)
        //     //return response
        }).then((result) => {
            result.json().then((whatever: customer) => {
                if (whatever) {
                console.log(whatever)
                setCustomer(whatever.customer)
                } 
            })
        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <form id="signup-form" onSubmit={handleSubmit}>
            <div>
                <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                required
                />
            </div>
        ​
            <button id="email-submit" type="submit">
                <span id="button-text">Sign up</span>
            </button>
        </form>
    )

}

export default CreateCustomerForm