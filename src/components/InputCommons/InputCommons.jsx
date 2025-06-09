import { useState } from 'react';
import styles from './styles.module.scss';
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";



function InputCommons({lable, type, isRequired = false }) {

    const {lableInput, boxInput, container, boxIcon} = styles;
    const isPassword = type === 'password';
    const [isShowPassword, setIsShowPassword] = useState(false);
    const isShowTextPassword = type === 'password' && isShowPassword ? 'text' : type;
    const handleShowPass = () => {
        setIsShowPassword(!isShowPassword);
    };
    return ( 
        <div className={container}>
            <div className={lableInput}>{lable} {isRequired && <span style={{color: 'red'}}>*</span>}</div>
            <div className={boxInput}>
                <input type={isShowTextPassword} />
                {
                isPassword && <div className={boxIcon} onClick={handleShowPass}>
                    { isShowPassword ? <FiEye /> : <FiEyeOff />}
                </div>
                }
            </div>
        </div>
     );
}

export default InputCommons;