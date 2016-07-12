import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | homepage');

//The test assumes that each rental element will have a class called listing.
test('should list available products.', function (assert) {
	visit('/'); //loads the route specified for given url
	andThen(function(){
		assert.equal(this.$('.listing').length, 3, "should see 3 listings");
	});
});

//simply to check whether what you click matches the url
test('should link to information about the company.', function (assert) {
	visit('/');
	click('a:contains("About")');
	andThen(function (){
		assert.equal(currentURL(), '/about', "should navigate to about");
	});
});

test('should link to contact information.', function (assert) {
	visit('/');
	click('a:contains("Contact")');
	andThen(function (){
		assert.equal(currentURL(), '/contact', "should navigate to contact");
	});
});

test('should filter the list of products by country.', function (assert) {
  visit('/');
  fillIn('.list-filter input', 'seattle');
  keyEvent('.list-filter input', 'keyup', 69);
  andThen(function () {
    assert.equal(this.$('.listing').length, 1, "should show 1 listing");
    assert.equal(this.$(".listing .location:contains('London')").length, 1, "should contain 1 listing with location London");
  });	
});

