import { RiArrowRightSLine } from "@remixicon/react";

export default function Sidebar({ onAddNote, notes = [] }) {
  return (
    <aside className="border-r-2 border-neutral-300 w-64 h-full p-5 overflow-y-auto hidden md:block shrink-0">
      <div className="flex justify-between items-center mb-5">
        <h2 className="flex items-center">
          Your Notes <RiArrowRightSLine size={20} />
        </h2>
        <button
          onClick={onAddNote}
          className="bg-black text-white px-3 py-1 rounded-lg cursor-pointer hover:bg-neutral-800 transition-colors text-sm"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              key={index}
              className="p-3 bg-neutral-50 hover:bg-neutral-100 rounded-lg cursor-pointer border border-neutral-200 transition-colors"
            >
              <h3 className="font-medium truncate">{note.title}</h3>
              <p className="text-xs text-neutral-500 truncate">
                {note.description}
              </p>
            </div>
          ))
        ) : (
          <p className="text-neutral-500 text-sm italic text-center py-4">
            No notes yet. Click 'Add' to create a note!
          </p>
        )}
      </div>
    </aside>
  );
}
