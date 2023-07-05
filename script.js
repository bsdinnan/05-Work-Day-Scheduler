$(document).ready(function() {
  $(function () {
    var currentHour = dayjs().hour()

    $('.saveBtn').on('click', function() {
      var timeBlockId = $(this).closest('.time-block').attr('id');
      var description = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, description);
    });

    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var hour = parseInt(timeBlockId.split('-')[1]);
      var currentHour = dayjs().hour();

      if (hour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (hour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
  
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var description = localStorage.getItem(timeBlockId);
      if (description) {
        $(this).find('.description').val(description);
      }
    });
    
    $("#currentDay").text(dayjs().format("dddd, MMMM D"))
  });
});
