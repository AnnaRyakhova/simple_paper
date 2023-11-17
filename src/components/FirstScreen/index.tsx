import Button from "../Button";
import styles from './index.module.css';
import firstScreen from '/images/firstScreen.png';
import cn from 'classnames';

const FirstScreen = () => {
    const textClassName = cn('text', styles.description);
    return (
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h1>Простые вещи.<br></br>Из бумаги</h1>
                    <p className={textClassName}>Бума́га (предположительно от итал. bombagia, первоисточником же считается иранский) — волокнистый материал с минеральными добавками. </p>
                    <Button className={styles.btn}>Каталог</Button>
                </div>

                <div className={styles.imageWrapper}>
                    <img src={firstScreen} />
                </div>
            </div>
        </div>
    )
}

export default FirstScreen;

