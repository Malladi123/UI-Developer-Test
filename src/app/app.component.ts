import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  objKeys = []

  constructor() {
    console.log(this.getCharactersCountObject(["hello world", "hello world"]));
    console.log(this.getKeys({ a: 5, b: { c: { d: 10, t: 21 }, k: 43 } }));
    console.log(this.reverseWordofStr("hello world"));
    console.log(this.reverseString('hello world'));
    console.log(this.removeDuplicateStrings(['test', 'hello', 'test', 'world']))
  }

  getCharactersCountObject(strArr: string[]) {
    let obj = {};
    strArr.map(str => {
      str.split('').map(ch => {
        if (ch == " ") ch = "''";
        if (obj[ch])
          obj[ch]++;
        else
          obj[ch] = 1;
      })
    })
    return obj;
  }

  getKeys(obj: object) {
    Object.keys(obj).map(k => {
      if (typeof obj[k] === 'object' && obj[k] !== null) {
        this.objKeys = [...this.getKeys(obj[k])]
      }
    })
    return [...Object.keys(obj), ...this.objKeys];
  }

  reverseWordofStr(str: string) {
    //using split
    return str.split(" ").map(word => word.split('').reverse().join('')).join(" ");
  }

  reverseString(str) {
    // without using split and reverse
    var arrWords = []
    var strWord = "";
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == " " || i == str.length - 1) {
        if (i == str.length - 1) {
          strWord = str.charAt(i) + strWord;
        }
        arrWords.push(strWord);
        strWord = "";
      } else {
        strWord = str.charAt(i) + strWord;
      }
    }
    return arrWords.join(" ");
  }
  removeDuplicateStrings(strArr: string[]) {
    // removing of duplicates 
    var obj = {};
    return strArr.filter(str => {
      if (!obj[str]) {
        obj[str] = true;
        return str;
      }
    });
  }
}
