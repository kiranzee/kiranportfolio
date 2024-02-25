import styles from '../styles/Homesection1.module.css'
import mainimg from '../media/KiranGadipelli.svg'
import Image from 'next/image'
import Head from 'next/head'
const Homesection1 = () => {

    return (
        <div className={styles.section1outer}>
            <div className={styles.subtextdiv}>
                <div className={styles.left}>
                    <div className={styles.about}>
                        <p>Hi, I am <span>Kiran Gadipelli</span></p>
                        <p>Crafting full-stack websites and mobile apps is my forte! Ready to tackle all your business challenges. Open for freelance gigs. Lets make something awesome together!</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.stat}>
                        <h1>25+</h1>
                        <p>Happy<br></br>clients</p>
                    </div>
                    <div className={styles.stat}>
                        <h1>20+</h1>
                        <p>Years of<br></br> experience</p>
                    </div>
                </div>

            </div>

            <Image src={mainimg} className={styles.mainimg} alt="mainimg" quality={100}/>
            <div className={styles.maintextdiv}>
                <p>I am a </p>
                <h1><span>&nbsp;</span>FULL STACK</h1>
                <h2>Developer</h2>
            </div>
            <video src={'/smoke1.mp4'} autoPlay loop muted
                className={styles.smokevideo}
            />
        </div>
    )
}

export default Homesection1