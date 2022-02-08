import './Box.css'

function Box({type = 'small', className ='',styles}) { 
  return <div className={`box box-${type} ${className}`} style={styles}>
    Box</div>
  
}

export default Box;