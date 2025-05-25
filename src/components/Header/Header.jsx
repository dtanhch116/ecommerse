import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from './constants.js';
import Menu from "./Menu/Menu.jsx";
import styles from './styles.module.scss';
import reload from '@icons/svgs/reloadIcon.svg';
import heart from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';

function Header() {

    const { containerBoxIcon, 
        containerMenu, 
        containerHeader, 
        containerBox, 
            container } = styles;

    return (
        <div className={container}>
            <div className={containerHeader}>
            <div className={containerBox}>
                <div className={containerBoxIcon}>
                    {dataBoxIcon.slice(0, 3).map((item, index) => {
                        return <BoxIcon type={item.type} href={item.href} key={index} />
                    })}
                </div>
                <div className={containerMenu}>
                    {dataMenu.slice(0, 3).map((item, index) => {
                        return <Menu content={item.content} href={item.href} key={index}/>
                    })}
                </div>
            </div>
            <div>
                <img width='26px' src="" alt="" />
            </div>
            <div className={containerBox}>
                <div className={containerMenu}>
                    {dataMenu.slice(3, dataMenu.length).map((item, index) => {
                        return <Menu content={item.content} href={item.href} key={index}/>
                    })}
                </div>
                <div className={containerBoxIcon}>
                    <img width='26px' src={reload} alt="" />
                    <img width='26px' src={heart} alt="" />
                    <img width='26px' src={cart} alt="" />
                </div>
            </div>
        </div>
        </div>
    );
}

export default Header;