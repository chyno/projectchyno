export class KataService {


    getKatas() {
        return [
            {
                name: "first",
                description: "Sampple Java script",
                code: "function findSequence(goal) { \n function find(start, history) { \n if (start == goal) \n return history; \n else if (start > goal) \n return null; \n else \n return find(start + 5, ( + history +  + 5)) || \n find(start * 3, ( + history +  * 3)); \n } \n  return find(1, 1); \n } \n "
            },
             {
                name: "second",
                description: "Just write to console",
                code: "console.writeline('2')"
            }
        ];
   }
}