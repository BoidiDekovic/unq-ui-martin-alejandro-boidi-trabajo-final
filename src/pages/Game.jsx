import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getQuestions } from '../service/Api';
import Question from '../components/Question';
import Spinner from '../components/Spinner';
import WonGameModal from '../components/WonGameModal';
import '../styles/game.css';

const Game = () => {
    const navigate = useNavigate();
    const [queryParams] = useSearchParams();

    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrenQuestion] = useState({});
    const [answerSelect, setAnswerSelect] = useState(null);
    const [winner, setWinner] = useState(false);
    const [loading, setLoading] = useState(true);

    const difficulty = queryParams.get("difficulty") || "easy";
    const correctQuestions = questions.indexOf(currentQuestion) >= 0 ? questions.indexOf(currentQuestion) : 0;

    const startGame = () => {
        getQuestions(difficulty).then((res) => {
            setWinner(false);
            setAnswerSelect(null);
            setQuestions(res.data);
            setCurrenQuestion(res.data[0]);
            setLoading(false);
        });
    };
    
    useEffect(startGame, [queryParams]);
    
    const nextQuestion = () => {
        const numberQuestion = questions.indexOf(currentQuestion) + 1;
        if (numberQuestion < questions.length) {
            setCurrenQuestion(questions[numberQuestion]);
            setAnswerSelect(null);
        } else {
            setWinner(true);
        }
    };

    if (loading) return <Spinner />;

    if (winner)  return <WonGameModal startGame={startGame} />;
    
    return (
        <div className="container">
            <div className="header">
                <span className="score">
                    <span className="score-yellow">{correctQuestions}</span>/{questions.length}
                </span>
                <h3 className="difficulty">{difficulty.toUpperCase()}</h3>
                <button className='button-warning' onClick={() => navigate("/")}>
                    Back to Difficulty
                </button>
            </div>
            <Question
                currentQuestion={currentQuestion}
                answerSelect={answerSelect}
                setAnswerSelect={setAnswerSelect}
                nextQuestion={nextQuestion}
                startGame={startGame}
            />
        </div>
    );
};

export default Game;