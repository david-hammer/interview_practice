/* global rockpaperscissor, describe, it, expect, should */

describe('rockpaperscissor()', function () {
  'use strict';

  it('exists', function () {
    expect(rockpaperscissor).to.be.a('function');

  });

  it('does something', function () {
    expect(rockpaperscissor(3).length).to.equal(27);
  });

  // Add more assertions here
});
