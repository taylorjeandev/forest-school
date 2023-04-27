import Carousel from "better-react-carousel";
import Image from "next/image";

const PhotoCarousel = () => {
  return (
    <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        {/* <Image src={carouselPhotoThree} alt="image1" width={500} height={500} /> */}
        <Image
          src="/images/carousel-photo-1.jpeg"
          width={500}
          height={500}
          alt="image1"
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <Image src={carouselPhotoThree} alt="image1" width={500} height={500} /> */}
        <Image
          src="/images/carousel-photo-2.avif"
          width={500}
          height={500}
          alt="image2"
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <Image src={carouselPhotoThree} alt="image1" width={500} height={500} /> */}
        <Image
          width={500}
          height={500}
          src="/images/forest-schools-families.jpeg"
          alt="image3"
        />
      </Carousel.Item>
      <Carousel.Item>
        {/* <Image src={carouselPhotoThree} alt="image1" width={500} height={500} /> */}
        <Image
          height={500}
          width={500}
          src="/images/carousel-photo-4.avif"
          alt="image4"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default PhotoCarousel;
