'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const myTestTemplate = require('../app/templates/photoalbum/mytest.html');
// const photoAlbumTemplate = require('../app/templates/photoalbum/photoalbum-directive.html');
const fullSizeTemplate = require('../app/templates/photoalbum/fullsize-directive.html');
const thumbSizeTemplate = require('../app/templates/photoalbum/thumbsize-directive.html');
const textOnlyTemplate = require('../app/templates/photoalbum/textonly-directive.html');

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

  it('should list title and description only', () => {
    $httpBackend.expectGET('./templates/photoalbum/textonly-directive.html')
    .respond(200, textOnlyTemplate);

    $scope.body = {
      title: 'test title',
      description: 'test description'
    };

    let element = angular.element('<text-only title="{{body.title}}" description="{{body.description}}"></text-only>');
    // element.data('$PhotoAlbumController', {});
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    console.log(directive);
    let h1 = directive.find('h1');
    let h1text = h1.text();
    let h3 = directive.find('h3');
    let h3text = h3.text();

    expect(h1text).toBe('test title');
    expect(h3text).toBe('test description');
  });

  it('should list url and alt for thumbnails', () => {
    $httpBackend.expectGET('./templates/photoalbum/thumbsize-directive.html')
    .respond(200, thumbSizeTemplate);

    $scope.body = {
      url: 'testUrl',
      alt: 'testAlt'
    };

    let element = angular.element('<thumb-size url="body.url" alt="body.alt"></thumb-size>');
    element.data('$PhotoAlbumController', {});
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    console.log(directive);
    let img = directive.find('img');
    let imgattr = img.attr('src');
    let imgattr2 = img.attr('alt');
    console.log(img.attr('src'));

    expect(imgattr).toBe('testUrl');
    expect(imgattr2).toBe('testAlt');
  });

  it('should list url and alt for full size image', () => {
    $httpBackend.expectGET('./templates/photoalbum/fullsize-directive.html')
    .respond(200, fullSizeTemplate);

    $scope.body = {
      url: 'testUrl',
      alt: 'testAlt'
    };

    let element = angular.element('<full-size url="body.url" alt="body.alt"></full-size>');
    let link = $compile(element);
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    console.log(directive);
    let img = directive.find('img');
    let imgattr = img.attr('src');
    let imgattr2 = img.attr('alt');
    console.log(img.attr('src'));

    expect(imgattr).toBe('testUrl');
    expect(imgattr2).toBe('testAlt');
  });
});
