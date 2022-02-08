import React from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Icon, InfoItem, InfoItemHeading } from '../';



const ListItem = ({testid = false, style = {}, data = [], isHeading = true, clickable = false, onClick = () => {}, icon = null}) => {
  return (
      <div testid={testid} style={style} className={`listItem ${clickable ? 'click' : ''}`}>
        {isHeading ?        
        data.map((e, index) => (
          <>
            <div className='element'>
              <InfoItemHeading 
                onClick={() => {if (clickable) {onClick(e)}}}
                key={e.id}
                {...e}
              />
              {icon !== null && <Icon icon={icon} onClick={() => {if (clickable) {onClick(e)}}}/>}
            </div>
            {index === data.length -1 ? '' : <div className='separator'/>}
          </>
        ))
        :
        data.map((e, index) => (
          <>
            <div className='element'>
              <InfoItem 
                onClick={() => {if (clickable) {onClick(e)}}}
                key={e.id}
                {...e}
              />
              {icon !== null && <Icon icon={icon} onClick={() => {if (clickable) {onClick(e)}}}/>}
            </div>
            {index === data.length -1 ? '' : <div className='separator'/>}
          </>
        ))}
      </div>
  );
}
ListItem.propTypes = {
  style: PropTypes.object
}

export default ListItem;
