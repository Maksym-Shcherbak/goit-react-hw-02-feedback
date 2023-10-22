import css from './Statistics.module.css';

export const Statistics = ({ options, total, positivePercentage }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li key={option[0]} className={css.statisticsItem}>
            <p>
              {option[0]}:{' '}
              <span className={css.statisticsNumber}>{option[1]}</span>
            </p>
          </li>
        );
      })}
      <li key="total" className={css.statisticsItem}>
        <p>
          total: <span className={css.statisticsNumber}> {total}</span>
        </p>
      </li>
      <li key="positivePercentage" className={css.statisticsItem}>
        <p>
          Positive feedback:{' '}
          <span className={css.statisticsNumber}> {positivePercentage}%</span>
        </p>
      </li>
    </ul>
  );
};
