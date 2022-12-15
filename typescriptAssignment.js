// Question 1
// let aa = (str1:string,str2:string)=>{
//     console.log(str1,str1.length)
//     console.log(str2,str2.length)
// }
// aa("siddhant","kourav")
var Cone = /** @class */ (function () {
    function Cone(shapename) {
        this.shapeName = shapename;
    }
    Cone.prototype.printName = function () {
        console.log(this.shapeName + " Area");
    };
    return Cone;
}());
var Sphere = /** @class */ (function () {
    function Sphere(shapename) {
        this.shapeName = shapename;
    }
    Sphere.prototype.printName = function () {
        console.log(this.shapeName + " Area");
    };
    return Sphere;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(shapename) {
        this.shapeName = shapename;
    }
    Rectangle.prototype.printName = function () {
        console.log(this.shapeName + " Area");
    };
    return Rectangle;
}());
var con = new Cone("Cone");
var sph = new Sphere("Sphere");
var rec = new Rectangle("Rectangle");
con.printName();
sph.printName();
rec.printName();
