function ajaxCall() {
    $.ajax({
        url: 'https://wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=' +
            $('#search').val(),
        dataType: 'jsonp',
        type: 'GET',
        success: function (data) {
            $('#update').empty();
            var result = '';
            data.query.search.forEach(function (data) {
                var title = '<h2>' + data.title + '</h2>' + '<br>';
                var snippet = '<p>' + data.snippet + '</p>';
                var url = '<a href = "https://en.wikipedia.org/wiki/' + data.title + '" "target=_blank">';
                var endUrl = '</a>';
                result += url + title + endUrl + snippet + "<hr>";
            });
            $('#update').append(result);
        }
    });
}

function randomFunction() {
    $('#update').empty();
    $('#serach').empty();
    $('iframe').attr('src', 'https://en.wikipedia.org/wiki/Special:Random');
}

$(document).ready(function () {
    $('#search').focus();
    $('#search').off('keyup');
    $('#search').on('keyup', function () {
        ajaxCall();
        $('iframe').attr('src', '');
    });
    $('.random').on('click', function () {
        randomFunction();
        $('.random').text('Show another random article');
    });
});