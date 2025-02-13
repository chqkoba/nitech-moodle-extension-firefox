import $ from 'jQuery';
import optionsUtils from 'Options/optionsUtils.js';

(async function onPageLoad() {
  console.log('onPageLoad');

  const options = await optionsUtils.getOptions();
  console.log(options);
  generatePage(options);
})(); // PageLoad時に実行する。

function generatePage(options) {
  applyPageFromOptions(options);

  console.log('generatePage: options: ', options);

  // saveボタン
  $('#btnSave').on('click', () => {
    applyOptionsFromPage(options);
    optionsUtils.saveOptions(options);
  });

  // loadDefaultボタン
  $('#btnLoadDefault').on('click', async () => {
    const defaultOptions = await optionsUtils.getDefaultOptions();
    applyPageFromOptions(defaultOptions);
  });

  // loadCurrentボタン
  $('#btnLoadCurrent').on('click', async () => {
    const options = await optionsUtils.getOptions();
    applyPageFromOptions(options);
  });
}

/**
 * optionsの要素に、optionsページの要素の値を代入します。
 * see: applyPageFromOptions, 類似関数にapplyPageFromOptionsがあることに注意してください。
 * @param {array} options
 * @return {array} page内容が代入されたoptions
 */
function applyOptionsFromPage(options) {
  console.log('applyOptionsFromPage: ', options);
  options.backgroundColor = $('#backgroundColor').val();
  options.hideNavOnVideo = $('#hideNavOnVideo').prop('checked');
  options.timeTableMode = $('#timeTableMode').val();
  options.timeTableCompleteMode = $('#timeTableCompleteMode').val();
  options.extentionEnable = $('#extentionEnable').prop('checked');
  options.topPageEnable = $('#topPageEnable').prop('checked');
  options.topPageHeaderVisible = $('#topPageHeaderVisible').prop('checked');
  return options;
}

/**
 * optionsページに、引数のoptionsの要素の値を適用します。
 * see: applyOptionsFromPage, 類似関数にapplyOptionsFromPageがあることに注意してください。
 * @param {array} options
 */
function applyPageFromOptions(options) {
  console.log('applyPageFromOptions: ', options);
  // ページに設定を反映
  $('#backgroundColor').val(options.backgroundColor);
  $('#hideNavOnVideo').prop('checked', options.hideNavOnVideo);
  $('#timeTableMode').val(options.timeTableMode);
  $('#timeTableCompleteMode').val(options.timeTableCompleteMode);
  $('#extentionEnable').prop('checked', options.extentionEnable);
  $('#topPageEnable').prop('checked', options.topPageEnable);
  $('#topPageHeaderVisible').prop('checked', options.topPageHeaderVisible);
  $('#optionsVersion').text('options version: ' + options.optionsVersion);
}
