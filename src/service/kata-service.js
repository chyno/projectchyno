export class KataService {


    getKatas() {
        return [
            {
                name: "first Javascript kata ",
                description: "Sampple Java script. The strings were taken out and need to be placed back into the application",
                code: "function findSequence(goal) { \n function find(start, history) { \n if (start == goal) \n return history; \n else if (start > goal) \n return null; \n else \n return find(start + 5, ( + history +  + 5)) || \n find(start * 3, ( + history +  * 3)); \n } \n  return find(1, 1); \n } \n "
            },
             {
                name: "second",
                description: "Just write to console. This is the most basic example you need to write the code from scratch",
                code: "console.writeline('2')"
            }
        ];
   }
}