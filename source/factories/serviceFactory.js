/**
 * Created by shange on 10/6/2016.
 */
let {FactoryBase}        = require("../infrastructures/factoryBase");
let {container}          = require("../libs/container");
let {MessageServiceBase} = require("../infrastructures/services/messageServiceBase");
let {StorageServiceBase} = require("../infrastructures/services/storageServiceBase");
let {TestObjectService}  = require("../services/testObjectService");
let {ConfigService}      = require("../services/configService");

let _serviceFactory;

class ServiceFactory extends FactoryBase {
    constructor() {
        super();
    }

    static instance() {
        if (!_serviceFactory) {
            _serviceFactory = new ServiceFactory();
        }
        return _serviceFactory;
    }

    getMessageService() {
        return container.resolve(MessageServiceBase);
    }

    getStorageService() {
        return container.resolve(StorageServiceBase);
    }

    getTestObjectService() {
        return container.resolve(TestObjectService);
    }

    getConfigService() {
        return container.resolve(ConfigService);
    }
}

exports.ServiceFactory = ServiceFactory;