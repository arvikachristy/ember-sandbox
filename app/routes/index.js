import Ember from 'ember';
//Ember Data will make a GET request to /rentals
export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  }
});