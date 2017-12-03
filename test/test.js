var supertest = require("supertest");
var should = require("should");
var mysql = require("mysql");
var server = supertest.agent("http://localhost:4000");
var expect = require('chai').expect

var con = mysql.createConnection({
  host: 'localhost'
  user: 'root'
  password: 'ibnu',
  database: 'simac'
});
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

  it('Should succes connected', function(){
           expect(typeof(con)=='object').to.be.true;
        });
});
