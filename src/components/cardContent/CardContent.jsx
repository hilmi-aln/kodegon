import styles from './CardContent.module.css';

const CardContent = ({cards}) => {
  return (
    <div className={styles.container}>
      <header><h1 className={styles.header}>Suspendisse Tempus</h1></header>
      <div className={styles.cardContainer}>
        {cards.map((card, index) => {
          return (
            <div className={styles.card} key={index}>
              <div className={styles.cardImg}>
                <img src="../../assets/images/asd_1.png" alt="resim"/>
              </div>
              <div className={styles.cardContent}>
                <h1 className={styles.cardTitle}>{card.title}</h1>
                <h2 className={styles.cardAuthor}>{card.author}</h2>
                <p className={styles.cardDescription}>{card.description}</p>
                <p className={styles.cardDate}>{card.date}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardContent