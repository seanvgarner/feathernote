@notes.each do |note|
  json.set! note.id do
    json.partial! 'api/notes/note.json.jbuilder', note: note
  end
end
