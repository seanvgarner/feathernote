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


guest = User.create!(email: 'guest', password: 'password')
sean = User.create!(email: 'seangarner@gmail.com', password: '1234abcd')

notebook1 = Notebook.create!(title: "TODOS", author_id: guest.id)
notebook2 = Notebook.create!(title: "Class Related", author_id: guest.id)
notebook3 = Notebook.create!(title: "Memories", author_id: guest.id)

note1 = Note.create!(
  title: 'My First Note',
  body: 'In here I can write reminders for myself',
  author_id: guest.id,
  notebook_id: notebook3.id)

note2 = Note.create!(
  title: 'Class Notes',
  body: 'Learn javascript, learn ruby, learn html, learn css, learn...sql?',
  author_id: guest.id,
  notebook_id: notebook2.id)

note3 = Note.create!(
  title: 'Calls to make this week...',
  body: 'Jen, Dad, Amazon, ',
  author_id: guest.id,
  notebook_id: notebook1.id)

note4 = Note.create!(
  title: 'Grocery List',
  body: 'Bananas, raspberries, arugula, ketchup, tortillas, milk?',
  author_id: guest.id,
  notebook_id: notebook1.id)
