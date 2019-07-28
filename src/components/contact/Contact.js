import React from "react";
import {Field, reduxForm} from 'redux-form';

class Contact extends React.Component {

    



  render() {
    return (
      <form>
        <h3>Contact us page</h3>
        <hr />
        <Field name="fullname" />
        <Field name="email" />
        <Field name="note" />
      </form>
    );
  }
}

export default reduxForm({
    form : "contact"
})(Contact);
