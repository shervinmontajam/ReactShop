import React from 'react';

const createAlert = (props) => {
    if(props.type === "success") {
        return (
            <div className="alert alert--success">
                <i className="check icon big"></i> {props.children}
            </div>
        );
    }
    else if(props.type === "danger") {
        return (
            <div className="alert alert--danger">
                <i className="exclamation icon big"></i> {props.children}
            </div>
        );
    }
    else if(props.type === "warning") {

    }
    else {

    }
}

const Alert = (props) => {
    return createAlert(props);
}

export default Alert;