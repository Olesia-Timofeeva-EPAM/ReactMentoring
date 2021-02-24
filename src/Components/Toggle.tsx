import * as React from 'react';

import * as styles from '../styles/toggle.scss';

const Toggle = props => {
    const {labels, text, type, onChange, value} = props;
    return (
        <div className={styles['toggle']}>
        <span className={styles['toggle__label']}> {text} </span>
        <div className={styles['toggle__body']}>
          <input
            id={'toggle-' + labels[0]}
            className={styles['toggle__item--left']}
            name={type + 'Toggle'}
            type="radio"
            value={labels[0].toLowerCase()}
            defaultChecked={!value}
            onChange={onChange}
          />
          <label htmlFor={'toggle-' + labels[0]} className={styles['btn']}>
            {labels[0]}
          </label>
          <input
            id={'toggle-' + labels[1]}
            className={styles['toggle__item--right']}
            name={type + 'Toggle'}
            value={labels[1].toLowerCase()}
            type="radio"
            defaultChecked={value}
            onChange={onChange}
          />
          <label htmlFor={'toggle-' + labels[1]} className={styles['btn']}>
            {labels[1]}
          </label>
        </div>
      </div>
    );
};

export default Toggle;