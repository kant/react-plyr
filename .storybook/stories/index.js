import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import { action } from '@storybook/addon-actions';

import './withWrapper';
import './updateVideoSource';

import Plyr from '../../src';

storiesOf('React Plyr', module)
  .add('Simple Youtube video', withInfo()(() => (
    <Plyr videoId="CDFN1VatiJA" debug />
  )))
  .add('Simple Vimeo video', withInfo()(() => (
    <Plyr
      type="vimeo"
      videoId="https://vimeo.com/189789787"
    />
  )))
  .add('Video with all Controls', withInfo()(() => (
    <Plyr
      videoId="bTqVqk7FSmY"
      controls={[
        'play-large',
        'play',
        'progress',
        'current-time',
        'mute',
        'volume',
        'captions',
        'settings',
        'pip',
        'airplay',
        'fullscreen',
      ]}
    />
  )))
  .add('Default video with file address', withInfo()(() => (
    <Plyr
      type="video"
      url="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4"
      title="View From A Blue Moon"
      poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
    />
  )))
  .add('Default video with multiple file addresses', withInfo()(() => (
    <Plyr
      type="video"
      title="View From A Blue Moon"
      poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
      sources={[
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
          type: 'video/mp4',
          size: 576,
        },
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
          type: 'video/mp4',
          size: 720,
        },
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
          type: 'video/mp4',
          size: 1080,
        },
        {
          src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1440p.mp4',
          type: 'video/mp4',
          size: 1440,
        },
      ]}
    />
  )))
  .add('Player with autoplay and callbacks', withInfo()(() => (
    <Plyr
      videoId="M6_a2wBK-yc"
      volume={0.4}
      autoplay
      onReady={action('Video is ready!')}
      onPlay={action('Play!')}
      onPause={action('Video is paused')}
      onEnd={action('Video has finished!')}
      onEnterFullscreen={action('Fullscreen is enabled')}
      onExitFullscreen={action('Fullscreen is disabled')}
      onVolumeChange={action('Volume changed')}
      onSeeked={action('Seeked')}
      onRateChange={action('onRateChange')}
      // onTimeUpdate={action('time update')}
      onControlsHidden={action('conntrols are hidden')}
      onControlsShown={action('controls are shown')}
    />
  )))
  .add('With captions', withInfo()(() => (
    <Plyr
      type="video"
      poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg"
      onCaptionsEnabled={action('Captions are enabled')}
      onCaptionsDisabled={action('Captions are disabled')}
      onLanguageChange={action('Language changed')}
      captions={{ active: true, language: 'auto', update: false }}
      sources={[
        {
          src:'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
          type:'video/mp4',
          size:'576'
        },
        {
          src:'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
          type:'video/mp4',
          size:'720'
        },
        {
          src:'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
          type:'video/mp4',
          size:'1080'

        }
      ]}
      tracks={[
        {
          kind: 'captions',
          label: 'English',
          srclang: 'en',
          src: './View_From_A_Blue_Moon_Trailer-HD.en.vtt',
          default: true
        },
        {
          kind: 'captions',
          label: 'Français',
          srclang: 'fr',
          src: './View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
        }
      ]}
    />
  )))
  .add('Audio player with url', withInfo()(() => (
    <Plyr
      type="audio"
      url="https://archive.org/download/testmp3testfile/mpthreetest.mp3"
    />
  )))
  .add('Audio player with sources', withInfo()(() => (
    <Plyr
      type="audio"
      sources={[
        {
          src: "https://archive.org/download/testmp3testfile/mpthreetest.ogg",
          type: "audio/ogg"
        },
        {
          src: "https://archive.org/download/testmp3testfile/mpthreetest.mp3",
          type: "audio/mpeg"
        }
      ]}
    />
  )))
  .add('Multiple players on same page', withInfo()(() => (
    <Fragment>
      {[
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
        'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4'
      ].map((video, index) => (
        <div key={index} style={{ width: 540 }}>
          <Plyr
            url={video}
            type="video"
            className={`react-plyr-${index}`}
          />
        </div>
      ))}
    </Fragment>
  )))
