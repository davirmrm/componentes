import React, { useEffect, useRef, useState } from 'react'
import './imagem.css'
import "cropperjs/dist/cropper.css";
import { Cropper } from 'react-cropper';
import { Button } from '../button/button';
import ImgDefault from './imgDefault.png'

export function Imagem({
  children,
  action,
  label, 
  name,
  value,
  imgDefault = ImgDefault,
  textBtn = 'Selecionar nova foto'
}) {
  const [foto, setfoto] = useState()

  useEffect(()=>{ 
    setfoto(value? value : imgDefault)
  }, [])
  
  const imgChange = (e) => {
    const fotourl = URL.createObjectURL(e.target.files[0])
    setfoto(fotourl)

    action({target: {name: name, value: e.target.files[0], blob: fotourl}})
  }

  return (
  <div className='row'>

      <div className='col-12' style={{textAlign:'center'}}>
          <img style={{ maxWidth: "100%", maxHeight:'400px' }} src={foto} alt="cropped" />
      </div>
     
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
