import React, { useState } from 'react';
import { Portal }from 'react-portal';
import {
  toPng, toJpeg, toSvg,
} from 'html-to-image';
import { AiOutlineClose, AiOutlineLoading3Quarters } from 'react-icons/ai';
import {
  ModalWrapper,
  ModalOverlay,
  ModalContent,
  OptionHeader,
  FileFormatList,
  FileFormatItem,
  SizeInputWrapper,
  CloseButton,
  Unit,
  InputSizeError,
  DownloadButton,
  DownloadLoadingIndicator,
  SizeOptionWrapper,
} from './DownloadModal.style';
import useCanvasStore from '../../store/useCanvasStore';

const mapFormatToFunction = {
  png: toPng,
  jpeg: toJpeg,
  svg: toSvg,
};

const MIN_WIDTH = 500;
const MAX_WIDTH = 10000;
const FILE_NAME = 'generativa-pattern';
const fileFormats = ['png', 'jpeg', 'svg'];

const download = async (outputWidth, format, setLoading) => {
  const converterFunction = mapFormatToFunction[format];
  const canvasWidth = useCanvasStore.getState().canvas.width;
  const scale = outputWidth / canvasWidth;

  const node = document.querySelectorAll('.canvas')[0];

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

  converterFunction(node, param)
    .then((dataUrl) => {
      const link = document.createElement('a');
      link.download = `${FILE_NAME}.${format}`;
      link.href = dataUrl;
      link.click();
      setLoading(false);
    })
    .catch((error) => {
      console.error('oops, something went wrong!', error);
    });
};

const DownloadModal = ({ hideModal }) => {
  const [fileFormat, setFileFormat] = useState('png');
  const [outputWidth, setOutputWidth] = useState(2500);
  const [sizeError, setSizeError] = useState('');
  const [loading, setLoading] = useState(false);

  const changeFileFormat = (newFileFormat) => {
    setFileFormat(newFileFormat);
  };

  const changeOutputWidth = (e) => {
    const val = e.target.value
      .replace(/[^0-9.]/g, '')
      .replace(/(\..*?)\..*/g, '$1');

    const int = val === '' ? 0 : parseInt(val, 10);

    setOutputWidth(int);

    if(int < MIN_WIDTH || int > MAX_WIDTH) {
      setSizeError(true);
    }else{
      setSizeError(false);
    }
  };

  const onDownloadButtonClicked = () => {
    if(!sizeError) {
      setLoading(true);
      download(outputWidth, fileFormat, setLoading);
    }
  };

  return (
    <Portal>
      <ModalWrapper>
        <ModalOverlay onClick={hideModal} />
        <ModalContent>
          <CloseButton onClick={hideModal}>
            <AiOutlineClose />
          </CloseButton>
          <div>
            <OptionHeader>Format</OptionHeader>
            <FileFormatList>
              {fileFormats.map((i) => {
                const isActive = i === fileFormat;
                return (
                  <FileFormatItem
                    key={`file-type-${i}`}
                    onClick={() => changeFileFormat(i)}
                    className={isActive && 'active'}
                  >{i}
                  </FileFormatItem>
                );
              })}
            </FileFormatList>
          </div>
          <SizeOptionWrapper>
            <OptionHeader>Width</OptionHeader>
            <SizeInputWrapper>
              <input
                value={outputWidth}
                type="text"
                onChange={changeOutputWidth}
                maxLength={5}
              />
              <Unit>px</Unit>
            </SizeInputWrapper>

            <InputSizeError sizeError={sizeError}>
              Input a number between {MIN_WIDTH} and {MAX_WIDTH}
            </InputSizeError>
          </SizeOptionWrapper>
          <DownloadButton
            loading={loading}
            onClick={onDownloadButtonClicked}
          >
            {
              loading && (
                <DownloadLoadingIndicator>
                  <AiOutlineLoading3Quarters />
                </DownloadLoadingIndicator>
              )
            }

            <span>Download</span>
          </DownloadButton>
        </ModalContent>
      </ModalWrapper>
    </Portal>
  );
};

export default DownloadModal;
