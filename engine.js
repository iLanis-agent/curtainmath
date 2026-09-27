// CurtainMath engine - honest curtain ordering math.
// Pure logic, no DOM. Shared by app.html and the node test harness.
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.CurtainMath = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var FULLNESS = { flat: 1.5, classic: 2.0, lush: 2.5 };
  var LENGTH_DELTA = { float: -0.5, kiss: 0, breakin: 1, puddle: 6 };
  var STACK_IN = 12;          // rod extension per side so stacked panels clear the glass
  var ROD_SIZES = [48, 84, 120, 144, 170]; // common adjustable rod max spans (in)

  function round2(x) { return Math.round(x * 100) / 100; }

  function plan(opts) {
    var fullness = FULLNESS[opts.fullness] || 2.0;
    var coverageIn = round2(opts.windowWidthIn * fullness);
    var rawPanels = Math.ceil(coverageIn / opts.panelWidthIn);
    var panels = Math.max(2, rawPanels + (rawPanels % 2)); // always pairs
    var achieved = round2(panels * opts.panelWidthIn / opts.windowWidthIn);
    var rodMinIn = round2(opts.windowWidthIn + 2 * STACK_IN);
    var rodSize = null;
    for (var i = 0; i < ROD_SIZES.length; i++) {
      if (ROD_SIZES[i] >= rodMinIn) { rodSize = ROD_SIZES[i]; break; }
    }
    var delta = LENGTH_DELTA[opts.lengthStyle];
    var lengthIn = round2(opts.rodToFloorIn + delta);
    var totalCost = round2(panels * (opts.pricePerPanel || 0));
    return {
      fullness: fullness,
      coverageIn: coverageIn,
      panels: panels,
      panelsPerSide: panels / 2,
      achievedFullness: achieved,
      rodMinIn: rodMinIn,
      rodSize: rodSize,
      lengthIn: lengthIn,
      totalCost: totalCost
    };
  }

  return { plan: plan, FULLNESS: FULLNESS, round2: round2 };
});
