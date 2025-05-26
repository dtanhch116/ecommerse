import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";

function AdvanceHeading() {
    const { container } = styles;
    return ( 
        <MainLayout>
            <div className={container}>test</div> 
        </MainLayout>
     );
}

export default AdvanceHeading;