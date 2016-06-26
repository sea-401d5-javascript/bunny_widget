'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const bunnyTemplate = require('../app/templates/firstApp/bunnyApp.html');
const thumbnailTemplate = require('../app/templates/firstApp/thumbnail.html');
const imageTemplate = require('../app/templates/firstApp/image.html');
const photoTemplate = require('../app/templates/firstApp/photo.html');

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

  it('should be a test bunnyApp template', () => {
    $httpBackend.expectGET('./templates/firstApp/bunnyApp.html')
      .respond(200, bunnyTemplate);
    $scope.test = 'test data';
    $scope.description = 'test description';
    $scope.url = 'test url';
    let link = $compile('<title-directive title="test" description="description" url="url"></title-directive');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();
    let h3 = directive.find('h3');
    let texturl = h3.text();
    let p = directive.find('p');
    let textp = p.text();

    expect(text).toBe('Title: test data');
    expect(textp).toBe('description: test description');
    expect(texturl).toBe('url: test url');
  });

  it('should test thumbnail tempalate', () => {
    $httpBackend.expectGET('./templates/firstApp/thumbnail.html')
      .respond(200, thumbnailTemplate);
    $scope.url = 'www.test.com';
    $scope.title = 'test data';
    $scope.description = 'test description';
    let link = $compile('<thumbnail-display url="url" description="description" title="title"/>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let img = directive.find('img');

    let title = img.attr('title');
    let imgDescription = img.attr('description');
    let imgUrl = img.attr('url');
    let imgWidth = img.attr('width');
    let imgHeight = img.attr('height');

    console.log('thumbnale', directive);
    expect(title).toBe('test data');
    expect(imgDescription).toBe('test description');
    expect(imgUrl).toBe('www.test.com');
    expect(imgWidth).toBe('100px');
    expect(imgHeight).toBe('100px');

  });

  it('should be a test imageApp template', () => {
    $httpBackend.expectGET('./templates/firstApp/image.html')
      .respond(200, imageTemplate);
    $scope.title = 'test data';
    $scope.description = 'test description';
    $scope.url = 'www.test.com';
    $scope.height = '400';
    $scope.width = '400';
    let link = $compile('<image-display title="test" description="description" url="url" width="width" height="height"></image-display>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let img = directive.find('img');
    let title = img.attr('title');
    let imgDescription = img.attr('description');
    let imgUrl = img.attr('url');
    let imgWidth = img.attr('width');
    let imgHeight = img.attr('height');

    console.log('large image', directive);
    expect(title).toBe('test data');
    expect(imgDescription).toBe('test description');
    expect(imgUrl).toBe('www.test.com');
    expect(imgWidth).toBe('400');
    expect(imgHeight).toBe('400');
  });

  it('should be a test photoApp template', () => {
    $httpBackend.expectGET('./templates/firstApp/photo.html')
      .respond(200, photoTemplate);

    $scope.test = {
      photos: [{
        url: 'www.test1.com',
        title: 'test photo 1'
      }, {
        url: 'www.test2.com',
        title: 'test photo 2'
      }, {
        url: 'www.test3.com',
        title: 'test photo 3'
      }]
    };

    let link = $compile('<photo-album photos="test.photos" ></photo-album');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    directive.isolateScope().mode = 'tiny';
    $httpBackend.expectGET('./tempalates/firstApp/bunnyApp.html')
      .respond(200, bunnyTemplate);
    $httpBackend.expectGET('./templates/firstApp/thumbnail.html')
      .respond(200, thumbnailTemplate);
    $httpBackend.expectGET('./templates/firstApp/image.html')
      .respond(200, imageTemplate);
    $scope.$digest();
    $httpBackend.flush();

    console.log('album log', directive);
  });

});
