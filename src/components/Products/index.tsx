import { FC } from 'react';
import styles from './index.module.css';
import cn from 'classnames';
import { ArrowIcon } from '../Icons';

interface Card {
    title: string;
    circulation: number;
    description: string;
    imgPath: string;
    bgPosition: string;
}


const Card: FC<Card> = ({ title, circulation, description, imgPath, bgPosition }) => {
    return (
        <div className={styles.cardWrapper}>
            <div className={styles.imageWrapper} style={{ backgroundImage: `url(${imgPath})`, backgroundPosition: `${bgPosition}` }} >
            </div>

            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>Тираж: от {circulation} штук</p>
            <p className={cn('text', styles.description)}>{description}</p>

            <button className={styles.button}>Подробнее <ArrowIcon className={styles.arrow} /> </button>
        </div>
    )
}

const products = [{
    title: 'Упаковка', circulation: 50, description: 'Сделано из крафт-бумаги или плотного картона. Упаковки имеют различные формы и расцветки, изготовим форму под заказ.',
    imgPath: 'src/images/products/packages.png', bgPosition: 'top 20px center',
},
{
    title: 'Пакеты', circulation: 200, description: 'С прямоугольным дном. От 10 см до 60 см по высоте. Материалы: картон, крафт-бумага. Различные расцветки и дизайн.',
    imgPath: 'src/images/products/packs.png', bgPosition: 'top 20px center',
}, {
    title: 'Кейсы', circulation: 30, description: 'Подойдет для документов и других бумаг. Различные расцветки, размеры и плотность. Материал: прессованная бумага.',
    imgPath: 'src/images/products/cases.png', bgPosition: 'top 20px left 15px',
}, {
    title: 'Другие изделия', circulation: 100, description: 'Нестандартные упаковки, кейсы и другие изделия различных размеров и конфигураций. Изготовим в кратчайшие сроки.',
    imgPath: 'src/images/products/others.png', bgPosition: 'top 18px center',
}
]

const Products = () => {

    return (
        <div className='container'>
            <div className={styles.cardsWrapper}>
                {products.map(({ title, circulation, description, imgPath, bgPosition }) => {
                    return (
                        <Card
                            title={title}
                            circulation={circulation}
                            description={description}
                            imgPath={imgPath}
                            bgPosition={bgPosition}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Products;