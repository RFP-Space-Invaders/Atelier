import React, { useState } from 'react';
import { MainImage } from '../../Styles/ProductOverview/carousel.styled.js';

// here photo is an object that contain both the thumbnailurl and normal url
function CarouselImage({ photo, setIsModalOpen }) {
  return (
    <MainImage fetchpriority="high" src={photo.url} onClick={() => setIsModalOpen(true)} />
  );
}

export default CarouselImage;
