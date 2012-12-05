$(function() {
    redirectToHolidayPage();
});

var thisYear = (new Date()).getFullYear();

var pages = [
    { page: 'thanksgiving'
        , from: [thisYear, 11, 20],     to: [thisYear, 11, 28] },
    { page: 'december'
        , from: [thisYear, 12, 1],      to: [thisYear, 12, 26] },
    { page: 'new-years'
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
    } else if (curentPath.match(/\/$/)) {
        newPath = currentPath + page + '/';
    } else {
        newPath = currentPath + '/' + page + '/';
    }
    //console.log('Redirect URL:' + newPath);

    window.location.replace(newPath);
}
