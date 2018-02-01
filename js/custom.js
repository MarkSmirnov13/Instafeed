$(document).ready(function() {

    var loadButton = document.getElementById('load-more');

    var userFeed = new Instafeed({
        get: 'user',
        userId: '303430004',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '303430004.1677ed0.fd312f80ace34e58b27522aae5c0130e',
        sortBy: 'most-recent',
        template: '<div class="col-lg-6 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" aline="left" alt="{{caption}}" class="img-fluid"/></a></div><div class="col-lg-5 textleft"><h5>{{caption}}</br>♡ Количество лайков: {{likes}}</br>Дата создания: {{model.created_time}}</h5></div>',
        filter: function(image) {
            var date = new Date(image.created_time * 1000);
            var months = ['Января', 'Февраля', 'Марта', 'Апреля','Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
            month = date.getMonth();
            day = date.getDate();
            year = date.getFullYear();
            var time = day + ' ' + months[month] + ' ' + year;
            image.created_time = time;
            return image.type === 'image';
        },
        after: function() {
            if (!this.hasNext()) {
                loadButton.setAttribute('disabled', 'disabled');
            }
        },
    });


    loadButton.addEventListener('click', function() {
        userFeed.next();
    });

    userFeed.run();


});