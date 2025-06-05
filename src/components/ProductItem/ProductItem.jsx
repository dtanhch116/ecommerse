import styles from './styles.module.scss';
import reload from '@icons/svgs/reloadIcon.svg';
import heart from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';

function ProductItem({
    src, prevSrc, name, price
}) {    
    const { boxImg, showImgWhenHover, showFncWhenHover, boxIcon, title, priceCl } = styles;
    return ( 
        <div>
            <div className={boxImg}>
                <img src={src} />
                <img 
                src={prevSrc}
                alt=''
                className={showImgWhenHover}
                />

                <div className={showFncWhenHover}>
                    <div className={boxIcon}>
                        <img src={cart} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cart} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cart} alt="" />
                    </div>
                    <div className={boxIcon}>
                        <img src={cart} alt="" />
                    </div>
                </div>
            </div>
            <div className={title}>{name}</div>
            <div className={priceCl}>${price}</div>
        </div>
     );
}

export default ProductItem;