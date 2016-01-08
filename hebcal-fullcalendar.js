$(document).ready(function() {
    $("#calendar").fullCalendar({
        header: {
            left: "prev,next today",
            center: "title",
            right: "month,agendaWeek,agendaDay"
        },
        editable: false,
        fixedWeekCount: false,
        timezone: false,
        events: {
            url: "https://www.hebcal.com/hebcal/?cfg=fc&v=1&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&o=on&F=on&s=on&i=off&month=x&yt=G&lg=sh&d=on&c=on&geo=geoname&geonameid=2925533&b=30&m=60",
            cache: true
        }
    });
    $("body").keydown(function(e) {
        if (e.keyCode == 37) {
            $('#calendar').fullCalendar('prev');
        } else if (e.keyCode == 39) {
            $('#calendar').fullCalendar('next');
        }
    });
});

//https://www.hebcal.com/hebcal/?cfg=fc&v=1&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&o=on&F=on&s=on&i=off&month=x&yt=G&lg=sh&d=on&c=on&geo=geoname&geonameid=2925533&b=30&m=60

//https://www.hebcal.com/hebcal/?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=s&s=on