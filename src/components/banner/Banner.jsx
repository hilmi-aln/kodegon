import styles from './Banner.module.css';
import banner from "../../assets/images/Banner.png";
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Banner = () => {
  //slider state
  const [current, setCurrent] = useState(0);
  const total = 4;
  //when left arrow is clicked, function is called
  const leftClick = () => {
    if (current === 0) {
      setCurrent(total);
    } else {
      setCurrent(current - 1);
    }
  }
  //when right arrow is clicked, function is called
  const rightClick = () => {
    if (current === total) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  //when the slider squire is clicked, function is called and squire and cuurent state are updated
  const handleClick = (e) => {
    setCurrent(Number(e.target.id));
  }
  return (
    <div className={styles.bannerContainer}>
      <img src={banner} alt="banner" className={styles.Banner} />
      <div className={styles.slider}>
        <span className={styles.leftArrow} onClick={leftClick}><ArrowLeftOutlined /></span>
        <span className={styles.rightArrow} onClick={rightClick}><ArrowRightOutlined /></span>
        <div className={current === 0 ? styles.filledSquire : styles.emptySquire} id={0} onClick={handleClick}></div>
        <div className={current === 1 ? styles.filledSquire : styles.emptySquire} id={1} onClick={handleClick}></div>
        <div className={current === 2 ? styles.filledSquire : styles.emptySquire} id={2} onClick={handleClick}></div>
        <div className={current === 3 ? styles.filledSquire : styles.emptySquire} id={3} onClick={handleClick}></div>
        <div className={current === 4 ? styles.filledSquire : styles.emptySquire} id={4} onClick={handleClick}></div>
      </div>
    </div>
  )
}

export default Banner