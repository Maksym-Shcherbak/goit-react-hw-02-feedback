export const FeedbackButton = feedbacks => {
  const keys = Object.keys(feedbacks);
  return keys.map(key => {
    return (
      <ul>
        <li>
          <button className="feedbackButton">{key}</button>;
        </li>
      </ul>
    );
  });
};
