import { Row } from 'antd';
import CardContent from '../cardContent/CardContent';
import styles from './CardContainer.module.css';

const CardContainer = () => {
    const cards = [
        {
            img:"../../assets/images/asd.png",
            title:"lorem ipsum",
            author:"Hüsnü Toner",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus suscipit magna dui, eget ultrices dui euismod in.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_1.png",
            title:"Nulla semper metus",
            author:"Mustafa Serkan Tiryaki",
            description:"Nulla semper metus aliquam, condimentum odio vitae, sodales mauris. Donec congue leo eu libero ultricies tempor. Duis commodo lacus eget felis volutpat molestie. Sed at pharetra mauris. Ut eu lorem placerat, tempus velit in, feugiat libero.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_2.png",
            title:"Suspendisse tempus dignissim lacus ac tincidunt",
            author:"Kerim Değirmenci",
            description:"Nam semper sapien et erat molestie, a porttitor sem volutpat. Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum pharetra orci, nec laoreet felis facilisis nec. Mauris ornare fermentum urna. Nunc non elit metus. Praesent sodales in nisi eget volutpat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_3.png",
            title:"Integer dignissim",
            author:"Ebu Bekir Behram",
            description:"Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam viverra egestas lorem, sed aliquet risus efficitur eu. Nunc tristique nisi ac massa finibus, sit amet blandit lectus suscipit. Mauris quis faucibus lorem. Integer dignissim condimentum orci, vitae pellentesque felis eleifend ac.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_5.png",
            title:"Suspendisse tempus dignissim lacus ac tincidunt",
            author:"Kerim Değirmenci",
            description:"Nam semper sapien et erat molestie, a porttitor sem volutpat. Suspendisse tempus dignissim lacus ac tincidunt. Donec elementum pharetra orci, nec laoreet felis facilisis nec. Mauris ornare fermentum urna. Nunc non elit metus. Praesent sodales in nisi eget volutpat.",
            date:"10.09.2020 - 10.10.2020",
        },
        {
            img:"../../assets/images/asd_4.png",
            title:"Integer dignissim",
            author:"Ebu Bekir Behram",
            description:"Integer nec vulputate libero. Donec at sollicitudin nibh. Nullam viverra egestas lorem, sed aliquet risus efficitur eu. Nunc tristique nisi ac massa finibus, sit amet blandit lectus suscipit. Mauris quis faucibus lorem. Integer dignissim condimentum orci, vitae pellentesque felis eleifend ac.",
            date:"10.09.2020 - 10.10.2020",
        },
    ]
  return (
    <Row className={styles.cardContainer}>
        <CardContent cards={cards} />
    </Row>
  )
}

export default CardContainer