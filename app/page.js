import styles from "./index.module.css"
import Header from '@/components/Header'

export default function Home() {
  return (
   <main className={styles.mainWindow}>
    <div className="bg-gray-800">
      <Header />
    </div>
   </main>
  )
}