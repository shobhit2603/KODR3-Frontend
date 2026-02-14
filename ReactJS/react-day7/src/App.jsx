import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import NoteForm from "./components/NoteForm";

export default function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [notes, setNotes] = useState([]);

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-medium mb-2">{note.title}</h3>
                <p className="text-gray-600 truncate">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {isFormOpen && (
        <NoteForm onSave={handleSaveNote} onClose={handleCloseForm} />
      )}
    </main>
  );
}