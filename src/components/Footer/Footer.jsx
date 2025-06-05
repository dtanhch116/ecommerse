import { dataMenu } from '@components/Footer/constant';
import styles from './styles.module.scss';

function Footer() {

    const { container, boxNav, text, text_center } = styles;
    return <>
        <div className={container}>
            <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png"
                width={160}
                height={55}
                alt="" />
            <div className={boxNav}>
                {dataMenu.map((item, index) => (
                    <div key={index}>{item.content}</div>
                ))}
            </div>

            <div className={text_center}>
                <p style={{
                    marginBottom: '20px'
                }}>Guaranteed safe ckeckout</p>
                <img
                    src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="" />
                <div style={{
                    marginTop: '30px'
                }}>
                    Copyright © 2024 XStore theme. Created by Dinh Tuan Anh – WordPress WooCommerce themes.
                </div>
            </div>
        </div>
    </>;
}

export default Footer;