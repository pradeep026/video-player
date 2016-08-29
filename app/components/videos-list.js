import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['row video-list'],

  videos: Ember.A(),

  actions: {
    goToVideoPlayer(){
      this.sendAction('goToVideoPlayer', ...arguments);
    }
  }
});
