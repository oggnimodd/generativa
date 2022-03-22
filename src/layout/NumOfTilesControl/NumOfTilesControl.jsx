import React from 'react';
import { ControlHeader } from '../../common/ControlHeader';
import NumOfTilesPicker from '../../common/NumOfTilesPicker/NumOfTilesPicker';

const NumOfTilesControl = () => {
  return (
    <>
      <ControlHeader>Number Of Tiles</ControlHeader>
      <NumOfTilesPicker />
    </>
  );
};

export default NumOfTilesControl;
