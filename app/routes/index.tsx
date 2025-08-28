import BeforeAfter from "~/components/beforeAfter";
import EventDetails from "~/components/eventDetails";
import Invitation from "~/components/invitation";
import Rsvp from "~/components/rsvp";
import MainPage from "~/components/mainPage";
import BibleVerse from "~/components/bibleVerse";

export default function Index() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      {/* Header Section */}
      <MainPage />
      {/* Bible Verse Section */}
      <BibleVerse />
      {/* Photo Section */}
      <Invitation />
      {/* 50 Years Journey Section */}
      <BeforeAfter />
      {/* Event Details */}
      <EventDetails />
      {/* RSVP Section */}
      <Rsvp />
    </div>
  )
}
