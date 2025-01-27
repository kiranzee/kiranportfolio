import React, { useRef, useState } from 'react';

import styles from '@/styles/Projects.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Project1 from '@/media/project/izysport.png'
import Project2 from '@/media/project/superdestinations.png'
import Project3 from '@/media/project/travelbusinessfirst.png'
import '@/styles/ProjectSwiper.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Image from 'next/image';
const Projects = () => {
    return (
        <div className={styles.projectdiv}>
            <h1>Few Projects</h1>

            <div className='projectswipercontainer'>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"



                >
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <Image src={Project1} alt="Project 1" quality={100} />
                            {/* <h1>Project 1</h1> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                        <Image src={Project2} alt="Project 2" quality={100} />
                            {/* <h1>Project 2</h1> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className={styles.projectcard}>
                        <Image src={Project3} alt="Project 3" quality={100} />
                            {/* <h1>Project 2</h1> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <h1>Project 4</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <h1>Project 5</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <h1>Project 6</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <h1>Project 7</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <h1>Project 8</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={styles.projectcard}>
                            <h1>Project 9</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Projects