const Controller = require('../../lib/controller');
const settingFacade = require('./facade');

class SettingController extends Controller {}

module.exports = new SettingController(settingFacade);
