import React from 'react';
import PropTypes from 'prop-types';
import './ProgressIndicator.scss';

export const ProgressIndicator = ({ todos }) => {
    const completedCount = todos.filter(t => t.completed).length;
    const allCount = todos.length;
    const progress = completedCount / allCount;
    const hue = {
        from: 170,
        to: 200
    }
    const color = `hsl(${hue.from + progress * (hue.to - hue.from)}, 75%, 50%)`;
    const svgStrokeStyle = progress ? { strokeDashoffset: 145 - progress * 145 } : null;

    return (
        <div className="progress__wrapper">
            <span className="progress__title" style={{ color: color }}>{completedCount} of {allCount}</span>
            <svg className="progress__indicator progress__indicator--circle" viewBox="0 0 50 50" style={svgStrokeStyle} >
                <circle cx="25" cy="25" r="23" stroke={color} />
            </svg>
        </div>
    )
}

ProgressIndicator.propTypes = {
    todos: PropTypes.array.isRequired
}
