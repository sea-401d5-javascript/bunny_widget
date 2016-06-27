'use strict';
const angular = require('angular');
require('angular-mocks');
require('../app/js/client');

const albumTemplate = require('../app/templates/CuteApp/album.html');
const descriptionTemplate = require('../app/templates/CuteApp/description.html');
const fullTemplate = require('../app/templates/CuteApp/full.html');
const thumbnailTemplate = require('../app/templates/CuteApp/thumbnail.html');

describe('directive tests', () => {
  let $httpBackend;
  let $scope;
  let $compile;

  beforeEach(() => {
    angular.mock.module('CuteApp');
    angular.mock.inject(function(_$httpBackend_, $rootScope, _$compile_) {
      $scope = $rootScope.$new();
      $compile = _$compile_;
      $httpBackend = _$httpBackend_;
    });
  });

  it('should have thumbnails', () => {
    $httpBackend.expectGET('./templates/CuteApp/thumbnail.html')
      .respond(200, thumbnailTemplate);

    $scope.data = 'testUrl';

    let link = $compile('<thumbnail-directive imageUrl="data"></thumbnail-directive>');

    let directive = link($scope);
    $scope.$digest();
    $httpBackend.flush();

    let thumbnail = directive.find('img');

    expect(thumbnail.attr('src')).toBe('testUrl');
  })
})
