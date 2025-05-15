import { useState } from 'react';
import styles from './Card.module.css'; // Using CSS Modules

const Card = ({
  id,
  categoryTag,
  imageSrc,
  imageAlt,
  title,
  titleLink,
  promoText,
  customClassName // For any additional specific styling
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleToggle() {
    setIsExpanded((prev) => !prev);
  }

  function ViewMore() {
    if (promoText && promoText.length > 150) {
      return (
        <span className={styles.moreContent} onClick={handleToggle}>
          {isExpanded ? 'View Less' : 'View More'}
        </span>
      );
    }
    return null;
  }

  const dots = promoText && promoText.length > 150 && !isExpanded ? '...' : '';
  const shortPromoText = promoText ? promoText.slice(0, 150) : '';

  return (
    <div className={`${styles.card} ${customClassName || ''}`} id={id}>
      {categoryTag && <div className={styles.tag}>{categoryTag}</div>}
      {imageSrc && (
        <div className={styles.imgContainer}>
          <img src={imageSrc} alt={imageAlt || title || 'Card image'} />
        </div>
      )}
      <div className={styles.cardContent}>
        <p className={styles.cardHeader}>
          {titleLink ? (
            <a
              href={titleLink}
              className={styles.cardLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </p>
        {promoText && (
          <p className={styles.cardText}>
            {isExpanded ? promoText : `${shortPromoText}${dots}`}
          </p>
        )}
        <ViewMore />
      </div>
    </div>
  );
};

export default Card;
