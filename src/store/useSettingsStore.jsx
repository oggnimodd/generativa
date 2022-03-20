import create from 'zustand';
import produce from 'immer';
import { patterns } from '../config/patterns';
import { epochTime } from '../util/epochTime';

const defaultPattern = patterns[patterns.map((i) => i.name).indexOf('basic-circle')];
const {
  name, numOfTiles, palette, numOfColors,
} = defaultPattern;

const initialSettings = {
  pattern: name,
  numOfTiles: {
    cols: numOfTiles.default,
    rows: numOfTiles.default,
    max: numOfTiles.max,
    min: numOfTiles.min,
  },
  activePalette: palette.default,
  paletteTimeStamp: epochTime(),
  refreshTimeStamp: epochTime(),
  minColors: numOfColors.max,
  maxColors: numOfColors.min,
  paletteList: palette.list,
};

const usePattern = (set, name) => {
  const patternIndex = patterns.map((i) => i.name).indexOf(name);

  const { numOfTiles, palette, numOfColors } = patterns[patternIndex];

  return set(produce((draft) => {
    draft.settings.pattern = name;
    draft.settings.numOfTiles = {
      cols: numOfTiles.default,
      rows: numOfTiles.default,
      max: numOfTiles.max,
      min: numOfTiles.min,
    };
    draft.settings.activePalette = palette.default;
    draft.settings.paletteList = palette.list;
    draft.settings.maxColors = numOfColors.max;
    draft.settings.minColors = numOfColors.min;
  }));
};

// Colors
const newActivePalette = (set, palette) => {
  return set(produce((draft) => {
    draft.settings.activePalette = palette;
  }));
};

const addColor = (set, get) => {
  const { activePalette } = get().settings;
  const lastColor = activePalette[activePalette.length - 1];

  return set(produce((draft) => {
    draft.settings.activePalette.push(lastColor);
  }));
};

const removeColor = (set, get, id) => {
  return set(produce((draft) => {
    draft.settings.activePalette.splice(id, 1);
  }));
};

const changeColor = (set, newColor, id) => {
  return set(produce((draft) => {
    draft.settings.activePalette[id] = newColor;
  }));
};

const applyPalette = (set, palette) => {
  return set(produce((draft) => {
    draft.settings.activePalette = palette;
    draft.settings.paletteTimeStamp = epochTime();
  }));
};

// NumOfTiles
const changeTiles = (set, get, options) => {
  const { operation, type, newNumOfTiles } = options;
  const numOfTiles = get().settings.numOfTiles;
  const { max, min } = numOfTiles;

  return set(produce((draft) => {
    if(operation === 'plus') {
      const newNumOfTiles = numOfTiles[type] + 1;

      if(newNumOfTiles <= max) {
        draft.settings.numOfTiles[type] = newNumOfTiles;
      }
    }

    if(operation === 'minus') {
      const newNumOfTiles = numOfTiles[type] - 1;

      if(newNumOfTiles >= min) {
        draft.settings.numOfTiles[type] = newNumOfTiles;
      }
    }

    if(operation === 'input') {
      let val = newNumOfTiles;

      if(val > max) {
        val = max;
      }

      if(val < min) {
        val = min;
      }

      if(val >= min && val <= max) {
        draft.settings.numOfTiles[type] = val;
      }
    }
  }));
};

// Refresh pattern
const refreshPattern = (set) => {
  return set(produce((draft) => {
    draft.settings.refreshTimeStamp = epochTime();
  }));
};

const useSettingsStore = create((set, get) => {
  return {
    settings: initialSettings,
    usePattern: (name) => usePattern(set, name),
    newActivePalette: (palette) => newActivePalette(set, palette),
    addColor: () => addColor(set, get),
    removeColor: (id) => removeColor(set, get, id),
    changeColor: (newColor, id) => changeColor(set, newColor, id),
    changeTiles: (options) => changeTiles(set, get, options),
    applyPalette: (palette) => applyPalette(set, palette),
    refreshPattern: () => refreshPattern(set),
  };
});

export const settingsSelector = (key) => {
  return useSettingsStore((state) => state.settings[key]);
};

export const settingsMethod = (key) => {
  return useSettingsStore((state) => state[key]);
};

export default useSettingsStore;
