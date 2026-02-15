import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NoteForm from "./components/NoteForm";
import NoteCard from "./components/NoteCard";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [notes, setNotes] = useState(() => {
    // 1. Initial State from Local Storage
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // 2. Sync to Local Storage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAddNote = () => {
    setIsFormOpen(true);
  };

  const handleSaveNote = (note) => {
    setNotes([...notes, note]);
    setIsFormOpen(false);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <main className="h-screen w-screen overflow-hidden flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar onAddNote={handleAddNote} notes={notes} />
        <div className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-medium mb-6">Welcome to My Notes</h1>
          <NoteCard notes={notes} />
        </div>
      </div>
      {isFormOpen && (
        <NoteForm onSave={handleSaveNote} onClose={handleCloseForm} />
      )}
    </main>
  );
}
