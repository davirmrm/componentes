import React from 'react'
import CKEditor from "react-ckeditor-component";
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';

const editorConfiguration = {
  
  // toolbar: [ 'heading', '|', 'bold', 'italic', 'bulletedList', 'numberedList' ],
  // heading: {
  //     options: [
  //         { model: 'paragraph', title: 'Parágrafo', class: 'ck-heading_paragraph' },
  //         { model: 'heading1', view: 'h1', title: 'Cabeçalho 1', class: 'ck-heading_heading1' },
  //         { model: 'heading2', view: 'h2', title: 'Cabeçalho 2', class: 'ck-heading_heading2' },
  //         { model: 'heading3', view: 'h3', title: 'Cabeçalho 3', class: 'ck-heading_heading3' }
  //     ]
  // }
    // toolbar: {
    //     items: [
    //         'heading',
    //         '|',
    //         'alignment',                                                 // <--- ADDED
    //         'bold',
    //         'italic',
    //         'link',
    //         'bulletedList',
    //         'numberedList',
    //         'uploadImage',
    //         'blockQuote',
    //         'undo',
    //         'redo'
    //     ]
    // },
    // image: {
    //     toolbar: [
    //         'imageStyle:inline',
    //         'imageStyle:block',
    //         'imageStyle:side',
    //         '|',
    //         'toggleImageCaption',
    //         'imageTextAlternative'
    //     ]
    // },
    // // This value must be kept in sync with the language defined in webpack.config.js.
    // language: 'en',

    
  extraPlugins: [MyCustomUploadAdapterPlugin],
  ckfinder: {
      // Upload the images to the server using the CKFinder QuickUpload command
      // You have to change this address to your server that has the ckfinder php connector
      uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
  }
}


export function TextareaEditor({ 
  children, 
  action, 
  value = '', 
  label, 
  name, 
  color = '',
  required = {},
  maxLength = '1000' 
}) {
  const require = Object.keys(required)

  const handleEditor = ({data, editor}) =>{
    let newContent = editor.getData();
    action({target: {name, event:'event', editor, value: newContent}})
  }
  return (
    <div className={`form-box ${color} ${require.length && (required.erro[name]?'erro':'')} `}>
      <label className='label-input' htmlFor={`id-${name}`}>{require.length?<span>*</span>:''} {label}</label>
      <div>
          <CKEditor
            activeClass="p10" 
            content={value} 
            events={{
              "blur": handleEditor,
              "afterPaste": handleEditor,
              "change": handleEditor
            }}
            />
        {/* <CKEditor
          editor={ ClassicEditor}
          data={value}
          config={editorConfiguration}
          onReady={ editor => {
            console.log( 'Editor is ready to use!', editor );
              // You can store the "editor" and use when it is needed.
              // console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
              const data = editor.getData();
              // console.log( { event, editor, data } );
              action({target: {name, event, editor, value: data}})
          } }
          onBlur={ ( event, editor ) => {
            const data = editor.getData();
              // console.log( 'Blur.', editor );
              action({target: {name, event, editor, value: data}})
          } }
          onFocus={ ( event, editor ) => {
            const data = editor.getData();
              // console.log( 'Focus.', editor );
              action({target: {name, event, editor, value: data}})
          } }
        /> */}
      </div>
        {
          required.erro?.[name] ?
            <span className='campo-obrigatorio'>{required.message}</span>
          :null
        }
    </div>
  )
}

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get( 'FileRepository' ).createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader)
  }
}

class MyUploadAdapter {
    constructor(props) {
        // CKEditor 5's FileLoader instance.
      this.loader = props;
      // URL where to send files.
      this.url = `${'http://localhost:3600/api/'}/Services/SaveImage`;
    }

    // Starts the upload process.
    upload() {
        return new Promise((resolve, reject) => {
            this._initRequest();
            this._initListeners(resolve, reject);
            this._sendRequest();
        } );
    }

    // Aborts the upload process.
    abort() {
        if ( this.xhr ) {
            this.xhr.abort();
        }
    }

    // Example implementation using XMLHttpRequest.
    _initRequest() {
        const xhr = this.xhr = new XMLHttpRequest();

        xhr.open('POST', this.url, true);
        xhr.responseType = 'json';
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*')
        xhr.setRequestHeader('Authorization', `Tolken ${localStorage.tokenLeading360}`)
    }

    // Initializes XMLHttpRequest listeners.
    _initListeners( resolve, reject ) {
        const xhr = this.xhr;
        const loader = this.loader;
        const genericErrorText = 'Couldn\'t upload file:' + ` ${ loader.file.name }.`;

        xhr.addEventListener( 'error', () => reject( genericErrorText ) );
        xhr.addEventListener( 'abort', () => reject() );
        xhr.addEventListener( 'load', () => {
            const response = xhr.response;
            if ( !response || response.error ) {
                return reject( response && response.error ? response.error.message : genericErrorText );
            }

            // If the upload is successful, resolve the upload promise with an object containing
            // at least the "default" URL, pointing to the image on the server.
            resolve({
                default: response.s3Url
            });
        } );

        if ( xhr.upload ) {
            xhr.upload.addEventListener( 'progress', evt => {
                if ( evt.lengthComputable ) {
                    loader.uploadTotal = evt.total;
                    loader.uploaded = evt.loaded;
                }
            } );
        }
    }

    // Prepares the data and sends the request.
    _sendRequest() {
        const data = new FormData();

        this.loader.file.then(result => {
          data.append('file', result);
          this.xhr.send(data);
          }
        )
    }

}