import Button from "../Button";
import styles from './index.module.css';
import firstScreen from '/Users/annaryakhova/Education/simple/src/images/firstScreen.png';
import main690 from '/Users/annaryakhova/Education/simple/src/images/main690.png';
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
                {/* <picture className={styles.imageWrapper}>
                    <source srcSet={main690} media="(max-width: 1110px)" />
                    <img src={firstScreen} alt="Тубус с бумагой" className={styles.image} />
                </picture> */}

                <div className={styles.imageWrapper}>
                    <img className={styles.image} src={firstScreen} />
                </div>

            </div>
        </div>
    )
}

export default FirstScreen;

