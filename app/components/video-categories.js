import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['categories-list'],

  categories: Ember.A(),

  actions: {
    onCategorySelection(){
      this.sendAction('onCategorySelection', ...arguments);
    }
  }
});
