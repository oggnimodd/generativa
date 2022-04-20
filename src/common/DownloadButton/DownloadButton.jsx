import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from './DownloadButton.style';
import DownloadModal from '../../layout/DownloadModal/DownloadModal';

const DownloadButton = () => {
  const { pathname } = useLocation();
  // Only show export button on editor page
  if(pathname !== '/') return null;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const closeModal = (e) => {
      if (e.key === 'Escape') {
        setShowModal(false);
      }
    };

    if(showModal) {
      window.addEventListener('keydown', closeModal);

      return () => {
        window.removeEventListener('keydown', closeModal);
      };
    }
  }, [showModal]);

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
