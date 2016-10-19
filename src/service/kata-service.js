export class KataService {


    getKatas() {
        return [
            {
                name: "first",
                description: "Hello WOrld Kata",
                code: "console.writeline('')"
            },
             {
                name: "second",
                description: "Hello WOrld Kata 2",
                code: "console.writeline('2')"
            }
        ];
   }
}