const fs = require(`fs`);
const path = require(`path`);

const dataPath = require(`../util/productPath`);

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save(){
        fs.readFile(dataPath.p, (err, fileContent) => {
            let products = [];
            if(!err) {
                if(fileContent.length !== 0){
                    products = JSON.parse(fileContent);
                } else {
                    products = [];
                }
            }
            products.push(this);
            fs.writeFile(dataPath.p, JSON.stringify(products), (err) => {
                if(err != null){console.log(err);}
            });
        });
    };

    static fetchAll(cb) {
        fs.readFile(dataPath.p, (err, fileContent) =>{
            if(err){
                console.log(`${err}: inside of fetch`);
                return cb([]);
            }
            if(fileContent.length !== 0) {
                return cb(JSON.parse(fileContent));
                }
            return cb([]);
        });
    }
}