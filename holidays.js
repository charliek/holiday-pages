$(function() {
    redirectToHolidayPage();
});

var thisYear = (new Date()).getFullYear();

// You need to have at least one day between from and to. if from == to, then the effective length is 0 days. 
// also the pages are processed in order from first to last, so if you want a single day to be an exception 
// then just put it after the range that includes it. for example, if you want a special message to display on christmas day
// then you can have december from 12.1 to 12.30 and a christmas page from 12.25 to 12.26
var pages = [
    { page: 'thanksgiving'
        , from: [thisYear, 11, 20],     to: [thisYear, 11, 28] },
    { page: 'december'
        , from: [thisYear, 12, 1],      to: [thisYear, 12, 26] },
    { page: 'coderetreat'
        , from: [thisYear, 12, 8],      to: [thisYear, 12, 9] },
    { page: 'teotwawki'
        , from: [thisYear, 12, 21],      to: [thisYear, 12, 22] },
    { page: 'december'
        , from: [thisYear, 12, 27],     to: [(thisYear + 1), 1, 1] }
];

function redirectToHolidayPage() {
    var today = new Date();
    // console.log("Today is: " + today);
    var page = getPageForDate(today);
    if (page != '') {
        redirectToPage(page);
    }
}

function getPageForDate(refDate) {
    var page = '';
    $.each(pages, function() {
        var fromDate = new Date(this.from[0], this.from[1] - 1, this.from[2]);
        var toDate   = new Date(this.to[0],   this.to[1] - 1,   this.to[2]);
        // console.log("Checking against: " + this.page);
        // console.log("            from: " + fromDate);
        // console.log("              to: " + toDate);
        if ( fromDate <= refDate && refDate <= toDate ) {
          // console.log("Setting page to" + this.page);
          page = this.page;
        }
    });
    return page;
}

function redirectToPage(page) {
    var currentPath = window.location.pathname;
    //console.log("Destination page: " + page);
    //console.log("current path: " + currentPath);
    var newPath = '';
    if (currentPath.match(/\/index\.html$/)) {
        newPath = currentPath.replace('/index.html', '/' + page + '/index.html');
    } else if (currentPath.match(/\/$/)) {
        newPath = currentPath + page + '/';
    } else {
        newPath = currentPath + '/' + page + '/';
    }
    //console.log('Redirect URL:' + newPath);

    window.location.replace(newPath);
}
