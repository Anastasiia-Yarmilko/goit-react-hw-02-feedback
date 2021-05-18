import { Component } from 'react';
import Section from '../Section/section.js';
import Notification from '../Notification/notification.js';

class Statistics extends Component {
  countTotalFeedback = () => {
    let total = 0;
    return (total +=
      this.props.state.good + this.props.state.bad + this.props.state.neutral);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      Math.round((this.props.state.good / this.countTotalFeedback()) * 100) || 0
    );
  };

  render() {
    const { neutral, bad, good } = this.props.state;
    const totalFeedbacks = this.countTotalFeedback();

    if (totalFeedbacks === 0) {
      return <Notification message="No feedback given" />;
    } else {
      return (
        <Section title="Statistics" className="statistics">
          <div>Good: {good}</div>
          <div>Neutral: {neutral}</div>
          <div>Bad: {bad}</div>
          <div>Total: {totalFeedbacks}</div>
          <div>Positive feedback: {this.countPositiveFeedbackPercentage()} % </div> 
        </Section>
      );
    }
  }
}

export default Statistics;