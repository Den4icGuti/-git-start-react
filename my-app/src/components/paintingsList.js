import Painting from "./Painting";
import PropTypes from 'prop-types'


function PaintingList({ item }) { 
  return (
    <ul>
      {item.map(item => (
        <li key={item.id}>
          <Painting
            imgUrl={item.url}
            title={item.title}
            authorName={item.author.tag}
            proFileUrl={item.author.url}
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