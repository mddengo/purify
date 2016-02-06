/* Given a track, find similar tracks in the users likes */
function findSimilarTracks(track) {
    // get information about the chosen track


    // search through likes with the genre, and bpm > 120
    SC.get('/me/favorites', {
        genres: 'punk', bpm: { from: 120 }
    }).then(function(tracks) {
        console.log(tracks);
}

/* Turn a list of tracks into a playlist called name */
function makePlaylist(tracks, name) {
    SC.connect().then(function() {
        SC.post('/playlists', {
            playlist: { title: name, tracks: tracks }
        });
    });
}
