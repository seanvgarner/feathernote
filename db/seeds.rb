# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all


guest = User.create!(email: 'guest', password: 'password')
sean = User.create!(email: 'seangarner@gmail.com', password: '1234abcd')

notebook1 = Notebook.create!(title: "TODOS", author_id: guest.id)
notebook2 = Notebook.create!(title: "Class Related", author_id: guest.id)
notebook3 = Notebook.create!(title: "Memories", author_id: guest.id)
notebook4 = Notebook.create!(title: "Facts!", author_id: guest.id)
notebook5 = Notebook.create!(title: "Words of Wisdom", author_id: guest.id)

note1 = Note.create!(
  title: 'Welcome to Feathernote!',
  body: "<p>Remembering everything is hard. Feathernote was designed so you don't have to. This awesome note-taking app lets you organize your notes into specific <strong>notebooks </strong>for easy browsing, <span style=\"background-color: rgb(255, 255, 255);\">rich-text editing so you can really </span><span style=\"background-color: rgb(255, 255, 102);\">highlight</span><span style=\"background-color: rgb(255, 255, 255);\"> what you want to </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(153, 51, 255);\"><em><u>stand out</u></em></strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">.</span></p><p><br></p><p><br></p><p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(102, 185, 102);\">Core Things To Play Around With:</strong></p><ul><li><span style=\"color: rgb(102, 185, 102);\">notes</span></li><li><span style=\"color: rgb(102, 185, 102);\">notebooks</span></li><li><span style=\"color: rgb(102, 185, 102);\">tags</span></li></ul><p><br></p><p><span style=\"color: rgb(0, 0, 0);\">Take a look around! Start by hitting the </span><span style=\"color: rgb(102, 185, 102);\">+ </span><span style=\"color: rgb(0, 0, 0);\">to add a New Note.</span></p>",
  author_id: guest.id,
  notebook_id: notebook5.id)

note2 = Note.create!(
  title: 'I NEED TO BE DONE',
  body: "<p>MORESEEEEDS BY TOMORROW!!!!! <span style=\"color: rgb(240, 102, 102);\">NEED </span>TO MAKE <u style=\"background-color: rgb(0, 71, 178);\">SURE IT IS WORKING!!!!!!!!</u></p>",
  author_id: guest.id,
  notebook_id: notebook1.id)

note3 = Note.create!(
  title: 'Things I learned this week...',
  body: "<p>Seeding is <span style=\"background-color: rgb(240, 102, 102);\">IMPORTANT.</span><span style=\"background-color: rgb(255, 255, 255);\"> </span></p><p><span style=\"background-color: rgb(255, 255, 255);\">Don't wait until the day before to tackle user avatars.</span></p><p><span style=\"background-color: rgb(255, 255, 255);\">Please</span></p>",
  author_id: guest.id,
  notebook_id: notebook2.id)

tag1 = Tag.create!(name: "list", author_id: guest.id)
tag2 = Tag.create!(name: "color", author_id: guest.id)
tag3 = Tag.create!(name: "smile!", author_id: guest.id)
tag4 = Tag.create!(name: "robots", author_id: guest.id)

tagging1 = Tagging.create!(tag_id: tag1.id, note_id: note1.id)
tagging2 = Tagging.create!(tag_id: tag1.id, note_id: note3.id)
tagging3 = Tagging.create!(tag_id: tag2.id, note_id: note1.id)
tagging4 = Tagging.create!(tag_id: tag2.id, note_id: note2.id)
tagging5 = Tagging.create!(tag_id: tag3.id, note_id: note3.id)
tagging6 = Tagging.create!(tag_id: tag4.id, note_id: note2.id)
