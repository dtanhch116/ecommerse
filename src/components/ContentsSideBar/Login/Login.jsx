import InputCommons from "@components/InputCommons/InputCommons";
import styles from './styles.module.scss';
import MyButton from "@components/Button/Button";

function Login() {
    const { container, title, boxRememberMe, boxBtnLogin, lostPws } = styles;
    return (
        <div className={container}>
            <div className={title}>SIGN IN</div>
            <InputCommons lable={'Username or email'} type={'text'} isRequired={true} />
            <InputCommons lable={'Password'} type={'password'} isRequired={true} />

            <div className={boxRememberMe}>
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            <div className={boxBtnLogin}>
            </div>

                <MyButton content={'Login'} />

            <div className={lostPws}>
                Lost your password!
            </div>
        </div>
    );
}

export default Login;