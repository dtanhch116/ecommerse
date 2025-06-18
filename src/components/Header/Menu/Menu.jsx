import { useContext, useState } from 'react';
import styles from '../styles.module.scss';
import { SideBarContext } from '@/contexts/SideBarProvider';
import { StoreContext } from '@/contexts/StoreProvider';

function Menu({ content, href }) {
    const { menu, subMenu } = styles;
    const { setIsOpen, setType } = useContext(SideBarContext);
    const { userInfo } = useContext(StoreContext);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);


    const handleClickShowLogin = () => {
        if (content === 'Sign in' && !userInfo) {
            setIsOpen(true);
            setType('login');
        };
    };

    const handleShowRenderText = (content) => {
        if (content === 'Sign in' && userInfo) {
            return userInfo.username;
        } else {
            return content;
        }
    }

    const handleHover = () => {
        console.log(content);
        if (content === 'Sign in' && userInfo) {
            setIsShowSubMenu(true);
        } else {
        }
    }

    return (
        <div className={menu} onMouseEnter={handleHover} onClick={handleClickShowLogin}>
            {
                handleShowRenderText(content)
            }
            {isShowSubMenu && (<div onMouseLeave={() => setIsShowSubMenu(false)} className={subMenu}>
                test
            </div>)}
        </div>
    );
}

export default Menu;