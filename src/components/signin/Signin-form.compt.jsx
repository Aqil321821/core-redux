import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithemailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.compt';
import Button from '../button/Button.compt';
import './signin-form.styles.scss';
import { useNavigate } from 'react-router-dom';
const defaultFormFields = {
  email: '',
  password: '',
};

const Signin = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    signInWithGooglePopup();
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithemailAndPassword(email, password);
      resetFormFields();
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        alert('Incorrect Password');
      } else if (error.code === 'auth/user-not-found') {
        alert('No Such User ');
      } else {
        alert('Something went wrong', error);
      }
    }
  };

  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with Your Credentials</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' type='email' required onChange={handleChange} name='email' value={email} />
        <FormInput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>

          <Button type='button' buttonType='google' onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Signin;
