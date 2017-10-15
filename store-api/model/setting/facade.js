const Facade = require('../../lib/facade');
const settingSchema = require('./schema');

class SettingFacade extends Facade {}

module.exports = new SettingFacade(settingSchema);
