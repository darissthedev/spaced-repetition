import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import { BackSide } from 'react-flippy'
import './AnswerCard.css'

class AnswerCard extends Component {
  render() {
    const { word, results, loading, handleNextQuestion } = this.props
    return (
      <BackSide>
        <div className="results-container">
            <h1 className="description">
                {results.isCorrect
                ? `Good job! You answered correctly.`
                : `Sorry, you answered incorrectly.`}
            </h1>
            {!results.answer && <Loading loading={loading} />}
            <h3>{`The correct translation of ${word} is ${results.answer}`}</h3>
            <div className="results-info">
                <p>{`Total score: ${results.totalScore}`}</p>
            </div>  
            <button type="button" className="next stylish-btn" onClick={handleNextQuestion}>
            Next Question
            </button>                  
        </div>
      </BackSide>
    )
  }
}

export default AnswerCard