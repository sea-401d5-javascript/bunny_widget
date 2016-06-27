'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const albumTemplate = require('../app/templates/AlbumApp/album.html');
const textTemplate = require('../app/templates/AlbumApp/text.html');
const photoTemplate = require('../app/templates/AlbumApp/photo.html');

describe('directive-tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('AlbumApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });
  it('should be an album with a title', () => {
    $httpBackend.expectGET('./templates/AlbumApp/album.html')
      .respond(200, albumTemplate);
    $scope.testTitle = 'test title';
    let link = $compile('<album-directive title="testTitle"></album-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let h2 = directive.find('h2');
    let text = h2.text();

    expect(text).toBe('test title');
  });
  it('on text directive should display title in a list item', () => {
    $httpBackend.expectGET('./templates/AlbumApp/text.html')
      .respond(200, textTemplate);
    $scope.title = 'test title';
    let link = $compile('<text-directive title="title"></text-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let li = directive.find('li');
    let text = li.text();

    expect(text).toBe('test title');
  });
  it('on photo directive should display an image in a list item', () => {
    $httpBackend.expectGET('./templates/AlbumApp/photo.html')
      .respond(200, photoTemplate);
    $scope.url = 'https://i.ytimg.com/vi/ef9Bu1mkX_Q/hqdefault.jpg';
    let link = $compile('<photo-directive url="url"></photo-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let li = directive.find('li');
    let img = li.find('img');
    expect(img.attr('src')).toBe($scope.url);
  });
  it('should display photos we feed in on photodirective', () => {
    $httpBackend.expectGET('./templates/AlbumApp/album.html')
      .respond(200, albumTemplate);
    $httpBackend.expectGET('./templates/AlbumApp/photo.html')
      .respond(200, photoTemplate);
    $httpBackend.expectGET('./templates/AlbumApp/text.html')
      .respond(200, textTemplate);
    $scope.testPhotos = [{
      title: 'testKitty',
      url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg'
    }, {
      title: 'testKitty2',
      url: 'https://i.ytimg.com/vi/ef9Bu1mkX_Q/hqdefault.jpg'
    }];
    $scope.testTitle = 'test title';
    let link = $compile('<album-directive photos="testPhotos" title="testTitle"></album-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let pD = directive.find('photo-directive');
    let firstPd = angular.element(pD[0]);
    let firstImg = firstPd.find('img');
    expect(firstImg.attr('src')).toBe('https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg');
  });
  it('should display titles we feed in on the text directive', () => {
    $httpBackend.expectGET('./templates/AlbumApp/album.html')
      .respond(200, albumTemplate);
    $httpBackend.expectGET('./templates/AlbumApp/photo.html')
      .respond(200, photoTemplate);
    $httpBackend.expectGET('./templates/AlbumApp/text.html')
      .respond(200, textTemplate);
    $scope.testPhotos = [{
      title: 'testKitty',
      url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg'
    }, {
      title: 'testKitty2',
      url: 'https://i.ytimg.com/vi/ef9Bu1mkX_Q/hqdefault.jpg'
    }];
    $scope.testTitle = 'test title';
    let link = $compile('<album-directive photos="testPhotos" title="testTitle"></album-directive>');
    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let tD = directive.find('text-directive');
    let firstTd = angular.element(tD[0]);
    let firstText = firstTd.find('li').text();

    expect(firstText).toBe('testKitty');
  });
});
