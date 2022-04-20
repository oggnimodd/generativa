import React, { useState } from 'react';
import { AiOutlineDownload } from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import { Button } from './DownloadButton.style';
import DownloadModal from '../../layout/DownloadModal/DownloadModal';

const DownloadButton = () => {
  const { pathname } = useLocation();
  // Only show export button on editor page
  if(pathname !== '/') return null;

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
