import React, { Component } from 'react';
export default class SpeakerButton extends Component {
  _onClick(pronunciation){
    let ssu = new SpeechSynthesisUtterance();
    ssu.text = this.props.pre_commands+pronunciation;
    ssu.lang = 'ja-JP';
    speechSynthesis.speak(ssu);
  }
  render(){
    return(
    <div className="col-sm-6 mb-2 mt-2">
    <button className="card" onClick={()=>this._onClick(this.props.pronunciation)}>
    <div className="card-body">
    <h4 className="card-title text-left">
    <i className="fas fa-play"></i>
    {this.props.title}
    </h4>
    <p className="card-text text-left">
    {this.props.description}
    </p>
    </div>
    </button>
    </div>
  );
  }
}
