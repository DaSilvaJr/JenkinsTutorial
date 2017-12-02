var supertest = require("supertest");
var should = require("should");

var server = supertest.agent("http://localhost:4000");

describe("SAMPLE unit test",function(){

  it("should return home page",function(done){
    server
    .get("/")
    .expect("Content-type",/text/)
    .expect(200) // THis is HTTP response
    .end(function(err,res){
      // HTTP status should be 200
      res.status.should.equal(200);
    });
     done();
  });

});