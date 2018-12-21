import React, { Component } from 'react'
import SpeakerButton from './speaker_button';
import {Alexa} from '../const/alexa';
import {Google} from '../const/google';
export default class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      speaker_type: "alexa",
    };
    this._toggleButton = this._toggleButton.bind(this);
  }
  _toggleButton(e){
    this.setState({speaker_type: e.target.value});
  }
  render(){
    return(
      <div className="main">
      <div className="container">
      <div className="tabs">
      <input
      type="radio"
      value="alexa"
      name="tab_item"
      id="main_alexa"
      checked={this.state.speaker_type === "alexa"}
      onChange={this._toggleButton}
      />
      <label className="tab_item" htmlFor="main_alexa">
      <i className="fab fa-amazon"></i> Alexa
      </label>
      <input
      type="radio"
      value="google"
      name="tab_item"
      id="main_google"
      checked={this.state.speaker_type === "google"}
      onChange={this._toggleButton}
      />
      <label className="tab_item" htmlFor="main_google">
      <i className="fab fa-google"></i> Google Home
      </label>
      <div className="tab_content" id="alexa_content">
      <div className="row">
      {Alexa.commands.map((command, i) => {
        return (
          <SpeakerButton
          key={i}
          title={command.title}
          description={command.description}
          pronunciation={command.pronunciation}
          pre_commands={Alexa.pre_commands}
          />
        );
      })
      }
      </div>
      </div>
      <div className="tab_content" id="google_content">
      <div className="row">
      {Google.commands.map((command, i) => {
        return (
          <SpeakerButton
          key={i}
          title={command.title}
          description={command.description}
          pronunciation={command.pronunciation}
          pre_commands={Google.pre_commands}
          />
        );
      })
      }
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
