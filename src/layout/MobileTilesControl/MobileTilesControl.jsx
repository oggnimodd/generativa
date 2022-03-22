import React from 'react';
import NumOfTilesPicker from '../../common/NumOfTilesPicker/NumOfTilesPicker';
import { PanelHeader } from '../../common/MobilePanelHeader';

const MobileTilesControl = () => {
  return (
    <div>
      <PanelHeader>
        Number Of Tiles
      </PanelHeader>
      <NumOfTilesPicker />
    </div>
  );
};

export default MobileTilesControl;
