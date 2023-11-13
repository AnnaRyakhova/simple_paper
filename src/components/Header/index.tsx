import styles from './index.module.css';
import { LogoIcon, SearchIcon, LogInIcon, BurgerIcon, CloseIcon } from '../Icons';
import { useState } from 'react';
import cn from 'classnames';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.wrapper}>
            <nav className={styles.root}>
                <div className={styles.logoActions}>
                    <LogoIcon color={'#333'} />
                    <div className={styles.actionButtonsForMobile}>
                        <button className='buttonIcon'><SearchIcon /></button>
                        <button className='buttonIcon'><LogInIcon /></button>
                    </div>
                </div>
                <div className={styles.navSections}>
                    <ul className={cn(styles.links, { [styles.active]: isOpen })}>
                        <li><a href="#">Продукция</a></li>
                        <li><a href="#">Материалы</a></li>
                        <li><a href="#">О нас</a></li>
                        <li><a href="#">Контакты</a></li>
                    </ul>
                    <button onClick={() => setIsOpen(!isOpen)} className={cn(styles.menuIcon, 'buttonIcon')}>
                        {isOpen ? <CloseIcon /> : <BurgerIcon/>}
                    </button>
                    <div className={styles.actionButtons}>
                        <button className='buttonIcon'><SearchIcon /></button>
                        <button className='buttonIcon'><LogInIcon /></button>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;



// style={isOpen ?{ backgroundColor: '#EBEBEB'} : {backgroundColor: 'inherit'}}