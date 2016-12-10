# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Note.destroy_all

guest = User.create!(email: 'guest', password: 'password')
sean = User.create!(email: 'seangarner@gmail.com', password: '1234abcd')

note1 = Note.create!(
  title: 'My First Note',
  body: 'In here I can write reminders for myself',
  author_id: guest.id)

note2 = Note.create!(
  title: 'Class Notes',
  body: 'Learn javascript, learn ruby, learn html, learn css, learn...sql?',
  author_id: guest.id)
  )
