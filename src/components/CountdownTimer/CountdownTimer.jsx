import styles from "./styles.module.scss";

function CountdownTimer() {
    const { box, title } = styles;
    return ( 
        <div className={box}>
            countdown time
        </div>
     );
}

export default CountdownTimer;