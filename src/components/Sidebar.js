import React, { Component } from 'react';
import Modal from 'react-modal';
import Map from './Map';
import JSONloader from './JSONloader';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false,
      lessonNumber: this.props.route.params.id - 1,
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalOpen: false});
  }

  name = () => {
    return JSONloader.challenges[this.state.lessonNumber].name;
  }

  description = ()  => {
    return JSONloader.challenges[this.state.lessonNumber].description; 
  }

  render() {
    console.log(`${this.props.route.params.section} section. Challenge number ${this.props.route.params.id}`);

    const a = this.props.route.params.section;

    return (
      <div className="sidebar">
        <div>
          <Map/>
        </div>
        <div className="challenge">
          <h2 className="name">{this.name(a)}</h2>
          <p className="text">{this.description(a)}</p>
          <div className="buttons">
            <button className="check" onClick={this.openModal}>Check</button>
            <Modal 
              isOpen={this.state.modalOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              contentLabel="Check"
            />
            <button className="hint" onClick={this.hint}>Hint</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;