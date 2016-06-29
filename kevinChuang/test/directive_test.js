const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const albumTemplate = require('../app/template/album/album.html');
const fullTemplate = require('../app/template/album/full.html');
const textTemplate = require('../app/template/album/text.html');
const thumbTemplate = require('../app/template/album/thumb.html');


describe('Directive tests', ()=> {
  var $httpBackend;
  var $scope;
  var $compile;
  beforeEach(()=> {
    angular.mock.module('AlbumApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;
      $compile = _$compile_;
    });
  });

  afterEach(()=> {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });


// Able to run a test-----------------------
  it('should run a test', ()=> {
    expect(true).toBe(true);
  });

// Album test-------------------------------
  it('should scaffold an album',()=> {
    $httpBackend.expectGET('./template/album/album.html')
    .respond(200, albumTemplate);
    $httpBackend.expectGET('./template/album/text.html')
    .respond(200, textTemplate);
    $httpBackend.expectGET('./template/album/thumb.html')
    .respond(200, thumbTemplate);
    $httpBackend.expectGET('./template/album/full.html')
    .respond(200, fullTemplate);

    $scope.test = {
      type:'test',
      title: 'test title',
      desc: 'a test',
      imgs: [
        {
          url: 'test url',
          alt: 'test alt'
        }
      ]
    };

    var link = $compile('<album imgalbum="test"></album>');
    var directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    expect(directive.find('h3').text()).toBe('test title');
    expect(directive.find('h4').text()).toBe('a test');
    expect(directive.find('span').find('p').text()).toBe('test alt');
    expect(directive.find('img').attr('src')).toBe('test url');
    expect(directive.find('text').attr('ng-show')).toBe('mode===\'testtext\'');
    expect(directive.find('thumbnail').attr('ng-show')).toBe('mode===\'testthumbnail\'');
  });

// full.html--------------------------------
  it('should request the full picture template', ()=> {
    $httpBackend.expectGET('./template/album/full.html')
    .respond(200, fullTemplate);

    $scope.test={url:'test url'};

    var link = $compile('<full img="test"></full>');
    var directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    var ngShow = directive.find('img').attr('ng-show');
    var height = directive.find('img').attr('height');
    var width = directive.find('img').attr('width');
    var imgSrc = directive.find('img').attr('src');
    var text = directive.find('p').text();

    expect(ngShow).toBe('img==currentImg');
    expect(height).toBe('500');
    expect(width).toBe('500');
    expect(imgSrc).toBe('test url');
    expect(text).toBe('Click image to return to album list');

  });
// text.html--------------------------------
  it('should show the text template', ()=> {
    $httpBackend.expectGET('./template/album/text.html')
    .respond(200, textTemplate);

    $scope.test = {
      alt: 'test alt'
    };

    var link = $compile('<text img="test"></text>');
    var directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    var alt = directive.find('p').text();
    expect(alt).toBe('test alt');
  });
// thumb.html-------------------------------
  it('should show the thumnail template', ()=> {
    $httpBackend.expectGET('./template/album/thumb.html')
    .respond(200, thumbTemplate);

    $scope.test = {
      url: 'test url',
      alt: 'test alt'
    };

    var link = $compile('<thumbnail img="test"></thumbnail>');
    var directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    var imgSrc = directive.find('img').attr('src');
    var height = directive.find('img').attr('height');
    var width = directive.find('img').attr('width');
    var alt = directive.find('p').text();

    expect(imgSrc).toBe('test url');
    expect(height).toBe('100');
    expect(width).toBe('100');
    expect(alt).toBe('test alt');
  });
});
