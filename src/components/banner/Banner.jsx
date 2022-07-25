import styles from './Banner.module.css';
import banner from "../../assets/images/Banner.png";
import { ArrowLeftOutlined, ArrowRightOutlined, LineOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(4);

  const leftClick = () => {
    if (current === 0) {
      setCurrent(total);
    } else {
      setCurrent(current - 1);
    }
  }
  const rightClick = () => {
    if (current === total) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  return (
    <div className={styles.bannerContainer}>
      <img src={banner} alt="banner" className={styles.Banner} />
      <div className={styles.slider}>
        <span className={styles.leftArrow} onClick={leftClick}><ArrowLeftOutlined /></span>
        <span className={styles.rightArrow} onClick={rightClick}><ArrowRightOutlined /></span>
        <div className={current === 1 ? styles.filledSquire : styles.emptySquire}></div>
        <div className={current === 2 ? styles.filledSquire : styles.emptySquire}></div>
        <div className={current === 3 ? styles.filledSquire : styles.emptySquire}></div>
        <div className={current === 4 ? styles.filledSquire : styles.emptySquire}></div>
        <div className={current === 0 ? styles.filledSquire : styles.emptySquire}></div>
      </div>
    </div>
  )
}

export default Banner