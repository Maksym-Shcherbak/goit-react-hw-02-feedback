import { Component } from 'react';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '15px',
          fontSize: 40,
          color: '#010101',
          background: 'linear-gradient(45deg, #49a09d, #5f2c82',
        }}
      >
        <Section title="Please leave feedback" feedbacks={this.state}></Section>
      </div>
    );
  }
}
