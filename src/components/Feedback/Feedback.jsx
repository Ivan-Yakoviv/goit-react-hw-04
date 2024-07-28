import s from './Feedback.module.css';

const Feedback = ({ feedback, totalFeedback, dealOfPositive}) => {
  return (
    <div>
      <ul className={s.feedback}>
              <li>Good: {feedback.good}</li>
              <li>Neutral: {feedback.neutral}</li>
              <li>Bad: {feedback.bad}</li>
              <li>Total: {totalFeedback}</li>
              <li>Positive: {dealOfPositive}%</li>
      </ul>
    </div>
  )
}

export default Feedback
