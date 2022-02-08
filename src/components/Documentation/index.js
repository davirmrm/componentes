import React, {useState, useRef, useEffect} from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { Button, Icon } from '../';


const Documentation = ({testid = false, style = {}, data = [], btnLabel = 'adicionar comprovante', maxSize = '10', warningSize='2', onlyShow = false, receiveFilesChange = () => {}, onClick = () => {}, changeFilesFeedback = () => {}}) => {


  const [localData, setLocalData] = useState([]);
  const [updateInput, setUpdateInput] = useState(false);
  const file = useRef();

  useEffect(() => {
    setLocalData(data);
  }, [data])

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

  const removeFile = (f) => {
    console.log(f);
    console.log(localData);
    const newList = localData.filter((d) => d.id !== f.id);
    receiveFilesChange(newList);
    setLocalData(newList);
  };

  return (
    <div testid={testid} style={style} className='documentation'>
      {
        localData.map((e, index) => (
          <React.Fragment key={e.id}>
            <div className='line'>
              <span onClick={() => {onClick(e)}}>
                {e.file.name}
              </span>
              <div>
              <Icon icon='Eye' onClick={() => onClick(e)}/>
              {!onlyShow && <Icon icon='Close' onClick={() => removeFile(e)}/>}
              </div>
            </div>  
            <div className='separator'/>
          </React.Fragment>
        ))
      }
      {!onlyShow &&  (
        <>
          <Button label={btnLabel} state='light' onClick={() => {file.current.click()}} />
          <input ref={file} key={updateInput} multiple type="file" onChange={(e) => handleClickAddingFiles(e)} />
        </>
      )}
    </div>
  );
}

Documentation.propTypes = {
  style: PropTypes.object,
  data: PropTypes.array,
  btnLabel: PropTypes.string,
  handleIconClick: PropTypes.func,
  handleButtonClick: PropTypes.func,
}

export default Documentation;
