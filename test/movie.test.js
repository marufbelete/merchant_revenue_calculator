const chaiHttp =require("chai-http")
const chai =require("chai")
chai.use(chaiHttp)
chai.should();
chai.expect;
const server=require('../src/app')
const testMovie = {
    title: "Kill All",
    slug: "slug",
    duration:"12",
    release_date:"7/20/2022",
    thumbnail:"check",
    status:"released",
    like:"100",
    dislike:"20",
    views:"2000"
  };
  
//   let tempToken;

describe("POST movies", () => {
    it("should add new movie", (done) => {
      chai.request(server)
        .post("/createmovie")
        .send(testMovie)
        .end((err,res)=>{
            res.should.have.status(201)
            res.body.should.be.a("object")
            // res.body.should.be.eql("maruf") or not.be.eql
            // res.body.age.should.satisfy(function(num) { return num > 0; })
            //res.body.message.should.have.lengthOf.within(2,4)//string or array
            //res.body.message.should.be.undefined or.not.be.undefined
            //res.body.message.should.be.true or .not.be.true or false
            //res.body.message.should.have.string('bar')
            //res.body.should.have.property('foo',value(optional));
            //for nested object
            //res.body.should.have.deep.property('foo.age',value(optional));
            //res.body.should.have.deep.property('foo.age',value(optional)).that.is.a('string');
            // res.body.name.should.have.ownProperty('length');
            //res.body.name.should.be.null or .not.be.null
            //res.body.name.should.be.at.most(5);
            //res.body.name.should.have.lengthOf.at.most(5);
            //res.body.arr.should.include.members([3, 2]); or not.include
            //res.body.string.should.match(/^foo/)
            //res.body.arr.should.have.lengthOf(3);
            //res.body.string.should.have.length(6);
            //res.body.num.shoul.dbe.at.least(10)
            //res.body.string.should.contain('foo');
            //res.body.string.should.exist or not.exist;
            //res.body.string/arr/obj.should.be.empety 
            //res.body.num.should.be.below(num) or above



         done()
        })
    });
  });

  describe("GET Movies",()=>{
    it("should return all movies", (done) => {
        chai.request(server)
          .get("/getmovie")
          .end((err,res)=>{
              res.body.should.be.a('array')
              // res.body.should.be.be('')
              done()
          })
      });
  
  })