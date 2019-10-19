import React from 'react'
import styles from './styles.css'

const Ripple = () => (
  <React.Fragment>
    <style>{`${styles}`}</style>
    <div className="lds-ripple">
      <div />
      <div />
    </div>
  </React.Fragment>
)

export default Ripple