import React, {useState} from 'react'

function Ticket (props) {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count+1)
    }

return (
    <section>
        <h1>{props.heading}</h1>
        <button onClick={handleClick} >Add</button>
        <h2>{count}</h2>
    </section>
)
}

export default Ticket