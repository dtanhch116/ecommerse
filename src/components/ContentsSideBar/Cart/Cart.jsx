import HeaderSideBar from '@components/ContentsSideBar/Components/HeaderSideBar/HeaderSideBar';
import styles from './styles.module.scss';
import { PiShoppingCartThin } from "react-icons/pi";
import MyButton from '@components/Button/Button';
import ItemProduct from '@components/ContentsSideBar/Components/ItemProduct/ItemProduct';

function Cart() {
    const { container, boxBtn, total } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<PiShoppingCartThin style={{ fontSize: '30px' }} />} title={'CART'} />
                <ItemProduct />
            </div>

            <div>
                <div className={total}>
                    <p>SUBTOTAL:</p>
                    <p>$99.99</p>
                </div>
                <div className={boxBtn}>
                    <MyButton content={'VIEW CART'} />
                    <MyButton content={'CHECKOUT'} isPrimary={false} />
                </div>
            </div>
        </div>
    );
}

export default Cart;