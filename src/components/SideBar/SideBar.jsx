import { useContext } from 'react';
import styles from './styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { TfiClose } from "react-icons/tfi";
import Login from '@components/ContentsSideBar/Login/Login';
import Compare from '@components/ContentsSideBar/Compare/Compare';
import WishList from '@components/ContentsSideBar/WishList/WishList';
import Cart from '@components/ContentsSideBar/Cart/Cart';



function SideBar() {

    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);
    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    const handleContent = () => {
        switch (type) {
            case 'login':
                return <Login />
            case 'conpare':
                return <Compare />
            case 'wishlist':
                return <WishList />
            case 'cart':
                return <Cart />

            default:
                return <Login />
        }
    }

    return (
        <div className={container}>
            <div className={classNames({
                [overlay]: isOpen
            })}
                onClick={handleToggle}
            ></div>
            <div className={classNames(sideBar, {
                [slideSideBar]: isOpen
            })}>
                {
                    isOpen && (
                        <div className={boxIcon} onClick={handleToggle}>
                            <TfiClose />
                        </div>
                    )
                }
                {
                    handleContent()
                }
            </div>
        </div>
    );
}

export default SideBar;