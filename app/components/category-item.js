import Ember from 'ember';

export default Ember.Component.extend({
  tagName: ['span'],

  classNames: ["btn btn-default"],

  category: null,

  click() {
    this.sendAction('onCategorySelection', this.get('category'));
  }
});
