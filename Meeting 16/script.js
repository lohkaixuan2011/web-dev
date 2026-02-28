var genres = ["Jazz", "Pop", "Rock", "Dangdut"]

//for loop
for(i = 0; i<genres.length; i++) {
    document.write("I choose " + genres[i] + "<br>");
}

//for each
genres.forEach(function(genre) {
    document.write("I choose" + genre + "<br>");
})