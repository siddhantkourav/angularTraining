// Question 1
// let aa = (str1:string,str2:string)=>{
//     console.log(str1,str1.length)
//     console.log(str2,str2.length)
// }
// aa("siddhant","kourav")


// Question 2



// Question 3
// const isPalindrome = name1 => {
//   const midPoint = name1.length / 2;
//   for (let i = 0; i < midPoint && i < name1.length; i++) {
//     if (name1[i] != name1[name1.length - 1 - i]) {
//       console.log(" Not Palindrome");
//       return;
//     }
//   }
//   console.log("Palindrome");
// }
// isPalindrome("SIS");


//Question 4
class Item{
    itemid:number;
    itemname:string;
    itemprice:number;
    category:string;
    constructor(ItemId:number,ItemName:string,ItemPrice:number,Category:string){
        this.itemid=ItemId;
        this.itemname=ItemName;
        this.itemprice=ItemPrice;
        this.category=Category;
        console.log(this.itemid,this.itemname,this.itemprice,this.category);
    }
}

var a = new Item(1,"pen",120,"stationery");
console.log(a);