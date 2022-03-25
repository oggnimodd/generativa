import React, { useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Button } from './DownloadButton.style';
import DownloadModal from '../../layout/DownloadModal/DownloadModal';

const DownloadButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button onClick={() => setShowModal(true)}>
        Export
      </Button>
      {showModal && <DownloadModal hideModal={() => setShowModal(false)} />}
    </>
  );
};

export default DownloadButton;
