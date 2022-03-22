import React from 'react';
import short from 'short-uuid';
import { Row } from './CanvasRows.style';
import { rowsFromArray } from '../../util/rowsFromArray';
import { settingsSelector } from '../../store/useSettingsStore';

const CanvasRow = ({ cellsData, size, Cell }) => {
  // Global states
  const { cols } = settingsSelector('numOfTiles');
  const pattern = settingsSelector('pattern');
  const rowsArray = rowsFromArray(cellsData, cols, pattern);

  return (
    <>
      {
          rowsArray.map((row) => {
            return (
              <Row key={short.generate()}>
                {
                  row.map(({ ...data }) => {
                    return (
                      <Cell
                        key={short.generate()}
                        {...data}
                        size={size}
                      />
                    );
                  })
                }
              </Row>
            );
          })
        }
    </>
  );
};

export default CanvasRow;
