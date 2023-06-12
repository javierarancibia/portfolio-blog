'use client'

import React, { useState } from 'react'
import Terms from './Terms'
import styles from "./Header.module.css"

const TermsTrigger = () => {
    const [ terms, setTerms ] = useState(false)
  return (
    <section>
        <button onClick={() => setTerms(!terms)} className={styles.termsButton}>Términos y Condiciones</button>
        { terms && <Terms setTerms={setTerms} /> }
    </section>

  )
}
export default TermsTrigger;