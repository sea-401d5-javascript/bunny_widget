'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const dummyTemplate = require('../app/templates/dummy.html');
// const smallTemplate = require('../app/templates/small-image.html');
// const titleTemplate = require('../app/templates/title-image.html');
// const albumTemplate = require('../app/templates/album.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('ImageApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should be a dummy', () => {
    $httpBackend.expectGET('./templates/dummy.html')
      .respond(200, dummyTemplate);
    $scope.test = 'test data';
    let link = $compile('<dummy data="test"></dummy>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();

    expect(text).toBe('test data');
  });

  // it('should get the full image title', () => {
  //   console.log($httpBackend);
  //   $httpBackend.expectGET('./templates/full-image.html')
  //    .respond(200, fullTemplate);
  //   $scope.test = 'full title';
  //   let link = $compile('<full-directive title="test"></full-directive>');
  //   let directive = link($scope);
  //   $scope.$digest();
  //   $httpBackend.flush();
  //
  //   let h3 = directive.find('h3');
  //   let text = h3.text();
  //
  //   expect(text).toBe('full title');
  // });

 //  it('should get the full image description', () => {
 //   $httpBackend.expectGET('../app/templates/full-image.html')
 //     .respond(200, fullTemplate);
 //   $scope.test = 'full description';
 //   let link = $compile('<full-directive description="test"></full-directive>');
 //   let directive = link($scope);
 //   $scope.$digest();
 //   $httpBackend.flush();
 //
 //   let h2 = directive.find('h2');
 //   let text = h2.text();
 //
 //   expect(text).toBe('full description');
 // });
 //
 //  it('should get the small image title', () => {
 //   $httpBackend.expectGET('../app/templates/small-image.html')
 //     .respond(200, smallTemplate);
 //   $scope.test = 'small title';
 //   let link = $compile('<small-directive title="test"></small-directive>');
 //   let directive = link($scope);
 //   $scope.$digest();
 //   $httpBackend.flush();
 //
 //   let h1 = directive.find('h1');
 //   let text = h1.text();
 //
 //   expect(text).toBe('small title');
 // });
 //
 //  it('should get the small image description', () => {
 //   $httpBackend.expectGET('../app/templates/small-image.html')
 //     .respond(200, smallTemplate);
 //   $scope.test = 'small description';
 //   let link = $compile('<tiny-image-directive description="test"></tiny-image-directive>');
 //   let directive = link($scope);
 //   $scope.$digest();
 //   $httpBackend.flush();
 //
 //   let h2 = directive.find('h2');
 //   let text = h2.text();
 //
 //   expect(text).toBe('small description');
 // });

//  it('should get the title directive title', () => {
//    $httpBackend.expectGET('../app/templates/title-image.html')
//      .respond(200, titleTemplate);
//    $scope.test = 'title title';
//    let link = $compile('<title-directive title="test"></title-directive>');
//    let directive = link($scope);
//    $scope.$digest();
//    $httpBackend.flush();
//
//    let h1 = directive.find('h1');
//    let text = h1.text();
//
//    expect(text).toBe('title title');
//  });
//
//  it('should get the title directive description', () => {
//    $httpBackend.expectGET('../app/templates/title-image.html')
//      .respond(200, titleTemplate);
//    $scope.test = 'title description';
//    let link = $compile('<title-image description="test"></title-image>');
//    let directive = link($scope);
//    $scope.$digest();
//    $httpBackend.flush();
//
//    let h2 = directive.find('h2');
//    let text = h3.text();
//
//    expect(text).toBe('title description');
//  });
//
//  it('should get the album directive title', () => {
//    $httpBackend.expectGET('../app/templates/album.html')
//      .respond(200, albumTemplate);
//    $scope.test = 'album title';
//    let link = $compile('<album title="test"></album>');
//    let directive = link($scope);
//    $scope.$digest();
//    $httpBackend.flush();
//
//    let h1 = directive.find('h1');
//    let text = h1.text();
//
//    expect(text).toBe('album title');
//  });
//
//  it('should get the album directive description', () => {
//    $httpBackend.expectGET('../app/templates/album.html')
//      .respond(200, albumTemplate);
//    $scope.test = 'album description';
//    let link = $compile('<album description="test"></album>');
//    let directive = link($scope);
//    $scope.$digest();
//    $httpBackend.flush();
//
//    let h2 = directive.find('h2');
//    let text = h2.text();
//
//    expect(text).toBe('album description');
// });
});
