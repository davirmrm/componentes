import React, { useState, useRef, useEffect } from 'react';
import styles from './style.scss'
import PropTypes from 'prop-types';
import { TabButtonNavigator, Input, Button, TextArea, Icon } from '../';


const msgs = [{type: 'public', username: 'Nome do usuário', date: '12 jun 2020 18:32', message: `Tristique maecenas faucibus sed tristique pellentesque leo, aenean et et. Vitae eget magna eu facilisis. Laoreet elementum lectus massa turpis risus justo. Scelerisque tristique egestas amet, magna sed commodo ut eget faucibus. Facilisis lectus amet, mi lacus, ullamcorper gravida vitae vitae turpis.`}, {type: 'client',username: 'Nome do usuário', date: '12 jun 2020 18:32', message: `Tristique maecenas faucibus sed tristique pellentesque leo, aenean et et. Vitae eget magna eu facilisis. Laoreet elementum lectus massa turpis risus justo. Scelerisque tristique egestas amet, magna sed commodo ut eget faucibus. Facilisis lectus amet, mi lacus, ullamcorper gravida vitae vitae turpis.`}, {type: 'private',username: 'Nome do usuário', date: '12 jun 2020 18:32', message: `Tristique maecenas faucibus sed tristique pellentesque leo, aenean et et. Vitae eget magna eu facilisis. Laoreet elementum lectus massa turpis risus justo. Scelerisque tristique egestas amet, magna sed commodo ut eget faucibus. Facilisis lectus amet, mi lacus, ullamcorper gravida vitae vitae turpis.`}]

const Chat = ({testid = false, style = {}, messages = msgs, onClick = () => {}, clientSide = false}) => {
  const [selected, setSelected] = useState({label: 'Todas', id: '1'});
  const [selectedTypeOfMessage, setSelectedTypeOfMessage] = useState({label: 'Pública', id: '1'})
  const [openFooterBox, setOpenFooterBox] = useState(false);

  const [message, setMessage] = useState('');

  const input = useRef();


  const handleBtnClick = save => {
    if(save) {
      // TODO enviar mensagem
      onClick({message, type: selectedTypeOfMessage});
      setMessage('');
    } else {
      setMessage('');
    }
    setOpenFooterBox(!openFooterBox);
  }

  useEffect(() => {
    if (openFooterBox) {
      input.current.focus();
    }
  }, [openFooterBox]);

  const scrollBox = useRef();

  useEffect(() => {
    scrollToBottom();
  }, [messages, selected])

  const scrollToBottom = () => scrollBox.current.scrollTop = scrollBox.current.scrollHeight;

  return (
    <div testid={testid} className={`chatContainer ${clientSide ? 'client': ''}`} style={style}>
      <TabButtonNavigator 
        data={[{label: 'Todas', id: '1'},{label: 'Públicas', id: '2'},{label: 'Notas privadas', id: '3'}]}
        onClick={(s) => {setSelected(s);}}
        selected={selected}
        />
      <div className='chatContent' ref={scrollBox}>
        {messages.map(msg => {
          // ID selecionado 2 significa público, ID selecionado 3 significa privado
          if (selected.id === '2' && msg.type === 'private' || selected.id === '3' && msg.type !== 'private') {
            return null;
          }
          return(
          <div className={`message ${msg.type !== 'client' ? 'right': ''}`}>
            <header>{msg.type === 'private' && !clientSide && <Icon icon='Lock'/>} {msg.username}&nbsp;<span>{msg.date}</span></header>
            <p>{msg.message}</p>
          </div>
        )})}
        {!messages.length && <span className='feedbackToUser'>Não há nenhuma mensagem para exibir.</span>}
      </div>
      {openFooterBox ? 
        <div className='chatFooter extended'>
          <TabButtonNavigator 
            data={[{label: 'Pública', id: '1'},{label: 'Nota privada', id: '2'}]}
            onClick={(s) => {setSelectedTypeOfMessage(s)}}
            selected={selectedTypeOfMessage}
            />
          <TextArea
            placeholder={clientSide ? 'Adicionar mensagem...' : 'Adicionar nota...'}
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            ref={input}
            rows={6}
          />
          <footer>
            <Button label='cancelar' state={clientSide ? 'light' : 'transparent'} onClick={() => handleBtnClick(false)}/>
            <Button label='salvar' onClick={() => handleBtnClick(true)}/>
          </footer>
        </div>
        :  
        <div className='chatFooter' onClick={() => setOpenFooterBox(!openFooterBox)}>
            <Input 
              placeholder={clientSide ? 'Adicionar mensagem...' : 'Adicionar nota...'}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
        </div>
      }
    </div>
  );
}

Chat.propTypes = {
  style: PropTypes.object
}

export default Chat;
