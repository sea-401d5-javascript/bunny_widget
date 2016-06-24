'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const myTestTemplate = require('../app/templates/photoalbum/mytest.html');
// const photoAlbumTemplate = require('../app/templates/photoalbum/photoalbum-directive.html');
// const fullSizeTemplate = require('../app/templates/photoalbum/fullsize-directive.html');
// const thumbSizeTemplate = require('../app/templates/photoalbum/thumbsize-directive.html');
// const textOnlyTemplate = require('../app/templates/photoalbum/textonly-directive.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('PhotoAlbum');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be my-test directive', () => {
    $httpBackend.expectGET('./templates/photoalbum/mytest.html')
    .respond(200, myTestTemplate);
    $scope.test = 'test data';
    let link = $compile('<my-test data="test"></my-test>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();

    expect(text).toBe('test data');
  });
});
