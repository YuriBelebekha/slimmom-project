import {
  ImageListDesktopCss,
  ImageListItemDesktopCss,
  ImageListTabletCss,
  ImageListItemTabletCss,
} from './BackgroundImagesUserMenu.styled';
import {
  leavesImgUserMenuDesktop,
  leavesImgUserMenuDesktop2x,
  leavesImgUserMenuDesktop3x,
  leavesImgUserMenuTablet,
  leavesImgUserMenuTablet2x,
  leavesImgUserMenuTablet3x,
} from './BackgroundImagesUserMenuIndex';

const itemData = [
  {
    imgDesktop: leavesImgUserMenuDesktop,
    imgDesktop2x: leavesImgUserMenuDesktop2x,
    imgDesktop3x: leavesImgUserMenuDesktop3x,
    imgTablet: leavesImgUserMenuTablet,
    imgTablet2x: leavesImgUserMenuTablet2x,
    imgTablet3x: leavesImgUserMenuTablet3x,
    title: 'Leaves',
  },
];

export const BackgroundImagesUserMenu = () => {
  return (
    <>
      <ImageListTabletCss>
        {itemData.map(({ imgTablet, imgTablet2x, imgTablet3x, title }) => {
          return (
            <ImageListItemTabletCss key={imgTablet}>
              <img
                srcSet={`${imgTablet2x} 2x, ${imgTablet3x} 3x`}
                src={`${imgTablet}`}
                alt={title}
                loading="lazy"
              />
            </ImageListItemTabletCss>
          );
        })}
      </ImageListTabletCss>

      <ImageListDesktopCss>
        {itemData.map(({ imgDesktop, imgDesktop2x, imgDesktop3x, title }) => {
          return (
            <ImageListItemDesktopCss key={imgDesktop}>
              <img
                srcSet={`${imgDesktop2x} 2x, ${imgDesktop3x} 3x`}
                src={`${imgDesktop}`}
                alt={title}
                loading="lazy"
              />
            </ImageListItemDesktopCss>
          );
        })}
      </ImageListDesktopCss>
    </>
  );
};
