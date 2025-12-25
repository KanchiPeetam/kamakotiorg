// FullCalendar.js Initialization for Events Page
document.addEventListener('DOMContentLoaded', function() {
  const calendarEl = document.getElementById('calendar');

  if (calendarEl) {
    // Get events data from JSON script tag
    const eventsDataEl = document.getElementById('events-data');
    let eventsData = [];

    if (eventsDataEl) {
      try {
        eventsData = JSON.parse(eventsDataEl.textContent);
      } catch (e) {
        console.error('Error parsing events data:', e);
      }
    }

    // Initialize FullCalendar
    const calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,dayGridWeek'
      },
      events: eventsData,
      eventClick: function(info) {
        info.jsEvent.preventDefault();
        if (info.event.url) {
          window.location.href = info.event.url;
        }
      },
      eventDisplay: 'block',
      displayEventTime: false,
      height: 'auto',
      // Styling
      themeSystem: 'standard',
      eventColor: '#d97706',
      eventBackgroundColor: '#d97706',
      eventBorderColor: '#b45309',
      // Interaction
      navLinks: false,
      editable: false,
      selectable: false,
      // Text
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week'
      }
    });

    calendar.render();
  }
});
