import React from 'react'
import styles from './InChat.module.css'

const InChat = () => {
  return (
    <div>
      <input placeholder='Type your chat' type="text" className={styles.inbox} />
      <button className={styles.inbutton}>Send</button>
    </div>
  )
}

export default InChat
