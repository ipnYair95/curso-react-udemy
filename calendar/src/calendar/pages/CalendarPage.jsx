import { CalendarEvent, Navbar, CalendarModal, Fab, FabDelete } from "../components"
import { Calendar } from 'react-big-calendar'
import { getMessages, localizer } from "../../helpers"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useState } from "react"
import { useCalendarStore, useUiStore } from "../../hooks"



export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week');

  const { events, setActiveEvent } = useCalendarStore();

  const { openDateModal } = useUiStore();

  const eventStylesGetter = () => {

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
    };

    return {
      style
    }

  }

  const onDoubleClick = () => {    
    openDateModal();
  }

  const onSelect = (event) => {    
    setActiveEvent(event);
  }

  const onViewChanges = (event) => {
    localStorage.setItem('lastView', event);
  }

  return (
    <>

      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100dvh - 80px )' }}
        culture="es"
        messages={getMessages()}
        eventPropGetter={eventStylesGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanges}
      />

      <CalendarModal />

      <Fab />

      <FabDelete />

    </>
  )
}
