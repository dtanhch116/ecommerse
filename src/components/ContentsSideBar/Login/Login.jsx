import InputCommons from "@components/InputCommons/InputCommons";
import styles from './styles.module.scss';
import MyButton from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";

function Login() {
    const { container, title, boxRememberMe, boxBtnLogin, lostPws } = styles;
    const [isRegister, setIsRegister] = useState(false);
    const { toast } = useContext(ToastContext);
    const handleTonggle = () => {
        setIsRegister(!isRegister);
        formik.resetForm();
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email!').required('Email is required'),
            password: Yup.string().min(6, 'Password must be ai least 6 characters').required('Password is required'),
            cfmPassword: Yup.string().oneOf(
                [Yup.ref('password'), null],
                'Passwords must match'
            )
        }),
        onSubmit: (value) => {
            console.log(value);
        }
    })

    return (
        <div className={container}>
            <div className={title}>{isRegister ? 'SIGN UP' : 'SIGN IN'}</div>
            <form onSubmit={formik.handleSubmit}>
                <InputCommons id='email' lable={'Username or email'} type={'text'} isRequired={true}
                    // onBlur={formik.handleBlur}
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    formik={formik}
                />

                <InputCommons id='password' lable={'Password'} type={'password'} isRequired={true}
                    formik={formik}
                />

                {isRegister && (
                    <InputCommons id='cfmPassword' lable={'Confirm Password'} type={'confirmPassword'} isRequired={true}
                        formik={formik}
                    />
                )}

                {!isRegister && (
                    <div className={boxRememberMe}>
                        <input type="checkbox" />
                        <span>Remember me</span>
                    </div>
                )}

                <MyButton content={isRegister ? 'Register' : 'Login'}
                 type='submit' 
                 onClick={() => toast.success('message')}
                 />
            </form>

            <MyButton content={
                isRegister ? 'Already have an account!' : 'Don`t have an account!'
            } type='submit' isPrimary={false} style={{
                marginTop: '10px'
            }}
                onClick={handleTonggle}
            />

            {!isRegister && (
                <div className={lostPws}>
                    Lost your password!
                </div>
            )}
        </div>
    );
}

export default Login;