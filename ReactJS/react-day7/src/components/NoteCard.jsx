import { RiDeleteBinLine } from "@remixicon/react";

export default function NoteCard({ notes, onDelete }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {notes.map((note, index) => (
        <div
          key={index}
          className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow group relative bg-white"
        >
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-medium truncate flex-1 pr-2">
              {note.title}
            </h3>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(index);
              }}
              className="text-gray-400 cursor-pointer hover:text-red-500 transition-colors p-1 rounded-full hover:bg-red-50"
              aria-label="Delete note"
            >
              <RiDeleteBinLine size={18} />
            </button>
          </div>
          <p className="text-gray-600 truncate h-6">{note.description}</p>
        </div>
      ))}
    </div>
  );
}
