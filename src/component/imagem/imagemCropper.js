import React, { useEffect, useRef, useState } from 'react'
import './imagem.css'
import "cropperjs/dist/cropper.css";
import { Cropper } from 'react-cropper';
import { Button } from '../button/button';
import ImgDefault from './imgDefault.png'

export function ImagemCropper({
  children,
  action,
  label, 
  name,
  value,
  imgDefault = ImgDefault,
  config = {
    style: { height: 275, width: "100%" },
    cropBoxResizable: true,
    minCropBoxHeight: 10,
    minCropBoxWidth: 10,
    initialAspectRatio: 1
  },
  textBtn = 'Selecionar nova foto'
}) {
  const webcamRef = React.useRef(null);
  const cropperRef = useRef(null);
  const [foto, setfoto] = useState()
  const [cropData, setcropData] = useState()

  useEffect(()=>{ 
    setfoto(value? value : imgDefault)
  }, [])

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setcropData(cropper.getCroppedCanvas().toDataURL())
    action({target: {name: name, value: cropper.getCroppedCanvas().toDataURL()}})
  };
  
  const imgChange = async e => {
    if (e.target.files[0]) {
      const fotourl = URL.createObjectURL(e.target.files[0])
      const value = e.target.files[0]
      setfoto(fotourl)
      const imgBase64 = await toBase64(e.target.files[0])
      // await action({target: {name: name, value: cropData, blob: fotourl, base64: imgBase64, file: value}})
    }
  }
  const capture = e => {
      const imageSrc = webcamRef.current.getScreenshot();
  }
// console.log(cropData);
  return (
  <div className='row'>
    <div className='col-6'>
      <Cropper
        src={foto}
        style={config.style}
        ref={cropperRef}
        initialAspectRatio={config.initialAspectRatio}
        viewMode={1}
        guides={true}
        minCropBoxHeight={config.minCropBoxHeight}
        minCropBoxWidth={config.minCropBoxWidth}
        cropBoxResizable={config.cropBoxResizable}
        background={true}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
        crop={onCrop}
      />
    </div>
    <div className='col-6'>
      {
        cropData?
        <div className='bg-img-default'>
          <div></div>
          <img style={{ width: "100%" }} src={cropData} alt="cropped" />
        </div>
        :null
      }
    </div>
      {/* <div className='col-12' style={{textAlign:'center'}}>
          <img style={{ maxWidth: "100%", maxHeight:'400px' }} src={foto} alt="cropped" />
      </div> */}
     
    <div className='col-12'>
      <div className='btn-file-center'>
        <Button  type='btn circle' color='primary'>
          <input type='file' title={textBtn} onChange={e => imgChange(e)} file={foto} />
          {textBtn}
        </Button>
      </div>
    </div>
  </div>
  )
}
