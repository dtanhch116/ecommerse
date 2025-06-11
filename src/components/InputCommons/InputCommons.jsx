import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";



function InputCommons({ lable, type, isRequired = false, ...props }) {

    const { lableInput, boxInput, container, boxIcon, errorMessage } = styles;
    const {formik, id } = props;
    const isPassword = type === 'password';
    const [isShowPassword, setIsShowPassword] = useState(false);
    const isShowTextPassword = type === 'password' && isShowPassword ? 'text' : type;
    const handleShowPass = () => {
        setIsShowPassword(!isShowPassword);
    };
    
    const isErr = formik.touched[id] && formik.errors[id];
    const messError = formik.errors[id];
    
    return (
        <div className={container}>
            <div className={lableInput}>{lable} {isRequired && <span style={{ color: 'red' }}>*</span>}</div>
            <div className={boxInput}>
                <input type={isShowTextPassword} {...props} 
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values[id]}
                />
                {
                    isPassword && <div className={boxIcon} onClick={handleShowPass}>
                        {isShowPassword ? <FiEye /> : <FiEyeOff />}
                    </div>
                }
                {isErr && (<div className={errorMessage}>{messError}</div>)}
            </div>
        </div>
    );
}

export default InputCommons;