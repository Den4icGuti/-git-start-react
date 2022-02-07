import PropTypes from 'prop-types';
import styles from './Alert.module.css'

function AlertWindow({ text, type}) { 
  // const changeColor = type ? `Alert--${type}` : '';
  return (
    <p role='alert' className={styles[type]}>
      {text}
    </p>
  );
}
AlertWindow.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'warning', 'error'])
  .isRequired,
 
};

export default AlertWindow;