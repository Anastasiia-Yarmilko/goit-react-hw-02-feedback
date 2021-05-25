import './App.css';
import { Component } from 'react';
import Feedback from './components/Feedback/feedback.js';
import Statistics from './components/Statistics/statistics.js';
import FeedbackOptions from './components/FeedbackOptions/feedbackOptions.js'

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = event => {
    const { name } = event.currentTarget;

    const validFeedbackTypes = Object.keys(this.state).filter(
      key => name === key,
    );
    if (!validFeedbackTypes.length) return;

    this.setState(prevState => {
      return {
        ...prevState,
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {

    return (
      <div>
        <Feedback
          handleFeedback={this.handleFeedback}
        />

        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback} />
        <Statistics state={this.state} />
      </div>
    );
  }
} 