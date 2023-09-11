var MyClass = require("../src/myclass.js");
var sinon = require("sinon");
var myObj = new MyClass();
var chai = require("chai");
var expect = chai.expect;
const chaiaspromise = require("chai-as-promised");
chai.use(chaiaspromise);
const nock = require("nock");

describe.skip("Test suit", function () {
  it("Test the add method", function () {
    expect(myObj.add(1, 2)).to.be.equal(3);
  });

  it("spy the add method", function () {
    var spy = sinon.spy(myObj, "add");
    var arg1 = 10,
      arg2 = 20;
    myObj.callAnotherFn(arg1, arg2);
    // sinon.assert.calledOnce(spy);
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(arg1, arg2)).to.be.true;
  });
  it("spy the callback method", function () {
    var callback = sinon.spy();
    myObj.callTheCallback(callback);
    expect(callback.calledOnce).to.be.true;
  });

  it("mock the sayhello method", function () {
    var mock = sinon.mock(myObj);
    var expectation = mock.expects("sayHello");
    expectation.exactly(1);
    expectation.withArgs("hello world");
    myObj.callAnotherFn(10, 20);
    mock.verify();
  });
});

describe.skip("Test suit for stub", function () {
  it("stub the add method", function () {
    var stub = sinon.stub(myObj, "add");
    stub
      .withArgs(10, 20)
      .onFirstCall()
      .returns(100)
      .onSecondCall()
      .returns(200);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(100);
    expect(myObj.callAnotherFn(10, 20)).to.be.equal(200);
  });
});

describe.skip("Test suit promise", function () {
  it("Promise test case", function (done) {
    this.timeout(0);
    myObj.testPromise().then(function (result) {
      expect(result).to.be.equal(6);
      expect(false).to.be.false;
      done();
    });
  });
});

// describe("Test suit promise", function () {
//   it("Promise test case", function (done) {
//     this.timeout(0);
//     //   myObj.testPromise().then(function (result) {
//     //     expect(result).to.be.equal(6);
//     //     expect(false).to.be.false;
//     //     done();
//     //   });
//     return expect(myObj.testPromise()).to.eventually.equal(62);
//   });
// });
describe("XHR test suit", function(){
    it("Mock and stub xhr call", function(done){
        this.timeout(0);
        myObj.xhrFn().then(function(result){
            console.log(result);
            done();
        })
    })
})