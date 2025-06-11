import HeaderSideBar from '@components/ContentsSideBar/Components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { CiHeart } from "react-icons/ci";
import ItemProduct from '@components/ContentsSideBar/Components/ItemProduct/ItemProduct';
import MyButton from '@components/Button/Button';


function WishList() {
    const { container, boxBtn } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<CiHeart style={{ fontSize: '30px' }} />} title={'WISHLIST'} />
                <ItemProduct />
            </div>
            <div className={boxBtn}>
                <MyButton content={'VIEW WISHLIST'} />
                <MyButton content={'ADD ALL TO CART'} isPrimary={false} />
            </div>
        </div>
    );
}

export default WishList;