import Typography from 'typography';

const GOOGLE_FONT_WEIGHT_NORMAL = 400;
const GOOGLE_FONT_WEIGHT_BOLD = 700;

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.666,
  scaleRatio: 2,
  includeNormalize: true, // normalize.css
  googleFonts: [
    {
      name: 'Rubik',
      styles: [GOOGLE_FONT_WEIGHT_NORMAL, GOOGLE_FONT_WEIGHT_BOLD],
    },
  ],
  headerFontFamily: [`Rubik`, `sans-serif`],
  bodyFontFamily: [`Rubik`, `sans-serif`],
  bodyWeight: GOOGLE_FONT_WEIGHT_NORMAL,
  boldWeight: GOOGLE_FONT_WEIGHT_BOLD,
  headerWeight: GOOGLE_FONT_WEIGHT_BOLD,
});

export default typography;
