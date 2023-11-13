import styles from './index.module.css';
import Button from '../Button';
import pic from '/Users/annaryakhova/Education/simple/src/images/sketchbook/pic.png';

const Sketcbook = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textContent}>
                <h2>Simple скетчбук</h2>
                <p className='text'>
                    80 листов, твердая обложка, бумага  Fabriano 200 г/м2. Подойдет и для графики и для акварели. Для самых смелых творческих замыслов!
                </p>
                <Button className={styles.btn}>Купить</Button>
            </div>

            <div className={styles.imageWrapper}>
                <img src={pic}/>
            </div>
        </div>
    )
}

export default Sketcbook;