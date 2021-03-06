/**
 * Created by Shang, Erxin (Edwin) on 10/6/2016.
 */
let {FactoryBase}            = require("../infrastructures/factoryBase");
let {container}              = require("../libs/container");
let {MessageServiceBase}     = require("../infrastructures/services/messageServiceBase");
let {PersistenceServiceBase} = require("../infrastructures/services/persistenceServiceBase");
let {ActionTargetService}    = require("../services/ActionTargetService");
let {ConfigService}          = require("../services/configService");

let _serviceFactory;

class ServiceFactory extends FactoryBase {
    constructor() {
        super();
    }

    get type() {
        return ServiceFactory.name;
    }

    static get instance() {
        if (!_serviceFactory) {
            _serviceFactory = new ServiceFactory();
        }
        return _serviceFactory;
    }

    getMessageService() {
        return container.resolve(MessageServiceBase);
    }

    getStorageService() {
        return container.resolve(PersistenceServiceBase);
    }

    getTestObjectService() {
        return container.resolve(ActionTargetService);
    }

    getConfigService() {
        return container.resolve(ConfigService);
    }
}

exports.ServiceFactory = ServiceFactory;
