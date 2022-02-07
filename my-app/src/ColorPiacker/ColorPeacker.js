import styles from './ColorPeacker.module.css'

function ColorPeacker({ options }) { 
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>ColorPeacker</h2>
      <div>
        {options.map(option => <span style={{ backgroundColor: option.color }} className={styles.option}>{option.label}</span>)}
      </div>
    </div>
  )
}

export default ColorPeacker;


