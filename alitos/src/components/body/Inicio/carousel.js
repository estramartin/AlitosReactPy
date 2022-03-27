import Dulces from '../../../assets/Img/Dulces.png';
import Mermeladas from '../../../assets/Img/Mermeladas2.png';
import Licores from '../../../assets/Img/Licores.png';
import React, {useState} from 'react';
import { Carousel,CarouselItem, CarouselControl,CarouselIndicators,CarouselCaption  } from 'reactstrap';



const items = [
  {

    src: Dulces,
    altText: 'Dulces',
    caption: 'Con los ingredientes mas frescos',
   
  },
  {
    src: Licores,
    altText: 'Licores',
    caption: 'Con los sabores mas frescos',
   
  },
  {
    src: Mermeladas,
    altText: 'Mermeladas',
    caption: 'Los gustos mas variados',
   
  }
];

const Carrusel = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }

  
    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={() => setAnimating(true)}
          onExited={() => setAnimating(false)}
          key={item.src}
        >
          <img src={item.src} alt={item.altText}  width="95%" height="600px"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
        </CarouselItem>
      );
    });
  
    return (
      <div >       
        <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
       
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex}  />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
      </div>

    );
  }
  
  export default Carrusel;