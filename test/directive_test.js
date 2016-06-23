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
});
