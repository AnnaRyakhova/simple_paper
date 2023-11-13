import styles from './index.module.css';
import { LogoIcon, FacebookIcon, TwitterIcon, InstagramIcon, YoutubeIcon } from '../Icons';
import cn from 'classnames';

const Footer = () => {
    const rootClass = cn('container', styles.root);
    return (
        <>
            <div className={styles.footer}>
                <div className={rootClass}>
                    <LogoIcon color='#fff'/>
                    <div className={styles.footerDecorEl}></div>
                    <div className={styles.socialMedias}>
                        <button className='buttonIcon'><FacebookIcon /></button>
                        <button className='buttonIcon'><TwitterIcon /></button>
                        <button className='buttonIcon'><InstagramIcon /></button>
                        <button className='buttonIcon'><YoutubeIcon /></button>
                        
                    </div>
                </div>
            </div>

            <div className={styles.subFooter}><p>Simple <span className={styles.trademark}>®</span> 2021</p></div>
        </>
    )
}

export default Footer;