// Ensures javascript does not execute until HTML elements finish loading
$(document).ready(function() {
  $(function () {
    // Save button click event handler
    $('.saveBtn').on('click', function() {
      var timeBlockId = $(this).closest('.time-block').attr('id');
      var description = $(this).siblings('.description').val();
      localStorage.setItem(timeBlockId, description);
    });
    // Apply appropriate styling to time blocks based on current hour
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var hour = parseInt(timeBlockId.split('-')[1]);
      var currentHour = dayjs().hour();
      // Compare the hour of the time block with the current hour
      if (hour < currentHour) {
        $(this).removeClass('present future').addClass('past');
      } else if (hour === currentHour) {
        $(this).removeClass('past future').addClass('present');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    });
    // Retrieve and set saved descriptions from localStorage
    $('.time-block').each(function() {
      var timeBlockId = $(this).attr('id');
      var description = localStorage.getItem(timeBlockId);
      if (description) {
        $(this).find('.description').val(description);
      }
    });
    // Display the current date in the header
    $("#currentDay").text(dayjs().format("dddd, MMMM D"))
  });
});
