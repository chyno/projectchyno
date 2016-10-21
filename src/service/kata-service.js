import { inject } from "aurelia-framework";


//@inject(Gun)
export class KataService {

    constructor() {
        this.gun = Gun('katas');
        this.katas = [];  //gun.get('katas');
        this.setData();
        this.key = 'kata';
        this.path = 'path';

    }

    getKatasCallBack(fn) {
        gun.get(this.key).path(this.path).val(fn);
    }    
    
    getKatas() {


        return this.katas; // this.gun.put(this.key);
    }
    setData() {

       this.data

        this.katas.push( {
                name: "first Javascript kata ",
                description: "Sampple Java script. The strings were taken out and need to be placed back into the application",
                code: "function findSequence(goal) { \n function find(start, history) { \n if (start == goal) \n return history; \n else if (start > goal) \n return null; \n else \n return find(start + 5, ( + history +  + 5)) || \n find(start * 3, ( + history +  * 3)); \n } \n  return find(1, 1); \n } \n "
        });

        this.katas.push( {
                name: "second",
                description: "Just write to console. This is the most basic example you need to write the code from scratch",
                code: "console.writeline('2')"
            });

        alert(this.gun);

        this.gun.put('katas');
        this.gun.get(this.key).path(this.path).put({
                name: "first Javascript kata ",
                description: "Sampple Java script. The strings were taken out and need to be placed back into the application",
                code: "function findSequence(goal) { \n function find(start, history) { \n if (start == goal) \n return history; \n else if (start > goal) \n return null; \n else \n return find(start + 5, ( + history +  + 5)) || \n find(start * 3, ( + history +  * 3)); \n } \n  return find(1, 1); \n } \n "
        });

        this.gun.get(this.key).path(this.path).put({
                name: "second",
                description: "Just write to console. This is the most basic example you need to write the code from scratch",
                code: "console.writeline('2')"
            });


/*
        this.gun.put(this.key, {
                name: "first Javascript kata ",
                description: "Sampple Java script. The strings were taken out and need to be placed back into the application",
                code: "function findSequence(goal) { \n function find(start, history) { \n if (start == goal) \n return history; \n else if (start > goal) \n return null; \n else \n return find(start + 5, ( + history +  + 5)) || \n find(start * 3, ( + history +  * 3)); \n } \n  return find(1, 1); \n } \n "
        });

        this.gun.set(this.key , {
                name: "second",
                description: "Just write to console. This is the most basic example you need to write the code from scratch",
                code: "console.writeline('2')"
            });

*/
    }


}