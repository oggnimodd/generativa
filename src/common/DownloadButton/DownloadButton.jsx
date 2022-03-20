import React from 'react';
import DomToImage from '@yzfe/dom-to-image';
import {
  toPng, toJpeg, toBlob, toPixelData, toSvg,
} from 'html-to-image';
import { Button } from './DownloadButton.style';
import { canvasSelector }from '../../store/useCanvasStore';
import { settingsSelector } from '../../store/useSettingsStore';

const DownloadButton = () => {
  const download = async () => {
    const node = document.querySelectorAll('.canvas')[0];
    const scale = 5;

    const style = {
      transform: `scale(${scale})`,
      'transform-origin': 'top left',
      width: `${node.offsetWidth}px`,
      height: `${node.offsetHeight}px`,
    };

    const param = {
      height: node.offsetHeight * scale,
      width: node.offsetWidth * scale,
      style,
    };

    toPng(node, param)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-image-name.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((error) => {
        console.error('oops, something went wrong!', error);
      });
  };

  return (
    <Button onClick={download}>Download</Button>
  );
};

export default DownloadButton;
