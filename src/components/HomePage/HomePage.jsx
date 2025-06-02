import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvanceHeading from "@components/AdvanceHeading/AdvanceHeading";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProducts";

function HomePage() {
    const { container } = styles;
    return ( 
        <div>
            <div className={container}> 
                <Header />
                <Banner/>
                <Info/>
                <AdvanceHeading/>
                <HeadingListProduct/>
                <div style={{
                    height: '200px',
                }}>

                </div>
            </div>
        </div>
     );
}

export default HomePage;