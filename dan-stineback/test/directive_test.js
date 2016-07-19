'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const bunnyTemplate = require('../app/templates/firstApp/bunnyApp.html');
const thumbnailTemplate = require('../app/templates/firstApp/thumbnail.html');
const imageTemplate = require('../app/templates/firstApp/image.html');


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
    let link = $compile('<thumbnail-display url="url"></thumbnail-display>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let img = directive.find('img');

    let imgUrl = img.attr('src');
    let imgWidth = img.attr('width');
    let imgHeight = img.attr('height');


    expect(imgUrl).toBe('www.test.com');
    expect(imgWidth).toBe('100px');
    expect(imgHeight).toBe('100px');

  });

  it('should be a test imageApp template', () => {
    $httpBackend.expectGET('./templates/firstApp/image.html')
      .respond(200, imageTemplate);
    $scope.url = 'www.test.com';
    $scope.height = '400';
    $scope.width = '400';
    let link = $compile('<image-display url="url" width="width" height="height"></image-display>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let img = directive.find('img');
    let imgUrl = img.attr('src');
    let imgWidth = img.attr('width');
    let imgHeight = img.attr('height');


    expect(imgUrl).toBe('www.test.com');
    expect(imgWidth).toBe('400');
    expect(imgHeight).toBe('400');
  });

});
