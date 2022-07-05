//function to get the current date
function getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}
//function to get the current time
function getCurrentTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    today = h + ":" + m + ":" + s;
    return today;
}

//unit test for getCurrentDate
describe('getCurrentDate', function () {
    it('should return the current date', function () {
        expect(getCurrentDate()).toEqual(jasmine.any(String));
    });
});

//unit test for coPilotpractice.js
describe('coPilotpractice.js', function () {
    it('should return the current time', function () {
        expect(getCurrentTime()).toEqual(jasmine.any(String));
    });
}
);
