'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client.js');

const textOnly = require('../app/templates/textOnly.html');
const fullSize = require('../app/templates/fullSize.html');
const smallImage = require('../app/templates/smallImage.html');
const photoAlbum = require('../app/templates/photoAlbum.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;
  beforeEach(() => {
    angular.mock.module('PhotoAlbumApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;
      $compile = _$compile_;
    });
  });
  it('should run a test', () => {
    expect(true).toBe(true);
  });
  describe('unit image tests', () => {
    it('should display text only', () => {
      $httpBackend.expectGET('./templates/textOnly.html')
      .respond(200, textOnly);
      $scope.test = 'Testy Testy';
      $scope.testD = 'Test description';
      let link = $compile('<text-only-directive title="{{test}}" description="{{testD}}">');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      let h3 = directive.find('h3');
      let title = h3.text();

      let p = directive.find('p');
      let description = p.text();

      expect(title).toBe('Testy Testy');
      expect(description).toBe('Test description');
    });
    it('should display small image', () => {
      $httpBackend.expectGET('./templates/smallImage.html')
      .respond(200, smallImage);
      $scope.test = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2V0f1E80Jci4dlaRnbS1ahS72neL4I07WVAiWlMvcyqrqWT5LvQ';
      $scope.testAlt = 'pug test 1';
      let link = $compile('<small-image-directive url="test" alt="testAlt">');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      let img = directive.find('img');

    });
    it('should display large image', () => {
      $httpBackend.expectGET('./templates/fullSize.html')
      .respond(200, fullSize);
      $scope.test = 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS2V0f1E80Jci4dlaRnbS1ahS72neL4I07WVAiWlMvcyqrqWT5LvQ';
      $scope.testAlt = 'pug test 1';
      let link = $compile('<full-size-directive url="test" alt="testAlt">');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();
    })
  });
});
