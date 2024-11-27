import React from 'react'
import { useNavigate  } from 'react-router-dom'

const HomeScreen = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>MEMO TEST</h1>
            <button onClick={() => {navigate('/play')}}>Arranquemos!</button>
        </div>
      );
}

export default HomeScreen