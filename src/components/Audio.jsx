import React, { Component } from 'react';
import audio from '../audio/sample.mp3';
import './Audio.css';

class Audio extends Component {
  constructor(props) {
    super(props);
    this.state = { loudness: 0, loaded: false };
    this.handlePlayAudio = this.handlePlayAudio.bind(this);
    this.handleCanPlayThroughAudio = this.handleCanPlayThroughAudio.bind(this);
    this.isPlaying = this.isPlaying.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
  }

  handlePlayAudio() {
    if (this.isPlaying()) {
      this.stopAudio();
    } else {
      this.playAudio();
    }
  }

  isPlaying() {
    return !this.audioElement.paused;
  }

  playAudio() {
    this.audioElement.play();
  }

  stopAudio() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
  }

  handleCanPlayThroughAudio(event) {
    if (this.state.loaded) return;
    const context = new AudioContext();
    const node = context.createMediaElementSource(this.audioElement);

    // create a node that will handle the animation, but won't alter the audio
    // in any way        
    const processor = context.createScriptProcessor(2048, 1, 1);
    processor.onaudioprocess =
      // Here's where most of the work happens
      (e) => {
        var buffer = e.inputBuffer.getChannelData(0);
        var out = e.outputBuffer.getChannelData(0);
        var amp = 0;

        // Iterate through buffer to get the max amplitude for this frame
        for (var i = 0; i < buffer.length; i++) {
          var loud = Math.abs(buffer[i]);
          if (loud > amp) {
            amp = loud;
          }
          // write input samples to output unchanged
          out[i] = buffer[i];
        }

        this.setState({ loudness: amp });
      };

    // connect the audio element to the node responsible for the animation
    node.connect(processor);

    // connect the "animation" node to the output
    processor.connect(context.destination);

    // play the sound
    // this.audioElement.play();
    this.setState({ loaded: true });
  }

  render() {
    const { loudness } = this.state;

    return (
      <div className="Audio" onClick={this.handlePlayAudio}>
        <audio
          onCanPlayThrough={this.handleCanPlayThroughAudio}
          ref={(c) => { this.audioElement = c; }}
        >
          <source src={audio} type="audio/mpeg" />
        </audio>

        <div className="microphone-icon">
          <span className="rounded-border" />
          <span className="stick" />
          <span className="basis" />
          <span className="head-background" />

          <span className="head">
            <span
              className="inner-head"
              style={{
                height: `${loudness * 25}pt`,
                top: `${(1 - loudness) * 25}pt`
              }}
            />
          </span>
        </div>
      </div>
    );
  }
}

export default Audio;
