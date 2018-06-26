import React from 'react';
import './schedulecard.css';
import PropTypes from 'prop-types';

function ScheduleCard(props){
  return(
    <div className='schedule-card-wrapper'>
      <div className='column'>{props.day}</div>
      <div className='column'>{props.location}</div>
      <div className='column'>{props.hours}</div>
      <div className='column'>{props.booth}</div>
    </div>
  );
}

ScheduleCard.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};

export default ScheduleCard;
