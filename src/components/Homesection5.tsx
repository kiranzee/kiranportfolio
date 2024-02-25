
import styles from '@/styles/Homesection5.module.css';
import { SocialIcon } from 'react-social-icons'
const Homesection5 = () => {
    return (
        <div className={styles.social}>
            <div className={styles.socialcard}
             onClick={() => window.open('https://instagram.com/gadipellikiran','_blank')}
            >
                <SocialIcon url="https://instagram.com" style={{ height: 40, width: 40 }}/>
                <p>@gadipellikiran</p>
            </div>
            <div className={styles.socialcard}
            onClick={() => window.open('https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjfvLzlGhpqkZWQPJbpmLMBlNVBDjbSGtGsQJnprvzHnFPQKFKjjNQTNWrqMTpxCsXNQbZ','_blank')}
            > 
                <SocialIcon url="https://mail.google.com" style={{ height: 40, width: 40 }}/>
                <p>kiranzee@gmail.com</p>
            </div>
            <div className={styles.socialcard}
            onClick={() => window.open('https://www.linkedin.com/in/kirangadipelli/','_blank')}
            >
                <SocialIcon url="https://linkedin.com" style={{ height: 40, width: 40 }}/>
                <p>Kiran Gadipelli</p>
            </div>
            <div className={styles.socialcard}
            onClick={() => window.open('https://www.youtube.com/@kirang911','_blank')}
            >
                <SocialIcon url="https://www.youtube.com"style={{ height: 40, width: 40 }} />
                <p>Kiran G</p>
            </div>
        </div>
    )
}

export default Homesection5