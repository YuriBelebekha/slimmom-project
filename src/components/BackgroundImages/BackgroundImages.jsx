// import { ImageList, ImageListItem } from '@mui/material';
import {
  ImageListDesktopCss, ImageListItemDesktopCss,
  ImageListTabletCss, ImageListItemTabletCss,
} from './BackgroundImages.styled';
import {
  bananaImgDesktop, bananaImgDesktop2x, bananaImgDesktop3x,
  strawberryImgDesktop, strawberryImgDesktop2x, strawberryImgDesktop3x,
  leavesImgDesktop, leavesImgDesktop2x, leavesImgDesktop3x,
  grayShapeImgDesktop, grayShapeImgDesktop2x, grayShapeImgDesktop3x,

  bananaImgTablet, bananaImgTablet2x, bananaImgTablet3x,
  strawberryImgTablet, strawberryImgTablet2x, strawberryImgTablet3x,
  leavesImgTablet, leavesImgTablet2x, leavesImgTablet3x,
  grayShapeImgTablet, grayShapeImgTablet2x, grayShapeImgTablet3x,
} from './BackgroundImagesIndex';

const itemData = [
  {
    imgDesktop:   bananaImgDesktop,
    imgDesktop2x: bananaImgDesktop2x,
    imgDesktop3x: bananaImgDesktop3x,
    imgTablet:    bananaImgTablet,
    imgTablet2x:  bananaImgTablet2x,
    imgTablet3x:  bananaImgTablet3x,
    title: 'Banana',
  },
  {
    imgDesktop:   strawberryImgDesktop,
    imgDesktop2x: strawberryImgDesktop2x,
    imgDesktop3x: strawberryImgDesktop3x,
    imgTablet:    strawberryImgTablet,
    imgTablet2x:  strawberryImgTablet2x,
    imgTablet3x:  strawberryImgTablet3x,
    title: 'Strawberry',
  },
  {
    imgDesktop:   leavesImgDesktop,
    imgDesktop2x: leavesImgDesktop2x,
    imgDesktop3x: leavesImgDesktop3x,
    imgTablet:    leavesImgTablet,
    imgTablet2x:  leavesImgTablet2x,
    imgTablet3x:  leavesImgTablet3x,
    title: 'Leaves',
  },
  {
    imgDesktop:   grayShapeImgDesktop,
    imgDesktop2x: grayShapeImgDesktop2x,
    imgDesktop3x: grayShapeImgDesktop3x,
    imgTablet:    grayShapeImgTablet,
    imgTablet2x:  grayShapeImgTablet2x,
    imgTablet3x:  grayShapeImgTablet3x,    
    title: 'Gray shape',
  },  
];

// sx={{ width: 650, height: 180 }} cols={4} rowHeight={180}
export const BackgroundImages = () => {
  return (
    <>  
      <ImageListTabletCss >
        {itemData.map(({imgTablet, imgTablet2x, imgTablet3x, title}) => {
          return (
            <ImageListItemTabletCss key={imgTablet}>
              <img
                srcSet={`${imgTablet2x} 2x, ${imgTablet3x} 3x`}
                src={`${imgTablet}`}
                alt={title}
                loading="lazy"
              />
            </ImageListItemTabletCss>
          )
        })}
      </ImageListTabletCss>

      <ImageListDesktopCss >
        {itemData.map(({imgDesktop, imgDesktop2x, imgDesktop3x, title}) => {
          return (
            <ImageListItemDesktopCss key={imgDesktop}>
              <img
                srcSet={`${imgDesktop2x} 2x, ${imgDesktop3x} 3x`}
                src={`${imgDesktop}`}
                alt={title}
                loading="lazy"
              />
            </ImageListItemDesktopCss>
          )
        })}
      </ImageListDesktopCss>
    </>  
  );
};

// export const BackgroundImages = () => {
//   return (
//     <ImageList >
//       {itemData.map((item) => {
//         return (
//           <ImageListItem key={item.img}>
//             <img
//               srcSet={`${item.img2x} 2x, ${item.img3x} 3x`}
//               src={`${item.img}`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         )
//       })}
//     </ImageList>
//   );
// };