import './App.css';
import { Component } from 'react';
import Feedback from './components/Feedback/feedback.js';
import Statistics from './components/Statistics/statistics.js';

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
          state={this.state}
          handleFeedback={this.handleFeedback}
          name="name"
        />
        <Statistics state={this.state} />
      </div>
    );
  }
} 