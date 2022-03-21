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

const CanvasArea = () => {
  // Method
  const updateWidth = canvasMethod('updateWidth');
  const updateScale = canvasMethod('updateScale');

  // State
  const outputWidth = canvasSelector('outputWidth');
  const width = canvasSelector('width');
  const pattern = settingsSelector('pattern');
  const { cols, rows } = settingsSelector('numOfTiles');

  // Local
  const canvasPreviewRef = useRef();

  useLayoutEffect(() => {
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
  }, [rows, cols]);

  return (
    <CanvasAreaWrapper>
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
