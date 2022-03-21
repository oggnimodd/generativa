import React from 'react';
import { Cell } from '../../common/Cell';
import useSettingsStore from '../../store/useSettingsStore';
import { SquaresWrapper } from './Squares.style';

const RecursiveCells = ({ squares }) => {
  const currentSquare = squares[0];
  if(!currentSquare) return null;

  const currentColorIndex = currentSquare.colorIndex;
  const currentColor = useSettingsStore((state) => state.settings.activePalette[currentColorIndex]);

  const {
    justifyContent,
    alignItems,
    size,
    blackSquareSize,
  } = currentSquare;

  const lastMiddleSquare = squares.length === 1;

  return (
    <div
      style={{
        width: size,
        height: size,
        border: 'black 2px solid',
        backgroundColor: currentColor,
        padding: '5%',
        justifyContent,
        alignItems,
        display: 'flex',
      }}
    >
      <RecursiveCells squares={squares.slice(1)} />
      {
         lastMiddleSquare && (
         <div
           style={{
             background: 'black',
             width: blackSquareSize,
             height: blackSquareSize,
           }}
         />
         )
      }
    </div>
  );
};

const SquaresCell = ({
  cellBackgroundIndex,
  size,
  ...rest
}) => {
  const cellBackground = useSettingsStore((state) => state.settings.activePalette[cellBackgroundIndex]);

  return (
    <Cell
      style={{
        width: size,
        height: size,
        backgroundColor: cellBackground,
      }}
    >
      <SquaresWrapper>
        <RecursiveCells {...rest} />
      </SquaresWrapper>
    </Cell>
  );
};

export default SquaresCell;
