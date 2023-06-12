import styles from "./index.module.css"
import Header from '@/components/Header'
import Body from '@/components/Body'
import Steps from '@/components/Steps'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'

export default function Home() {
  return (
   <main className={styles.mainWindow}>
    <div className="bg-gray-800">
      <Header />
      <Body />
      <Steps />
      <Testimonial />
      <Footer />
    </div>
   </main>
  )
}