import Ember from 'ember';

export default Ember.Route.extend({

  model(param){
    return this.store.find('video', param.video_id);
  }
});
