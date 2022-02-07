import Painting from "./Painting";
import PropTypes from 'prop-types'
import styles from './Painting/Painting.module.css'

function PaintingList({ item }) { 
  return (
    <ul className={styles.list}>
      {item.map(item => (
        <li className={styles.item} key={item.id}>
          <Painting
             imgUrl={item.url}
            title={item.title}
            author={item.author.tag}
            profileUrl={item.author.url}
            price={item.price}
            quantity={item.quantity}
           />
        </li>
      ))}
    </ul>
  );
  
}
  
PaintingList.propTypes = {
  item: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired
  }))
}

export default PaintingList

  