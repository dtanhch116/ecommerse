import CountdownTimer from "@components/CountdownTimer/CountdownTimer";
import styles from "./styles.module.scss";
import MyButton from "@components/Button/Button";

function CountdownBanner() {
    const { container, containerTimmer, title, boxBtn } = styles;
    return ( 
        <div className={container}>
            <div className={containerTimmer}>
                <CountdownTimer />
            </div>
            <h1 className={title}>The classics make a comeback</h1>
            <div className={boxBtn}>
                <MyButton content={'Buy now'}/>
            </div>
        </div>
     );
}

export default CountdownBanner;