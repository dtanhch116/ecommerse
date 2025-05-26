import styles from '../styles.module.scss';


function InfoCart({ content, description, src}) {
    const { containerCart, containerContent, title, des } = styles;
    return ( 
        <div className={containerCart}>
            <img src={src} width={40} height={41} />

            <div className={containerContent}>
                <div className={title}>{content}</div>
                <div className={des}>{ description }</div>
            </div>
        </div>
     );
}

export default InfoCart;