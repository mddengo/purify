$('#search').bind('keyup', function(e) {
    var query = $(this).val();
    if (query != '') {
        console.log(query);
        doSearch(query);
    }
    else {
        $('pre').html('');
    }
});

function getTitle(track) {
    return track.title;
}

function doSearch(query) {
    SC.get('/tracks', {
        q: query
    }).then(function(tracks) {
        trackTitles = tracks.map(getTitle);
        console.log(trackTitles);
        // display resulsts in html
        trackTitles = (trackTitles).join([separator='\n']);
        $('pre').html(trackTitles);
    });
}
 
