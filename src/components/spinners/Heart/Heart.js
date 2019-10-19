import React from 'react'
import styles from './styles.css'

const Heart = () => (
  <React.Fragment>
    <style>{`${styles}`}</style>
    <div className="lds-heart">
      <div />
    </div>
  </React.Fragment>
)

export default Heart
