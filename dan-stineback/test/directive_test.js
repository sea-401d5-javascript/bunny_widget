

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const bunnyTemplate = require('../app/templates/firstApp/bunnyApp.html');

describe('directive test', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('BunnyApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be a test', () => {
    expect(true).toBe(true);
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/firstApp/bunnyApp.html')
      .respond(200, bunnyTemplate);
    $scope.test = 'test data';
    let link = $compile('{{title}}');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();

    expect(text).toBe('test data');
  });

});
