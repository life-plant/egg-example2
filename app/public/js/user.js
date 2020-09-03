$('#JLoginSubmit').on('submit', function(e) {
    e.preventDefault();
    postForm();
})

function postForm() {
    var csrftoken = Cookies.get('csrfToken');
    function csrfSafeMethod(method) {
        // these HTTP methods do not require CSRF protection
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
    let data = $('#JLoginSubmit').serialize();
    console.log(data);
    $.ajaxSetup({
        type: "post",
        url: $('#JLoginSubmit').attr('action'),
        data: data,
        beforeSend: function(xhr, settings) {
            if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
              xhr.setRequestHeader('x-csrf-token', csrftoken);
            }
        },
    })
    $.ajax();
}