import Signup from '../../components/signup-form/Signup-form.compt';
import Signin from '../../components/signin/Signin-form.compt';
import './auth.styles.scss'
const Auth = () => { 
 

  return (
    <div className='auth-container'>
      <Signin />
      <Signup />
    </div>
  );
};

export default Auth;
