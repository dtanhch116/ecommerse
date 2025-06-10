import HeaderSideBar from "@components/ContentsSideBar/Components/HeaderSideBar/HeaderSideBar";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import styles from './styles.module.scss';
import ItemProduct from "@components/ContentsSideBar/Components/ItemProduct/ItemProduct";
import MyButton from "@components/Button/Button";

function Compare() {
    const { container } = styles;
    return (  
        <div className={container}>
            <HeaderSideBar icon={<TfiReload style={{ fontSize: '30px' }}/>} title={'COMPARE'}/>
            <ItemProduct />
            <MyButton content={'VIEW COMPARE'}/>
        </div>
    );
}

export default Compare;