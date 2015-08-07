/**
 * @desc universalAnalytics() sends information to universalAnalytics
 *
 * @param {Number} experimentId - experimentId to send
 * @param {Number} customVariable - customVariable to send
 *
 * @return {undefined}
 */

function universalAnalytics(experimentId, customVariable) {

  $(function() {
    var EXPERIMENT_ID = experimentId;
    if (window.optimizely &&
      window.optimizely.variationMap.hasOwnProperty(EXPERIMENT_ID) &&
      window.ga && typeof ga === 'function') {
      var name = window.optimizely.data.experiments[EXPERIMENT_ID].name;
      var variation = window.optimizely.variationNamesMap[EXPERIMENT_ID];
      window.ga('set', 'dimension' + customVariable, name + ': ' + variation);
      window.ga('send', 'event', 'optimizely', name, variation, {
          'nonInteraction': 1
        });
    }
  });

}

export default universalAnalytics;
