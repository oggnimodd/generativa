import React, { useRef, useLayoutEffect } from 'react';
import { Switch, Case } from 'react-if';
import { CanvasAreaWrapper, CanvasPreview } from './CanvasArea.style';
import { canvasSelector, canvasMethod } from '../../store/useCanvasStore';
import { settingsSelector } from '../../store/useSettingsStore';
import BasicCircle from '../../patterns/BasicCircle/BasicCircle';
import Scribble from '../../patterns/Scribble/Scribble';
import Kana from '../../patterns/Kana/Kana';
import ChainOfCircle from '../../patterns/ChainOfCircle/ChainOfCircle';
import HalfAndQuarter from '../../patterns/HalfAndQuarter/HalfAndQuarter';
import SquareAndCircle from '../../patterns/SquareAndCircle/SquareAndCircle';
import Triangles from '../../patterns/Triangles/Triangles';
import ThreeCircles from '../../patterns/ThreeCircles/ThreeCircles';
import Squares from '../../patterns/Squares/Squares';
import { breakpoints } from '../../constants/breakpoints';

const CanvasArea = () => {
  // Method
  const updateWidth = canvasMethod('updateWidth');
  const updateScale = canvasMethod('updateScale');

  // State
  const outputWidth = canvasSelector('outputWidth');
  const pattern = settingsSelector('pattern');
  const { cols, rows } = settingsSelector('numOfTiles');

  // Local
  const canvasPreviewRef = useRef();
  const canvasAreaRef = useRef();
  const resizeRef = useRef();

  useLayoutEffect(() => {
    const getCanvasSize = () => {
      const { width } = canvasPreviewRef.current.getBoundingClientRect();
      updateWidth(width);
      updateScale(outputWidth / width);

      // Preview dimension
      const previewTileSize = width / cols;
      const previewHeight = previewTileSize * rows;
      canvasPreviewRef.current.style.height = `${previewHeight}px`;

      // Output dimension
      const outputTileSize = width / cols;
      const outputHeight = outputTileSize * rows;
      const outputCanvas = document.querySelector('.canvas').style;

      outputCanvas.width = `${width}px`;
      outputCanvas.height = `${outputHeight}px`;
    };

    getCanvasSize();

    const recalculateCanvasSize = () => {
      if(window.innerWidth < breakpoints.md) {
        clearTimeout(resizeRef.current);

        resizeRef.current = setTimeout(() => {
          getCanvasSize();
        }, 300);
      }
    };

    window.addEventListener('resize', recalculateCanvasSize);

    return () => {
      window.removeEventListener('resize', recalculateCanvasSize);
    };
  }, [rows, cols]);

  // Calculate canvas area height based on bottom bar height on small screen
  useLayoutEffect(() => {
    const calculateCanvasAreaHeight = () => {
      if(window.innerWidth < breakpoints.md) {
        const bottomBar = document.querySelector('#bottom-bar');
        const { height } = bottomBar.getBoundingClientRect();

        canvasAreaRef.current.style.height = `calc(100% - ${height}px)`;
      }else{
        canvasAreaRef.current.style.height = '100%';
      }
    };

    calculateCanvasAreaHeight();

    window.addEventListener('resize', calculateCanvasAreaHeight);

    return () => {
      window.removeEventListener('resize', calculateCanvasAreaHeight);
    };
  }, []);

  return (
    <CanvasAreaWrapper ref={canvasAreaRef}>
      <CanvasPreview
        ref={canvasPreviewRef}
      >
        <Switch>

          {/* TODO : make this a loop */}
          <Case condition={pattern === 'basic-circle'}>
            <BasicCircle />
          </Case>
          <Case condition={pattern === 'scribble'}>
            <Scribble />
          </Case>
          <Case condition={pattern === 'kana'}>
            <Kana />
          </Case>
          <Case condition={pattern === 'chain-of-circles'}>
            <ChainOfCircle />
          </Case>
          <Case condition={pattern === 'half-and-quarter'}>
            <HalfAndQuarter />
          </Case>
          <Case condition={pattern === 'square-and-circle'}>
            <SquareAndCircle />
          </Case>
          <Case condition={pattern === 'triangles'}>
            <Triangles />
          </Case>
          <Case condition={pattern === 'three-circles'}>
            <ThreeCircles />
          </Case>
          <Case condition={pattern === 'squares'}>
            <Squares />
          </Case>
        </Switch>
      </CanvasPreview>
    </CanvasAreaWrapper>
  );
};

export default CanvasArea;
