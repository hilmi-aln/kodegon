import { Row } from 'antd';
import CardContent from '../cardContent/CardContent';
import styles from './CardContainer.module.css';

const CardContainer = () => {
    const cards = [
        {
            img:"../../assets/images/asd.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_1.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_2.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_3.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_5.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_4.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            date:"10.09.2020 - 10.10.2020",
        },
    ]
  return (
    <Row className={styles.cardContainer}>
        <CardContent cards={cards}/>
    </Row>
  )
}

export default CardContainer