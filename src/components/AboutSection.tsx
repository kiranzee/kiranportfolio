import React from 'react'
import styles from '@/styles/AboutSection.module.css'
import AboutImg from '@/media/itsme.jpg'
import Image from 'next/image'
const AboutSection = () => {
    return (
        <div className={styles.about}>
            <div className={styles.textdiv}>
                <h1>About me</h1>
               
                <p>As a proficient full-stack developer specializing in the MERN stack, I offer comprehensive solutions for the development of websites and mobile applications. With a dedicated focus on addressing business challenges, I am well-equipped to deliver tailored and innovative digital solutions.</p>
                <p>My expertise lies in MongoDB, Express.js, React.js, and Node.js, allowing me to create dynamic and robust applications that seamlessly align with your unique requirements. Whether you require a sophisticated website or a feature-rich mobile application, I possess the skills to transform your vision into a reality.</p>
          <p>Specializing in MongoDB, Express.js, React.js, and Node.js, I leverage the power of the MERN stack to deliver robust and dynamic solutions that exceed expectations. Whether you need a sleek website or a feature-rich mobile app, I have the skills to bring your vision to life.</p>
          <p>I prioritize the development of clean and efficient code to ensure easy maintenance and scalability. My commitment to understanding business challenges enables me to craft customized solutions that precisely meet your specific needs. Open to freelance opportunities, I am eager to contribute my skills and experience to the success of your projects.</p>
          
            </div>
            <Image src={AboutImg} alt="aboutimg" quality={100} />

        </div>
    )
}

export default AboutSection