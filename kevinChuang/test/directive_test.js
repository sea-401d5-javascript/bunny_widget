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
    angular.mocks.module('AlbumApp');
    angular.mocks.inject(function(_$httpBackend_,_$scope_,_$compile_) {
      $httpBackend = _$httpBackend_;
      $scope = _$scope_;
      $compile = _$compile_;
    });
  });

  it('should run a test', ()=> {
    expect(true).toBe(true);
  });

// Album test-------------------------------
  it('should ') {
    $httpBackend.expectGET('./templates/album/album.html')
    .respond(200, albumTemplate);
    $httpBackend.expectGET('./templates/album/full.html')
    .respond(200, fullTemplate);
    $httpBackend.expectGET('./templates/album/text.html')
    .respond(200, textTemplate);
    $httpBackend.expectGET('./templates/album/thumb.html')
    .respond(200, thumbTemplate);
  };
});

// full.html--------------------------------
  it('should show a big image') {

  };
// text.html--------------------------------
  it('should show text') {

  };
// thumb.html-------------------------------
  it('should show a thumnail') {

  };
