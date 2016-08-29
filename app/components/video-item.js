import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['col-sm-6 col-md-4 video-list--item'],

  video: null,

  click(){
    this.sendAction('goToVideoPlayer', this.get('video.id'));
  }
});
