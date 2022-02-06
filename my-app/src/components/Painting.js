import PropTypes from 'prop-types'
import defaultImg from '../img/default-image.jpg'

//===Создаем компонет дразметку для главного компонента,экспортируем в фаил главного компонента===//

export default function Painting(props) {
  const { imgUrl=defaultImg, title, authorName = 'unknown', proFileUrl, price, quantity } = props;

  return (
   <div className='box container'>
      <img src={imgUrl} alt={title} width="300" height=""/>
      <h2>{title}</h2>
    <p>
        Autor: <a href={proFileUrl}>{authorName}</a>
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
  authorName: PropTypes.string.isRequired,
  proFileUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity:PropTypes.number.isRequired
}
