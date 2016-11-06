/**
 * Created by shange on 10/6/2016.
 */
var {sourcePath, expect} = require("../../fixtures/global");
require(`${sourcePath}/global/extends/extendArray`);

describe("test extending built-in Array", ()=>{
   it("test Array.deleteByValue method", ()=>{
       let a = [1,2,3];
       a.deleteByValue(2);
       expect(a).to.eql([1,3]);
   });
});
