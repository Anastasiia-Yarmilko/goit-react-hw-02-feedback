import './App.css';
import { Component } from 'react';
import Statistics from './components/Statistics/statistics.js';
import FeedbackOptions from './components/FeedbackOptions/feedbackOptions.js';
import Section from './components/Section/section.js';


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
        <Section title="Please leave feedback" className="feedback" />
        <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleFeedback} />
        <Statistics state={this.state} />
      </div>
    );
  }
} 