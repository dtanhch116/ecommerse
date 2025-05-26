import styles from "./styles.module.scss";
function MyButton({ content }) {
    const { btn } = styles;
    return <div>
        <button className={btn}>{content}</button>
    </div>;
}

export default MyButton;