import React, { Component } from 'react';
import Modal from 'react-modal';
import Parser from 'html-react-parser';
import Glossary from '../seed/glossary/glossary.json';
import '../styles/App.css'

const customStyles = {
  content : {
    backgroundColor: '#4CA1FF',
    textAlign: 'center',
    overlay: {zIndex: 1000}
  }
};

Modal.setAppElement('#root');

class GlossaryBlock extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() { 
    return ( 
      <div>
        <div className="glossaryblock" onClick={this.openModal}>
          {this.props.term}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Glossary"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>{Glossary.definitions[this.props.id].name}</h2>
          <div>
            <p>
              {Parser(Glossary.definitions[this.props.id].definition)}
            </p>
          </div>
          <button onClick={this.closeModal} style={{textDecoration: 'none', backgroundColor: '#003D7F', color: 'white', border: 'none', padding: 15, cursor: 'pointer', width: '60%', borderRadius: 5}}>Got it</button>
        </Modal>
      </div>
    );
  }
}
 
export default GlossaryBlock;