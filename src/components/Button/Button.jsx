import styles from "./styles.module.scss";
import classNames from "classnames";
function MyButton({ content, isPrimary = true }) {
    const { btn, primaryBtn, secondaryBtn } = styles;
    return (
        <button className={classNames(btn, {
            [primaryBtn]: isPrimary,
            [secondaryBtn]: !isPrimary
        })}>{content}</button>
    );
}

export default MyButton;