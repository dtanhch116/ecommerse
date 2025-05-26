import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvanceHeading from "@components/AdvanceHeading/AdvanceHeading";
import Info from "@components/Info/Info";

function HomePage() {
    const { container } = styles;
    return ( 
        <div>
            <div className={container}> 
                <Header />
                <Banner/>
                <Info/>
                <AdvanceHeading/>
            </div>
        </div>
     );
}

export default HomePage;