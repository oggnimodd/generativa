import { randomColor } from 'randomcolor';
import ColorScheme from 'color-scheme';
import { randomFromArray, shuffleArray } from './random';
import useSettingsStore from '../store/useSettingsStore';

const scheme = new ColorScheme();

const schemeOptions = ['mono', 'contrast', 'triade', 'tetrade', 'analogic'];
const variants = ['default', 'pastel', 'soft', 'light', 'hard'];

export const generatePalette = () => {
  const { minColors } = useSettingsStore.getState().settings;

  // Removing # because colorsheme expects RRGGBB format
  const baseColor = randomColor().slice(1);

  // Mono only return four colors
  const schemeOption = minColors > 4
    ? randomFromArray(schemeOptions.slice(1))
    : randomFromArray(schemeOptions);
  const variant = randomFromArray(variants);

  let palette = scheme
    .from_hex(baseColor)
    .scheme(schemeOption)
    .variation(variant)
    .colors()
    .slice(0, minColors)
    .map((i) => `#${i}`);

  palette = shuffleArray(palette);

  return palette;
};
