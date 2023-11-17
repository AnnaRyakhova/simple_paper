import styles from './index.module.css';
import client1 from '/images/clients/client1.png';
import client2 from '/images/clients/client2.png';
import client3 from '/images/clients/client3.png';
import client4 from '/images/clients/client4.png';

const Clients = () => {
    return (
        <div className={styles.background}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.imgWrapper}>
                        <img src={client1}></img>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img src={client2}></img>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img src={client3}></img>
                    </div>

                    <div className={styles.imgWrapper}>
                        <img src={client4}></img>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Clients;