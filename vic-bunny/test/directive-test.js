'use strict';

const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const myTestTemplate = require('../app/templates/photoalbum/mytest.html');
const textOnlyTemplate = require('../app/templates/photoalbum/textonly-directive.html');
const thumbSizeTemplate = require('../app/templates/photoalbum/thumbsize-directive.html');
const fullSizeTemplate = require('../app/templates/photoalbum/fullsize-directive.html');
const photoAlbumTemplate = require('../app/templates/photoalbum/photoalbum-directive.html');

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

    let h1 = directive.find('h1');
    let h1text = h1.text();
    let h3 = directive.find('h3');
    let h3text = h3.text();

    expect(h1text).toBe('test title');
    expect(h3text).toBe('test description');
  });

  it('should show url and alt for thumbnails', () => {
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

    let img = directive.find('img');
    let imgattr = img.attr('src');
    let imgattr2 = img.attr('alt');

    expect(imgattr).toBe('testUrl');
    expect(imgattr2).toBe('testAlt');
  });

  it('should show url and alt for full size image', () => {
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

    let img = directive.find('img');
    let imgattr = img.attr('src');
    let imgattr2 = img.attr('alt');

    expect(imgattr).toBe('testUrl');
    expect(imgattr2).toBe('testAlt');
  });

  describe('photo album directive tests', () => {
    it('should show 3 thumbnails in thumb mode', () => {
      $httpBackend.expectGET('./templates/photoalbum/photoalbum-directive.html')
      .respond(200, photoAlbumTemplate);
      $httpBackend.expectGET('./templates/photoalbum/textonly-directive.html')
      .respond(200, textOnlyTemplate);


      $scope.dogalbum = {
        photos: [{
          url: 'test url1',
          alt: 'test alt1'
        },
        {
          url: 'test url2',
          alt: 'test alt2'
        },
        {
          url: 'test url3',
          alt: 'test alt3'
        }]
      };

      let element = angular.element('<photo-album photos="dogalbum.photos"></photo-album>');
      let link = $compile(element);
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      directive.isolateScope().mode = 'thumb';
      $httpBackend.expectGET('./templates/photoalbum/thumbsize-directive.html')
      .respond(200, thumbSizeTemplate);
      $scope.$digest();
      $httpBackend.flush();

      let thumb = directive.find('thumb-size');
      console.log('thumb', thumb);

      expect(thumb.length).toBe(3);

    });

    it('should display text only in text mode', () => {
      $httpBackend.expectGET('./templates/photoalbum/photoalbum-directive.html')
      .respond(200, photoAlbumTemplate);
      $httpBackend.expectGET('./templates/photoalbum/textonly-directive.html')
      .respond(200, textOnlyTemplate);

      $scope.dogalbum = {
        title: 'dogs test',
        description: 'dogs test description'
      };

      let element = angular.element('<photo-album photos="dogalbum.photos" title="{{dogalbum.title}}" description="{{dogalbum.description}}"></photo-album>');
      let link = $compile(element);
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      directive.isolateScope().mode = 'text';

      let textmode = directive.find('text-only');
      let texttitle = (textmode.find('h1')).text();
      let textdesc = (textmode.find('h3')).text();
      console.log('text', textmode);

      expect(texttitle).toBe('dogs test');
      expect(textdesc).toBe('dogs test description');
    });

    it('should display a full size image when thumbnail is clicked', () => {
      $httpBackend.expectGET('./templates/photoalbum/photoalbum-directive.html')
      .respond(200, photoAlbumTemplate);
      $httpBackend.expectGET('./templates/photoalbum/textonly-directive.html')
      .respond(200, textOnlyTemplate);

      $scope.dogsalbum = {
        photos: [{
          url: 'test url1',
          alt: 'test alt1'
        },
        {
          url: 'test url2',
          alt: 'test alt2'
        },
        {
          url: 'test url3',
          alt: 'test alt3'
        }]
      };

      let element = angular.element('<photo-album photos="dogalbum.photos" title="{{dogalbum.title}}" description="{{dogalbum.description}}"></photo-album>');
      let link = $compile(element);
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      directive.isolateScope().showThumbAsFull('dogalbum.photos[0]');
      $httpBackend.expectGET('./templates/photoalbum/fullsize-directive.html')
      .respond(200, fullSizeTemplate);
      $scope.$digest();
      $httpBackend.flush();

      let imgwidth = directive.find('img').attr('width');
      let imgheight = directive.find('img').attr('height');
      let full = directive.find('full-size');
      console.log('full', full);

      expect(directive.isolateScope().mode).toBe('full');
      expect(imgwidth).toBe('400');
      expect(imgheight).toBe('400');
      expect(full.length).toBe(1);
    });
  });
});
