import { ImageList, ImageListItem } from '@mui/material';

import {
  bananaImg, bananaImg2x, bananaImg3x,
  strawberryImg, strawberryImg2x, strawberryImg3x,
  leavesImg, leavesImg2x, leavesImg3x,
  grayShapeImg, grayShapeImg2x, grayShapeImg3x,
} from './BackgroundImagesIndex';

const itemData = [
  {
    img:   bananaImg,
    img2x: bananaImg2x,
    img3x: bananaImg3x,
    title: 'Banana',
  },
  {
    img:   strawberryImg,
    img2x: strawberryImg2x,
    img3x: strawberryImg3x,
    title: 'Strawberry',
  },
  {
    img:   leavesImg,
    img2x: leavesImg2x,
    img3x: leavesImg3x,
    title: 'Leaves',
  },
  {
    img:   grayShapeImg,
    img2x: grayShapeImg2x,
    img3x: grayShapeImg3x,
    title: 'Gray shape',
  },  
];


export const BackgroundImages = () => {
  return (
    <ImageList sx={{ width: 650, height: 180 }} cols={4} rowHeight={180}>
      {itemData.map((item) => {
        return (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img2x} 2x, ${item.img3x} 3x`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  );
};