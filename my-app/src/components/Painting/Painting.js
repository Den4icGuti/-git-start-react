import PropTypes from 'prop-types';
import defaultImg from './default-image.jpg';
import  styles from './Painting.module.css'

//===Создаем компонет дразметку для главного компонента,экспортируем в фаил главного компонента===//

export default function Painting(props) {
  const { 
   imgUrl = defaultImg,
    title,
    author,
    price,
    quantity
  } = props;

  return (
    <div className={styles.card}>
      <img src={imgUrl} alt={title} width="300" height=""/>
      <h2>{title}</h2>
    <p>
        Autor: <a href={author}>{author}</a>
    </p>
      <p>Price: {price} credits</p>
      <p>Availability: {quantity < 10 ? 'ends' : 'mouth in stock'}</p>
    <button type='button'>Buy</button>
  </div>
) 
}


Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity:PropTypes.number.isRequired
}
