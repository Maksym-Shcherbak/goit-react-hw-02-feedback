import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';

export const Section = ({ title, feedbacks }) => {
  return (
    <section className="feedbackForm">
      <h2 clasName="feedbackFormTitle">{title}</h2>
      <FeedbackButton feedbacks={feedbacks}></FeedbackButton>
    </section>
  );
};
