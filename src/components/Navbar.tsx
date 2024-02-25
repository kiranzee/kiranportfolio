"use client"
import styles from '../styles/Navbar.module.css'
import signature from '../media/kirang.svg'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
const Navbar = ({
    homeRef,
    aboutRef,
    projectsRef,
    contactRef
}: {
    homeRef: React.RefObject<HTMLDivElement>
    aboutRef: React.RefObject<HTMLDivElement>
    projectsRef: React.RefObject<HTMLDivElement>
    contactRef: React.RefObject<HTMLDivElement>
}) => {
    let pathname = usePathname()
    const [navactive, setnavactive] = useState('false');




    const handlenavbarclick = () => {
        if (navactive == 'false') {
            setnavactive('true')
        }
        else {
            setnavactive('false')

        }
    }

    const handleButtonClick = (section: any) => {
        if (section === 'home' && homeRef.current) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'about' && aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'projects' && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (section === 'contact' && contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Provide clear error message for missing section
            console.warn(`Section "${section}" not found. Please ensure it exists.`);
        }
    };

    return (
        <div className={styles.navouter}>
            <div className={styles.left}>
                <Image alt='' src={signature} width={500} height={500} quality={100} className={styles.sign} />
            </div>
            <div className={navactive == 'true' ? `${styles.nav_toggler} ${styles.navactive}` : styles.nav_toggler} onClick={handlenavbarclick}>
                <span></span>
            </div>
            <div className={styles.right}>
                <button onClick={() => handleButtonClick('home')}>Home</button>
                <button onClick={() => handleButtonClick('about')}>About</button>
                <button onClick={() => handleButtonClick('projects')}>Projects</button>
                <button onClick={() => handleButtonClick('contact')}>Contact</button>
            </div>
            {
                navactive == 'true' ? <div className={styles.right1} >
                    <button onClick={() => handleButtonClick('home')}>Home</button>
                    <button onClick={() => handleButtonClick('about')}>About</button>
                    <button onClick={() => handleButtonClick('projects')}>Projects</button>
                    <button onClick={() => handleButtonClick('contact')}>Contact</button>
                </div> : <></>
            }
        </div>
    )
}

export default Navbar