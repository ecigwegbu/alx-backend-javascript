/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
// Task 5: Advanced types Part 1
class Director {
    constructor() {
        // code here
    }
    workFromHome() {
        return "Working from Home";
    }
    getToWork() {
        return "Getting a coffee break";
    }
    getCoffeeBreak() {
        return "Getting a coffee break";
    }
    workDirectorTasks() {
        return "Getting to directory tasks";
    }
    toString() {
        return `${this.constructor.name}`;
    }
}
class Teacher {
    constructor() {
        // code here
    }
    workFromHome() {
        return "Cannot work from home";
    }
    getCoffeeBreak() {
        return "Cannot have a break";
    }
    workTeacherTasks() {
        return "Getting to work";
    }
    toString() {
        return `${this.constructor.name}`;
    }
}
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500) {
        return new Teacher().toString();
    }
    else {
        return new Director().toString();
    }
}
// test task 5
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee('$500')); // Director

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsZ0NBQWdDO0FBY2hDLE1BQU0sUUFBUTtJQUNaO1FBQ0UsWUFBWTtJQUNkLENBQUM7SUFDRCxZQUFZO1FBQ1YsT0FBTyxtQkFBbUIsQ0FBQztJQUM3QixDQUFDO0lBQ0QsU0FBUztRQUNQLE9BQU8sd0JBQXdCLENBQUM7SUFDbEMsQ0FBQztJQUNELGNBQWM7UUFDWixPQUFPLHdCQUF3QixDQUFDO0lBQ2xDLENBQUM7SUFDRCxpQkFBaUI7UUFDZixPQUFPLDRCQUE0QixDQUFDO0lBQ3RDLENBQUM7SUFDRCxRQUFRO1FBQ04sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxPQUFPO0lBQ1g7UUFDRSxZQUFZO0lBQ2QsQ0FBQztJQUNELFlBQVk7UUFDVixPQUFPLHVCQUF1QixDQUFDO0lBQ2pDLENBQUM7SUFDRCxjQUFjO1FBQ1osT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBQ0QsZ0JBQWdCO1FBQ2QsT0FBTyxpQkFBaUIsQ0FBQztJQUMzQixDQUFDO0lBQ0QsUUFBUTtRQUNOLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQUVELFNBQVMsY0FBYyxDQUFDLE1BQXVCO0lBQzdDLElBQUksT0FBTyxNQUFNLEtBQUssUUFBUSxJQUFJLE1BQU0sR0FBRyxHQUFHLEVBQUU7UUFDOUMsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQ2pDO1NBQU07UUFDTCxPQUFPLElBQUksUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDbEM7QUFDSCxDQUFDO0FBRUQsY0FBYztBQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRSxVQUFVO0FBQzdDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBRSxXQUFXO0FBQy9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRhc2sgNTogQWR2YW5jZWQgdHlwZXMgUGFydCAxXG5cbmludGVyZmFjZSBEaXJlY3RvckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcbiAgd29ya0RpcmVjdG9yVGFza3MoKTogc3RyaW5nLFxufVxuXG5pbnRlcmZhY2UgVGVhY2hlckludGVyZmFjZSB7XG4gIHdvcmtGcm9tSG9tZSgpOiBzdHJpbmcsXG4gIGdldENvZmZlZUJyZWFrKCk6IHN0cmluZyxcbiAgd29ya1RlYWNoZXJUYXNrcygpOiBzdHJpbmcsXG59XG5cbmNsYXNzIERpcmVjdG9yIGltcGxlbWVudHMgRGlyZWN0b3JJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBjb2RlIGhlcmVcbiAgfVxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJXb3JraW5nIGZyb20gSG9tZVwiO1xuICB9XG4gIGdldFRvV29yaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgYSBjb2ZmZWUgYnJlYWtcIjtcbiAgfVxuICB3b3JrRGlyZWN0b3JUYXNrcygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkdldHRpbmcgdG8gZGlyZWN0b3J5IHRhc2tzXCI7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWA7XG4gIH1cbn1cdFxuY2xhc3MgVGVhY2hlciBpbXBsZW1lbnRzIFRlYWNoZXJJbnRlcmZhY2Uge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICAvLyBjb2RlIGhlcmVcbiAgfVxuICB3b3JrRnJvbUhvbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCJDYW5ub3Qgd29yayBmcm9tIGhvbWVcIjtcbiAgfVxuICBnZXRDb2ZmZWVCcmVhaygpOiBzdHJpbmcge1xuICAgIHJldHVybiBcIkNhbm5vdCBoYXZlIGEgYnJlYWtcIjtcbiAgfVxuICB3b3JrVGVhY2hlclRhc2tzKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiR2V0dGluZyB0byB3b3JrXCI7XG4gIH1cbiAgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfWA7XG4gIH1cbn1cdFxuXG5mdW5jdGlvbiBjcmVhdGVFbXBsb3llZShzYWxhcnk6IG51bWJlciB8IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmICh0eXBlb2Ygc2FsYXJ5ID09PSAnbnVtYmVyJyAmJiBzYWxhcnkgPCA1MDApIHtcbiAgICByZXR1cm4gbmV3IFRlYWNoZXIoKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgRGlyZWN0b3IoKS50b1N0cmluZygpO1xuICB9XG59XG5cbi8vIHRlc3QgdGFzayA1XG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgyMDApKTsgIC8vIFRlYWNoZXJcbmNvbnNvbGUubG9nKGNyZWF0ZUVtcGxveWVlKDEwMDApKTsgIC8vIERpcmVjdG9yXG5jb25zb2xlLmxvZyhjcmVhdGVFbXBsb3llZSgnJDUwMCcpKTsgIC8vIERpcmVjdG9yXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=