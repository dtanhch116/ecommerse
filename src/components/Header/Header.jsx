import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from './constants.js';
import Menu from "./Menu/Menu.jsx";
import styles from './styles.module.scss';
import reload from '@icons/svgs/reloadIcon.svg';
import heart from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';
import useScrollHanding from "@/hooks/useScrollHanding";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";



function Header() {

    const { containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container, fixedHeader, topHeader } = styles;

    const { scrollPosition } = useScrollHanding();
    const [ fixedPosition, setFixedPosition ] = useState(false);
    const { setIsOpen, setType} = useContext(SideBarContext);   

    const handleOpenSideBar = (type) => {
        setIsOpen(true);
        setType(type);
    } 
    
    useEffect(() => {
        setFixedPosition(scrollPosition > 70);

    }, [scrollPosition])

    

    return (
        <div className={classNames(container, topHeader,{
            [fixedHeader]: fixedPosition
        })}>
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
                        <TfiReload style={{
                            fontSize: '20px'
                        }}
                        onClick={() =>handleOpenSideBar('conpare')}
                        />
                        <CiHeart style={{
                            fontSize: '25px'
                        }}
                        onClick={() => handleOpenSideBar('wishlist')}
                        />
                        <PiShoppingCartThin style={{
                            fontSize: '25px'
                        }}
                        onClick={() => handleOpenSideBar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;