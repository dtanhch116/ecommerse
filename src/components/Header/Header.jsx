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

function Header() {

    const { containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container, fixedHeader, topHeader } = styles;

    const { scrollPosition } = useScrollHanding();
    const [ fixedPosition, setFixedPosition ] = useState(false);
    
    useEffect(() => {
        setFixedPosition(scrollPosition > 70);

    }, [scrollPosition])

    const {isOpen, setIsOpen} = useContext(SideBarContext);    

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
                            return <Menu content={item.content} href={item.href} key={index} setIsOpen={setIsOpen}/>
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