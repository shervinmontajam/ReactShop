import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '../shared/form/TextField';
import TextareaField from '../shared/form/TextareaField';

class ContactForm extends React.Component {

    onSubmit = formValues => {
      console.log(formValues);
    };
  
    render() {
      return (
        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
          <Field name="fullname" component={TextField} label="Enter your name:" />
          <Field name="email" component={TextField} label="Enter your email:" />
          <Field name="note" component={TextareaField} label="Enter note:" />
          <button className="ui button primary">Submit</button>
        </form>
      );
    }
  }

  
const validate = formValues => {
    const errors = {};
  
    if (!formValues.fullname) {
      errors.fullname = 'You must enter a fullname';
    }
  
    if (!formValues.email) {
      errors.email = 'You must enter a email';
    }
    
    if (formValues.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
      }
  
    return errors;
  };


  export default reduxForm({
    form : "contact", validate
})(ContactForm);