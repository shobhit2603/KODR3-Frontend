export default function NoteCard({ notes }) {
  return (
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
  );
}
