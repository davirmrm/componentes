import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';


const ChatRenderer = props => {
  return (
    <div className='chatRenderer'>
      <span>
        {props.value}
      </span>
    </div>
  );
}

ChatRenderer.propTypes = {
  style: PropTypes.object
}

export default ChatRenderer;
