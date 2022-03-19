import { randomColor } from 'randomcolor';
import ColorScheme from 'color-scheme';

const scheme = new ColorScheme();

export const generatePalette = () => {
  const baseColor = randomColor().slice(1);
  const palette = scheme
    .scheme('mono')
    .from_hex(baseColor)
    .colors()
    .map((i) => `#${i}`);

  return palette;
};
