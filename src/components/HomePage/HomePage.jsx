import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import styles from "./styles.module.scss";
import AdvanceHeading from "@components/AdvanceHeading/AdvanceHeading";
import Info from "@components/Info/Info";
import HeadingListProduct from "@components/HeadingListProduct/HeadingListProducts";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/productService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";
import Footer from "@components/Footer/Footer";

function HomePage() {
    const { container } = styles;

    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProducts().then((res) => {
            setListProduct(res.contents);
        });
    }, []);    

    return (
        <>
            <Header />
            <Banner />
            <Info />
            <AdvanceHeading />
            <HeadingListProduct data={listProduct.slice(0,2)}/>
            <PopularProduct data={listProduct.slice(2, 10)}/>
            <SaleHomePage />
            <Footer />
        </>
    );
}

export default HomePage;