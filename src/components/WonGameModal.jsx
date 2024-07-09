import React from 'react';
import '../styles/wonGameModal.css';
import { useNavigate } from 'react-router-dom';

const WonGameModal = ({ startGame }) => {
    const navigate = useNavigate();

    return (
        <div className="modal">
            <div className="modal-content">
                <h2 className="modal-heading">Congratulations!</h2>
                <p className="modal-text">YOU WON THE GAME!</p>
                <div className="button-group">
                    <button className="btns modal-button" onClick={startGame}>
                        Play Again
                    </button>
                    <button className="btns modal-button" onClick={() => navigate("/")}>
                        Select Difficulty
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WonGameModal;