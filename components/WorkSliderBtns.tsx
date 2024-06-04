"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles}: {containerStyles: any, btnStyles: any, iconStyles:any}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button onClick={() => swiper.slidePrev()} className={btnStyles}><PiCaretLeftBold className={iconStyles} /></button>
      <button onClick={() => swiper.slideNext()} className={btnStyles}><PiCaretRightBold className={iconStyles} /></button>
    </div>
  )
};

export default WorkSliderBtns;
