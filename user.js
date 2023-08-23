$.ajax({
    url: '/some_server_side_script',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({
        username: $('username').val(),
        password: $('password').val(),
    }),
    success: function(result) {
        alert('success');
    }
});