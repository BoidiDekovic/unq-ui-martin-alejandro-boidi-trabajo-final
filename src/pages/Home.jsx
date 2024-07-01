import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getDifficulty } from '../service/Api';

const Home = () => {

    const navigate = useNavigate();
    const [gameDifficulty, setGameDifficulty ] = useState();
    const [loading, setLoading] = useState(true);


    useEffect(()=>{
        getDifficulty().then((res)=>{
            setGameDifficulty(res.data)
            setLoading(false)
        })
    },[])

  return (
    <div style={styles.container}>
        <h2 style={styles.heading}>Preguntados</h2>
        <div style={styles.buttonContaier}>

        </div>
    </div>
  )
}

export default Home
