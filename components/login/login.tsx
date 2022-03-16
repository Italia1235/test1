import { useFormik, FormikErrors } from 'formik';
import { connect, ConnectedProps, useDispatch, useSelector } from 'react-redux';
import { LoginThunkCreator } from "../../redux/auth-reducer";
import { AppStateType } from '../../redux/redux-store';

import { Redirect } from 'react-router';

interface Values {
    email:string;
    password: string;
    rememberMe:boolean
  }
  
  const Login = () => {
    const isLoggedIn = useSelector<AppStateType,boolean>(state => state.auth.isAuth);
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: (values) => {
            const errors:FormikErrors<Values>  = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (values.password.length < 6) {
                errors.password = 'Too short. Password should be minimum 6 symbols.'
            }
            return errors;
        },
        onSubmit: values => {
            dispatch(LoginThunkCreator(values.email,values.password,values.rememberMe));
            formik.resetForm();
        },
    })

    if (isLoggedIn){
        return <Redirect to='/' />
    }
  
    return (
      <form onSubmit={formik.handleSubmit} > 
          
        <h1>Signup</h1>
        <div>

        <label>email</label>
        <input type="email" {...formik.getFieldProps('email')}/>
        {formik.touched.email && formik.errors.email
                    ? <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                    </div>

                    <div>
        <label>password</label>
        <input type="password" {...formik.getFieldProps('password')}/>
        {formik.touched.password && formik.errors.password
                    ? <div style={{color: 'red'}}>{formik.errors.password}</div> : null}
        </div>

<input type="checkbox"/>
        <button type="submit">login</button>
         
      </form>
    );
        }

        const mapState = (state: AppStateType) => {
            return {
                isAuth: state.auth.isAuth,
        
            }
        }

    type ReduxProps = ConnectedProps<typeof connector>
    const connector =  connect(mapState,{LoginThunkCreator})
    export default connector(Login)
