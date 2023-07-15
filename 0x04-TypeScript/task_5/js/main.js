"use strict";
// Task 11: Brand convention & Nominal typing
exports.__esModule = true;
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
function sumMajorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    return { credits: subject1.credits + subject2.credits };
}
exports.sumMinorCredits = sumMinorCredits;
