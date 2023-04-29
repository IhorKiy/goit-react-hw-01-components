import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/Statistic/Statistic.module.css';
import getRandomHexColor from 'helpers/getRandomColor';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li
            style={{ backgroundColor: getRandomHexColor() }}
            className={css.item}
            key={stat.id}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired,
  ),
  title: PropTypes.string,
};

export default Statistics;
