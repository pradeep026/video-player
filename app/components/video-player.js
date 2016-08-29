import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Component.extend({
  classNames: ['video-player'],

  videoSource: computed.readOnly('video.videoSource')
});
