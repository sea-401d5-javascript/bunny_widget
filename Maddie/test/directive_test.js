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
      $scope.test = 'www.test.com';
      $scope.testAlt = 'pug test 1';
      let link = $compile('<small-image-directive url="test" alt="testAlt">');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      let img = directive.find('img');
      let img_src = img.attr('src');
      let img_alt = img.attr('alt');
      let img_width = img.attr('width');
      let img_height = img.attr('height');

      expect(img_src).toBe('www.test.com');
      expect(img_alt).toBe('pug test 1');
      expect(img_width).toBe('100');
      expect(img_height).toBe('100');
    });

    it('should display large image', () => {
      $httpBackend.expectGET('./templates/fullSize.html')
      .respond(200, fullSize);
      $scope.test = 'www.testURL.com';
      $scope.testAlt = 'pug test 2';
      let link = $compile('<full-size-directive url="test" alt="testAlt">');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      let img = directive.find('img');
      let img_src = img.attr('src');
      let img_height = img.attr('height');
      let img_width = img.attr('width');
      let img_alt = img.attr('alt');

      expect(img_src).toBe('www.testURL.com');
      expect(img_height).toBe('400');
      expect(img_width).toBe('400');
      expect(img_alt).toBe('pug test 2');
    });
  });
  describe('album directive', () => {
    it('should dislay three photos in grid mode', () => {
      $httpBackend.expectGET('./templates/photoAlbum.html')
      .respond(200, photoAlbum);

      $scope.pugs = {
        photos:[{
          url:'www.test1.com',
          alt:'pug test 1'
        }, {
          url:'www.test2.com',
          alt:'pug test 2'
        }, {
          url:'www.test3.com',
          alt:'pug test 3'
        }]
      };

      let link = $compile('<photo-album-directive photos="pugs.photos"></photo-album-directive>');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();


      directive.isolateScope().mode = 'grid';
      $httpBackend.expectGET('./templates/smallImage.html')
      .respond(200, smallImage);
      $scope.$digest();
      $httpBackend.flush();

      let grid = directive.find('small-image-directive');
      expect(grid.length).toBe(3);

    });
    it('should only display text in table mode', () => {
      $httpBackend.expectGET('./templates/photoAlbum.html')
      .respond(200, photoAlbum);

      $scope.pugs = {
        title: 'pugs',
        description: 'pugs test'
      };

      let link = $compile('<photo-album-directive title="{{pugs.title}}" description="{{pugs.description}}"></photo-album-directive>');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      directive.isolateScope().mode = 'table';
      $httpBackend.expectGET('./templates/textOnly.html')
      .respond(200, textOnly);
      $scope.$digest();
      $httpBackend.flush();

      let table = directive.find('text-only-directive');
      let table_title = (table.find('h3')).text();
      let table_D = (table.find('p')).text();

      expect(table_title).toBe('pugs');
      expect(table_D).toBe('pugs test');
    });

    it('should show single picture full size', () => {
      $httpBackend.expectGET('./templates/photoAlbum.html')
      .respond(200, photoAlbum);

      $scope.pugs = {
        photos:[
          {url: 'www.test1.com', alt: 'pug test 1'},
          {url: 'www.test2.com', alt: 'pugs test 2'},
          {url: 'www.test3.com', alt: 'pugs test 3'}
        ]
      };

      let link = $compile('<photo-album-directive photos = "pugs.photos"></photo-album-directive>');
      let directive = link($scope);
      $scope.$digest();
      $httpBackend.flush();

      directive.isolateScope().fullSize('pugs.photos[0]');
      $httpBackend.expectGET('./templates/fullSize.html')
      .respond(200, fullSize);
      $scope.$digest();
      $httpBackend.flush();

      expect(directive.isolateScope().mode).toBe('single');
    });
  });
});
