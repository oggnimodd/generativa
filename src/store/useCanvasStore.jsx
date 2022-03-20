import create from 'zustand';
import produce from 'immer';

const initialCanvas = {
  scale: 1,
  outputWidth: 1000,
  width: 0,
};

const updateScale = (set, newScale) => {
  return set(produce((draft) => {
    draft.canvas.scale = newScale;
  }));
};

const updateWidth = (set, newWidth) => {
  return set(produce((draft) => {
    draft.canvas.width = newWidth;
  }));
};

const useCanvasStore = create((set) => {
  return {
    canvas: initialCanvas,
    updateScale: (newScale) => updateScale(set, newScale),
    updateWidth: (newWidth) => updateWidth(set, newWidth),
  };
});

export const canvasSelector = (key) => {
  return useCanvasStore((state) => state.canvas[key]);
};

export const canvasMethod = (key) => {
  return useCanvasStore((state) => state[key]);
};

export default useCanvasStore;
