import { useState } from "react";
import styles from "./Slider.module.scss";

export default function Slider(props) {
  const [activeSlide, setactiveSlide] = useState(0);
  let totalSlides;
  const slideImages = [
    {
      image: "/images/pic1.jpg",
    },
    {
      image: "/images/pic2.jpg",
    },
    {
      image: "/images/pic3.jpg",
    },
  ];
  totalSlides = slideImages.length;
  function slide(action) {
    if (action === "next") {
      if (activeSlide < totalSlides - 1) {
        setactiveSlide((previousState) => previousState + 1);
      } else {
        setactiveSlide(0);
      }
    } else if (action === "prev") {
      if (activeSlide === 0) {
        setactiveSlide(totalSlides - 1);
      } else {
        setactiveSlide((previousState) => previousState - 1);
      }
    }
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>
        {slideImages.map((slide, index) => {
          return (
            <div
              className={`${styles.slide} 
              ${index === activeSlide ? styles.active : ""} 
              ${index === activeSlide + 1 ? styles.next : ""} 
              ${index === activeSlide - 1 ? styles.prev : ""} 
              ${
                activeSlide === 0 && index === totalSlides - 1
                  ? styles.prev
                  : ""
              }
              ${
                activeSlide === totalSlides - 1 && index === 0
                  ? styles.next
                  : ""
              }
              `}
              key={index}
            >
              <img src={slide.image} alt="" />
            </div>
          );
        })}
      </div>
      <div
        className={`${styles.arrow} ${styles.next}`}
        onClick={() => slide("next")}
      ></div>
      <div
        className={`${styles.arrow} ${styles.prev}`}
        onClick={() => slide("prev")}
      ></div>
    </div>
  );
}
