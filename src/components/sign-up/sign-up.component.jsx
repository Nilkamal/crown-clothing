import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { signUpStart } from '../../redux/user/user.actions';
import './sign-up.styles.scss';

const SignUp = ({ signUpStart }) => {
    const [userCredential, setUserCredential] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
    });

    const { displayName, email, password, confirmPassword, phoneNumber } = userCredential;

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Password do not match");
            return;
        }

        signUpStart({ displayName, email, password, phoneNumber });
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserCredential({
            ...userCredential,
            [name]: value
        })
    }

    return (<div className='sign-up'>
        <h2>I do not have account </h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
            <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={handleChange}
                label="Display Name"
                required
            />
            <FormInput
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                label="Email"
                required
            />

            <FormInput
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                label="Password"
                required
            />

            <FormInput
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleChange}
                label="Confirm Password"
                required
            />

            <FormInput
                type="phone"
                name="phoneNumber"
                value={phoneNumber}
                onChange={handleChange}
                label="Phone Number"
                required
            />

            <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
    </div>);
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (user) => dispatch(signUpStart(user))
})
export default connect(null, mapDispatchToProps)(SignUp);