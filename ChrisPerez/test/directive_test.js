'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const firstTemplate = require('../app/templates/FirstApp/FirstTemplate.html');

describe('directive tests', ()=>{
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(()=>{
    angular.mock.module('FirstApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_){
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be a test', ()=>{
    expect(true).toBe(true);
  });

  it('should provide rabbit photo data', ()=>{
    $httpBackend.expectGET('./templates/FirstApp/FirstTemplate.html')
      .respond(200, firstTemplate);
    $scope.title = 'Test Title';
    $scope.description = 'A test thing';
    $scope.url = 'test.jpg';
    let link = $compile(
      '<first-directive title="{{title}}" description="{{description}}" url="{{url}}"></first-directive>'
    );
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h1 = directive.find('h1');
    let text1 = h1.text();
    let h2 = directive.find('h2');
    let text2 = h2.text();
    let h3 = directive.find('h3');
    let text3 = h3.text();


    expect(text1).toBe('Title: Test Title');
    expect(text2).toBe('Description: A test thing');
    expect(text3).toBe('Source: test.jpg');
  });
});
