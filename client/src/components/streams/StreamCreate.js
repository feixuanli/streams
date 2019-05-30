import React from 'react';
import { Field, reduxForm } from 'redux-form';

// const StreamCreate = () => {  // helper methods 
class StreamCreate extends React.Component {

    renderInput({ input, label }) {
        // console.log(formProps)
        return (
            // <input onChange={formProps.input.onChange} value={formProps.input.value} />
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>
        );
    }

    onSubmit(formValues) {
        console.log('formValues', formValues)
        // event.preventDefault(); // redux form does it automatically 

    }

    render() {
        // console.log('this.props', this.props);
        return (
            <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);