import { FontFace } from 'csstype';

export const MackinacProBook: FontFace = {
  fontFamily: 'P22 Mackinac Pro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url(${process.env.PUBLIC_ASSET_URL}/public/fonts/P22MacinacPro/P22MackinacPro-Book_25.otf) format('opentype')`
};

export const MackinacProBold: FontFace = {
  fontFamily: 'P22 Mackinac Pro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `url(${process.env.PUBLIC_ASSET_URL}/public/fonts/P22MacinacPro/P22MackinacPro-Bold_16.otf) format('opentype')`
};

export const MackinacProExtraBold: FontFace = {
  fontFamily: 'P22 Mackinac Pro',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 900,
  src: `url(${process.env.PUBLIC_ASSET_URL}/public/fonts/P22MacinacPro/P22MackinacPro-ExtraBold_12.otf) format('opentype')`
};
