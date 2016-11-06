/**
 * Created by shange on 10/6/2016.
 */
let {FactoryBase} = require("../infrastructures/factoryBase");
let {container} = require("../libs/container");
let {MessageServiceBase} = require("../infrastructures/services/messageServiceBase");
let {StorageServiceBase} = require("../infrastructures/services/storageServiceBase");
let {TestObjectService} = require("../infrastructures/services/testObjectService");
let {ConfigService} = require("../infrastructures/services/configService");

let _serviceFactory;

class ServiceFactory extends FactoryBase{
    constructor(){
        super();
    }

    static instance(){
       if(!_serviceFactory){
           _serviceFactory = new ServiceFactory();
       }
       return _serviceFactory;
    }

    getMessageService(){
        return container.getInstance(MessageServiceBase);
    }

    getStorageService(){
        return container.getInstance(StorageServiceBase);
    }

    getTestObjectService(){
        return container.getInstance(TestObjectService);
    }

    getConfigService(){
        return container.getInstance(ConfigService);
    }
}

exports.ServiceFactory = ServiceFactory;