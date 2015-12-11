'use strict';

describe('Directive: esckey', function () {

  // load the directive's module
  beforeEach(module('underwriterApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should execute the action when the escape key is pressed', inject(function ($compile) {
    scope.test = 'ho';
    var escapeKey = 27;
    element = angular.element('<input esckey="test = \'hi\'" />');
    element = $compile(element)(scope);
    element.triggerHandler({type: 'keydown', which: escapeKey});
    expect(scope.test).toBe('hi');
  }));
});
