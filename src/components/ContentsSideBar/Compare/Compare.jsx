import HeaderSideBar from "@components/ContentsSideBar/Components/HeaderSideBar/HeaderSideBar";
import { TfiReload } from "react-icons/tfi";
import styles from './styles.module.scss';
import ItemProduct from "@components/ContentsSideBar/Components/ItemProduct/ItemProduct";
import MyButton from "@components/Button/Button";

function Compare() {
    const { container, boxContent } = styles;
    return (
        <div className={container}>
            <div className={boxContent}>
                <HeaderSideBar icon={<TfiReload style={{ fontSize: '30px' }} />} title={'COMPARE'} />
                <ItemProduct />
            </div>
            <div>
                <MyButton content={'VIEW COMPARE'} />
            </div>
        </div>
    );
}

export default Compare;