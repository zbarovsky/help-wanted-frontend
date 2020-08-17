import React, {FunctionComponent} from 'react'

interface Props {
    isTeacher: string
}

const Payment: FunctionComponent<Props> = ({isTeacher}) => {


    return (
        <div>
            <div>
                <h1>Payment</h1>
            </div>
            {/* Mock form for stripe page for teachers */}
            <div>
                <form>
                    <input type='text' name='name' placeholder='name' />
                    <input type='text' name='cardInfo' placeholder='Card Info'/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Payment