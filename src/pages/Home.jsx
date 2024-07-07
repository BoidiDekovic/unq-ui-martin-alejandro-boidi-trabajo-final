import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDifficulty } from '../service/Api';
import '../styles/home.css';
import Spinner from '../components/Spinner';

const Home = () => {
    const navigate = useNavigate();
    const [gameDifficulty, setGameDifficulty] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDifficulty().then((res) => {
            setGameDifficulty(res.data);
            setLoading(false);
        });
    }, []);

    return (
        <div className='container'>
            <h1 className='heading'> PREGUNTADOS </h1>
            <div className='buttonContainer'>
                <h4 className='questionHeading'>Choose the difficulty</h4>
                {!loading && gameDifficulty.map((difficulty) => (
                    <button className='btns'
                        key={difficulty}
                        onClick={() =>
                            navigate(difficulty ? `/game?difficulty=${difficulty}` : "/game")
                        }>
                        {difficulty.toUpperCase()}
                    </button>
                ))}
                {loading && <Spinner />}
            </div>
        </div>
    );
}

export default Home;