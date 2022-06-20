import React from 'react';
import './ApresentationCard.css'
import PropTypes from 'prop-types'


function ApresentationCard({ name, description, time }) {
    return (
        <div className='apresentation-card' >
            <h1>{ name }</h1>
            <p>{ description }</p>
            <footer className='apresentation-card-footer' >{ time }</footer>
        </div>
    );
}
ApresentationCard.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    time: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
}

export default ApresentationCard;
