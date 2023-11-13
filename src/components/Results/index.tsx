import styles from './index.module.css';
import res1 from '/Users/annaryakhova/Education/simple/src/images/results/res1.png';
import res2 from '/Users/annaryakhova/Education/simple/src/images/results/res2.png';
import res3 from '/Users/annaryakhova/Education/simple/src/images/results/res3.png';
import openFolder from '/Users/annaryakhova/Education/simple/src/images/results/openFolder.png';
import cn from 'classnames';

const descriptionClassName = cn('text', styles.description)
 
const Results = () => {

    return (
        <div className={styles.background}>
            <div className='container'>
                <div className={styles.wrap}>
                    <div className={styles.results}>
                        <div className={styles.result}>
                            <img src={res1} />
                            <div>
                                <h3>V.1</h3>
                                <p className={descriptionClassName}>
                                    Результат вашего обучения
                                </p>
                            </div>
                        </div>

                        <div className={styles.result}>
                            <img src={res2} />
                            <div>
                                <h3>V.2</h3>
                                <p className={descriptionClassName}>
                                    Результат вашего обучения
                                </p>
                            </div>
                        </div>

                        <div className={styles.result}>
                            <img src={res3} />
                            <div>
                                <h3>V.3</h3>
                                <p className={descriptionClassName}>
                                    Результат вашего обучения
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.info}>
                        <div className={styles.image}>
                            <img src={openFolder} />
                        </div>
                        <div className={styles.textContent}>
                            <h2>Максимальная белизна</h2>
                            <p className='text'>Для повышения белизны, гладкости и мягкости в состав бумажной массы вводят белые минеральные вещества: мел, тальк, каолин и др. Эта операция называется наполнением.<br></br> <br></br>
                                Отлив бумажного листа осуществляют на бумагоделательной машине, важнейшей частью которой является непрерывно движущаяся (как транспортер) металлическая или капроновая сетка.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results;