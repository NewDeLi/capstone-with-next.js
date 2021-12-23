import { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import Button from 'react-bootstrap/Button'

const Counter = ({ id }) => {
    const [count, setCount] = useState('')
  

    const increaseCount = async () => {
        const registerCount = () => fetch(`/api/incrementCount?id=${encodeURIComponent(id)}`)
        registerCount()
    }

    return (
        <div style={{ margin: '5px 0' }}>
            <Button onClick={increaseCount} style={{ width: '100%' }}>Increase count</Button>
            <h5 style={{ textAlign: 'center', marginTop: '5px' }}>{count ? count : '0'}</h5>
        </div>
    )
}

export default Counter