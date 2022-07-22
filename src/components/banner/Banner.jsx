import styles from './Banner.module.css';
import banner from "../../assets/images/Banner.png";

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
        <img src={banner} alt="banner" className={styles.Banner}/>
    </div>
  )
}

export default Banner