import styles from './CardContent.module.css';
import asd from '../../assets/images/asd.png';
import { ArrowRightOutlined, CalendarOutlined } from '@ant-design/icons';
import { Col } from 'antd';

const CardContent = ({ cards }) => {
  return (
    <Col className={styles.container} >
      <header><h1 className={styles.header}>Suspendisse Tempus</h1></header>
      <div className={styles.cardContainer} lg={6} xs={24}>
        {cards.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.cardImg}>
                <img src={asd} alt="example" />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitleInfo}>
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                  <p className={styles.cardAuthor}>{card.author}</p>
                </div>
                <p className={styles.cardDescription}>{card.description}</p>
                <div className={styles.cardBottom}>
                  <p className={styles.cardDate}><span><CalendarOutlined /></span>{card.date}</p><span className={styles.arrowIcon}><ArrowRightOutlined /></span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Col>
  )
}

export default CardContent