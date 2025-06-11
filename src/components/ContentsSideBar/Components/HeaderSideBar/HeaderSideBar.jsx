
import ItemProduct from '@components/ContentsSideBar/Components/ItemProduct/ItemProduct';
import styles from './styles.module.scss';

function HeaderSideBar({icon, title}) {
    const { container } = styles;
    return ( 
            <div className={container}>
                {icon}
                <div>{title}</div>
            </div>
     );
}

export default HeaderSideBar;