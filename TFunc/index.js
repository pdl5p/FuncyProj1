var _ = require("lodash");

module.exports = function (context, myTimer) {
    var timeStamp = new Date().toISOString();

    if(myTimer.isPastDue)
    {
        context.log('JavaScript is running late!');
    }
    context.log('?? JavaScript timer trigger function ran!', timeStamp);

    var a = _.concat([1,2,3], [4,5,6]);

    context.log(a.join("-"));

    context.done();
};