import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/feedbackOptions.js';
import Section from '../Section/section.js';

class Feedback extends Component {
  render() {
    
    return (
      <div>
        <Section title="Please leave feedback" className="feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClick} />
        </Section>
      </div>
    );
  }
}

export default Feedback;
