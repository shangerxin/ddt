/**
 * Created by erxin on 1/7/2017.
 */
let {FactoryBase}        = require("../infrastructures/factoryBase");
let {container}          = require("../libs/container");

let _parserFactory;

class ParserFactory extends FactoryBase{
    constructor(){
        super();
    }

    get type(){
        return ParserFactory.name;
    }

    static get instance(){
        if(!_parserFactory){
            _parserFactory = new ParserFactory();
        }
        return _parserFactory;
    }
}

exports.ParserFactory = ParserFactory;