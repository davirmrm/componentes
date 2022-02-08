import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import { loader as loaderJSON } from './data';


const Loader = ({style = {}, loop = true, autoplay = true, animationData = loaderJSON, rendererSettings = { preserveAspectRatio: 'xMidYMid slice' }, height = 100, width = 100, isStopped = false, isPaused = false}) => {
  return (
    <div className='loader'>
      <Lottie
        options={{loop, autoplay, animationData, rendererSettings}}
        height={height}
        width={width}
        isStopped={isStopped}
        speed='.25'
        isPaused={isPaused}/>
    </div>
  );
}

Loader.propTypes = {
  style: PropTypes.object
}

export default Loader;
