'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const dummyTemplate = require('../app/templates/first/dummy.html');
const fullImageTemplate = require('../app/templates/first/full_image_template.html');
const tinyImageTemplate = require('../app/templates/first/tiny_image_template.html');
const titleImageTemplate = require('../app/templates/first/title_image_template.html');
const albumsTemplate = require('../app/templates/first/albums.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('ButtSnifferApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope,
    _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be a test', () => {
    expect(true).toBe(true);
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/first/dummy.html')
      .respond(200, dummyTemplate);
    $scope.test = 'test data';
    let link = $compile('<dummy data="test"></dummy>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test data');
  });

  it('full image title property should work', () => {
    $httpBackend.expectGET('./templates/first/full_image_template.html')
      .respond(200, fullImageTemplate);
    $scope.test = 'test title';
    let link = $compile('<full-image-directive title="test"></full-image-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test title');
  });

  it('full image description property should work', () => {
    $httpBackend.expectGET('./templates/first/full_image_template.html')
      .respond(200, fullImageTemplate);
    $scope.test = 'test description';
    let link = $compile('<full-image-directive description="test"></full-image-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test description');
  });

  it('tiny image title property should work', () => {
    $httpBackend.expectGET('./templates/first/tiny_image_template.html')
      .respond(200, tinyImageTemplate);
    $scope.test = 'test title';
    let link = $compile('<tiny-image-directive title="test"></tiny-image-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test title');
  });

  it('tiny image description property should work', () => {
    $httpBackend.expectGET('./templates/first/tiny_image_template.html')
      .respond(200, tinyImageTemplate);
    $scope.test = 'test description';
    let link = $compile('<tiny-image-directive description="test"></tiny-image-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test description');
  });

  it('title directive title property should work', () => {
    $httpBackend.expectGET('./templates/first/title_image_template.html')
      .respond(200, titleImageTemplate);
    $scope.test = 'test title';
    let link = $compile('<first-image-directive title="test"></first-image-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test title');
  });

  it('title directive description property should work', () => {
    $httpBackend.expectGET('./templates/first/title_image_template.html')
      .respond(200, titleImageTemplate);
    $scope.test = 'test description';
    let link = $compile('<first-image-directive description="test"></first-image-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test description');
  });

  it('album directive title property should work', () => {
    $httpBackend.expectGET('./templates/first/albums.html')
      .respond(200, albumsTemplate);
    $scope.test = 'test title';
    let link = $compile('<photo-album title="test"></photo-album>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test title');
  });

  it('album directive description property should work', () => {
    $httpBackend.expectGET('./templates/first/albums.html')
      .respond(200, albumsTemplate);
    $scope.test = 'test description';
    let link = $compile('<photo-album description="test"></photo-album>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h3 = directive.find('h3');
    let text = h3.text();

    expect(text).toBe('test description');
  });

  it('should list some notes', () => {
    $httpBackend.expectGET('./templates/first/albums.html')
      .respond(200, albumsTemplate);
    // $httpBackend.expectGET('./templates/first/full_image_template.html')
    //   .respond(200, fullImageTemplate);

    // $httpBackend.expectGET('./templates/first/title_image_template.html')
    //   .respond(200, titleImageTemplate);


    $scope.data = {
      title: 'These pussies are super bad!!!',
      description: 'Who let these pussies out?',
      album: [
        {
          url: 'https://s-media-cache-ak0.pinimg.com/236x/d8/10/e4/d810e49915d82f8b281d07f9b0d55cd7.jpg',
          title: 'Damn this pussy is getting locked up'
        },
        {
          url: 'http://1.bp.blogspot.com/_DTGEcBi-w0g/TIg0BOQWHuI/AAAAAAAAAmI/UeFySd1t6Yw/s640/bad-cat3.jpg',
          title: 'Back in da hood pussy'
        },
        {
          url: 'https://secure.static.tumblr.com/468c354df166018752850b504e7a4561/earrb7t/xoLnoany6/tumblr_static_tumblr_static_2rtorf46vu0w4kgc8gowcc4gk_640.jpg',
          title: 'This pussy is far out man'
        }
      ]
    }



    let link = $compile('<photo-album photos="data"></photo-album>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();


    $httpBackend.expectGET('./templates/first/full_image_template.html')
      .respond(200, fullImageTemplate);
      $httpBackend.expectGET('./templates/first/title_image_template.html')
        .respond(200, titleImageTemplate);

  directive.isolateScope().mode = 'list';
    $scope.$digest();
      $httpBackend.flush();

        console.log(directive);
  });


});
