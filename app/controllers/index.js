import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		filterbyCity (param){
			if(param !==''){
				return this.get('store').query('rental', {city: param});
			} else{
				return this.get('store').findAll('rental');
			}
		}
	}
});
