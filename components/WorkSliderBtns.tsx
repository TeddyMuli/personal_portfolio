"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({containerStyles, btnStyles, iconStyles, isFirst, isLast}: {containerStyles: any, btnStyles: any, iconStyles:any, isFirst: boolean, isLast: boolean}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      {!isFirst && (
        <button onClick={() => swiper.slidePrev()} className={btnStyles}><PiCaretLeftBold className={iconStyles} /></button>
      )}
      {!isLast && (
        <button onClick={() => swiper.slideNext()} className={btnStyles}><PiCaretRightBold className={iconStyles} /></button>
      )}
    </div>
  )
};

export default WorkSliderBtns;
