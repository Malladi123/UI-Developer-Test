import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  objKeys = []

  constructor (){
    console.log(this.getCharactersCountObject(["hello world", "hello world"]));
    console.log(this.getKeys({  a: 5, b: { c: { d: 10 } }} ));
  }

  getCharactersCountObject (strArr:string []){
    let obj = {};
    strArr.map(str => {
      str.split('').map(ch =>{
        if(ch == " ") ch = "''";
        if(obj[ch])
          obj[ch] ++;
        else
          obj[ch] = 1;  
      })
    })
    return obj;
  }

  getKeys(obj:object) {
    Object.keys(obj).map(k => {
      if(typeof obj[k] === 'object' && obj[k] !== null){
        this.objKeys = [this.objKeys,...this.getKeys(obj[k])]
        console.log(this.objKeys);
      }
        
    })
    return Object.keys(obj);
  }

  
  
}
