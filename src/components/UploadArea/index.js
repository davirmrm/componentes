/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { Icon } from '../';
import styles from './style.scss';

const UploadArea = ({
  testid = false, style = {}, data = [], columns = '1', height = '4', receiveFilesChange = () => {}, onlyOne = false, maxSize = '10', warningSize='2', changeFilesFeedback = () => {}
}) => {
  const [localData, setLocalData] = useState(data);
  const [updateInput, setUpdateInput] = useState(false);

  const addFilePreview = (f) => ({ file: f, value: URL.createObjectURL(f) });

  const verifySize = size => {
    if (size > maxSize * 1024 * 1024) {
      changeFilesFeedback({label: `Arquivo muito grande, o tamanho máximo para esse processo é ${maxSize}MB.`});
      return false;
    }
    if (size > warningSize * 1024 * 1024) {
      changeFilesFeedback({label: `O processamento pode demorar um pouco, aguarde.`});
    }
    return true;
  }

  const handleClickAddingFiles = (e) => {
    const filesToAdd = [];
    for (const f in e.target.files) {
      if (typeof e.target.files[f] === 'object') {
        if (verifySize(e.target.files[f].size)) {
          filesToAdd.push(addFilePreview(e.target.files[f]));
        }
      }
    }
    const newList = [...localData, ...filesToAdd];
    receiveFilesChange(newList);
    setUpdateInput(!updateInput);
    setLocalData(newList);
  };

  const handleMouseEvent = (e, state) => {
    e.target.value = null;
    const removeView = e.target;
    if (state === 'enter') {
      removeView.classList.add('visible');
    } else {
      removeView.classList.remove('visible');
    }
  };

  const removeFile = (f) => {
    const newList = localData.filter((d) => d.value !== f.value);
    receiveFilesChange(newList);
    setLocalData(newList);
  };

  const handleDropEvent = (e, state) => {
    const uploadCard = e.target.parentNode;
    if (state === 'enter') {
      uploadCard.classList.add('hover');
    } else {
      uploadCard.classList.remove('hover');
    }
  };

  return (
    <div testid={testid} style={{ ...style, ...{ gridTemplateColumns: `repeat(${columns}, 1fr)` } }} className="uploadArea">
      {localData.map((f) => (
        <div className="uploadView" onMouseEnter={(e) => handleMouseEvent(e, 'enter')} onMouseLeave={(e) => handleMouseEvent(e, 'leave')} style={{ height: `${height}rem`, backgroundImage: `url(${f.value})` }}>
          <h6>{f.file.name}</h6>
          <div className="removeView" onClick={() => removeFile(f)}>
            <Icon icon="Trash" size="2" />
          </div>
        </div>
      ))}
      {onlyOne
        ? (localData.length === 0
      && (
      <div className="uploadCard" style={{ height: `${height}rem` }} onDragLeave={(e) => handleDropEvent(e, 'leave')} onDragEnter={(e) => handleDropEvent(e, 'enter')} onDrop={(e) => { /* dropFile(e.dataTransfer) */ }}>
        <Icon icon="Import" size="3" />
        Arraste o arquivo ou clique para fazer o upload
        <input key={updateInput} type="file" onChange={(e) => handleClickAddingFiles(e)} />
      </div>
      ))
        : (
          <div className="uploadCard" style={{ height: `${height}rem` }} onDragLeave={(e) => handleDropEvent(e, 'leave')} onDragEnter={(e) => handleDropEvent(e, 'enter')} onDrop={(e) => { /* dropFile(e.dataTransfer) */ }}>
            <Icon icon="Import" size="3" />
            Arraste o arquivo ou clique para fazer o upload
            <input key={updateInput} multiple type="file" onChange={(e) => handleClickAddingFiles(e)} />
          </div>
        )}
    </div>
  );
};

UploadArea.propTypes = {
  style: PropTypes.object,
  data: PropTypes.array,
  columns: PropTypes.string,
  height: PropTypes.string,
  receiveFilesChange: PropTypes.func,
  onlyOne: PropTypes.bool,
};

export default UploadArea;
