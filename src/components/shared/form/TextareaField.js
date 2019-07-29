import React from 'react';

const TextareaField = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
        <div className={className}>
        <label>{label}</label>
        <textarea {...input}></textarea>
        {renderError(meta)}
      </div>
    );
}

const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
}

export default TextareaField;