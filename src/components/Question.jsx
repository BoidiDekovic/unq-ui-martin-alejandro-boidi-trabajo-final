import React from 'react';
import { answer } from '../service/Api';
import '../styles/question.css';

const Question = ({ question, answerSelect, setAnswerSelect, nextQuestion, startGame }) => {
    const { id, question: questionText, ...options } = question;

    return (
        <div className="buttonContainer">
            <p className="question">{questionText}</p>
            <div className="options">
                {Object.entries(options).map(([key, value]) => {
                    const buttonStyle = answerSelect?.option === key ? `btns button-${answerSelect.answer ? 'success' : 'danger'}` : 'btns';
                    return (
                        <button
                            key={key}
                            onClick={() => {
                                if (!answerSelect) {
                                    answer(id, key).then((res) => setAnswerSelect({ ...res.data, option: key }));
                                }
                            }}
                            className={buttonStyle}>
                            {value}
                        </button>
                    );
                })}
            </div>
            
            {answerSelect && (
                <button
                    onClick={answerSelect.answer ? nextQuestion : startGame}
                    className={`btns button-${answerSelect.answer ? 'success' : 'warning'} button-full-width`}>
                    {answerSelect.answer ? 'Next Question' : 'Play Again'}
                </button>
            )}
        </div>
    );
};

export default Question;