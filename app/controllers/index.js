import Ember from 'ember';

const {
  computed
} = Ember;

export default Ember.Controller.extend({

  videoCategories: computed('model.[]', {
    get(){
      const videos = this.get('model') || Ember.A();
      var filterCategories = videos.mapBy('category');
      //return uniq category from filter result
      filterCategories.unshift('All');
      return filterCategories.uniq();
    }
  }),

  selectedVideoCategory: null,

  filterVideos: computed('selectedVideoCategory', 'model.[]', {
    get(){
      const selectedVideoCategory = this.get('selectedVideoCategory');
      const videos = this.get('model') || Ember.A();
      if(!selectedVideoCategory || (selectedVideoCategory === 'All')){
        return videos;
      }else{
        return videos.filterBy('category', selectedVideoCategory);
      }
    }
  }),

  actions: {
    onCategorySelection(category){
      this.set('selectedVideoCategory', category);
    }
  }
});
