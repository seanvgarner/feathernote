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
notebook3 = Notebook.create!(title: "Poetry", author_id: guest.id)
notebook4 = Notebook.create!(title: "Facts!", author_id: guest.id)
notebook5 = Notebook.create!(title: "Words of Wisdom", author_id: guest.id)

note2 = Note.create!(
  title: 'THESE ARE VERY USEFUL FACTS',
  body: "<ol><li>Literally banging your head against a wall <span style=\"color: rgb(102, 163, 224);\">burns 150 calories</span> an hour.</li><li>Pteronophobia is the fear of being tickled by feathers! <span style=\"color: rgb(102, 185, 102);\">(...Not by featherNOTES)</span></li><li>You cannot snore and dream at the same time. <span style=\"color: rgb(255, 153, 0);\">CHALLENGE ACCEPTED.</span></li><li><span style=\"color: rgb(0, 0, 0);\">Catfish are the only animals that naturally have an odd number of whiskers.</span></li><li><span style=\"color: rgb(0, 0, 0);\">The first alarm clock could only ring at 4am. </span><span style=\"color: rgb(230, 0, 0); background-color: rgb(250, 204, 204);\">OOOOOOF.</span></li><li><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">A crocodile cannot poke its tongue out :P</span></li><li><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">Pirates wore earrings because they believed it improved their eyesight.</span></li><li><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">Hamsters run up to 8 miles at night on a wheel. </span><span style=\"color: rgb(194, 133, 255); background-color: rgb(255, 255, 255);\">#goals </span></li><li><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\">A sheep, a duck and a rooster were the first passengers in a hot air balloon.</span></li><li><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"> ....</span></li></ol>",
  author_id: guest.id,
  notebook_id: notebook4.id)

note3 = Note.create!(
  title: "A Haiku or Two for You",
  body: "<p><span style=\"color: rgb(0, 71, 178);\">Haikus are easy</span></p><p><span style=\"color: rgb(0, 71, 178);\">But sometimes they don't make sense</span></p><p><span style=\"color: rgb(0, 71, 178);\">Refrigerator</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0);\">A Hypotenuse</span></p><p><span style=\"color: rgb(0, 0, 0);\">Is on the opposite side</span></p><p><span style=\"color: rgb(0, 0, 0);\">Of the right angle.</span></p><p><br></p><p>I see you driving</p><p>Round town with the girl I love</p><p>And I'm like <strong style=\"color: rgb(230, 0, 0);\">haiku.</strong></p><p><br></p><p><span style=\"color: rgb(107, 36, 178);\">A haiku about waking up in the morning: </span></p><p><span style=\"color: rgb(0, 0, 0);\">No, no, no, no, no</span></p><p>No, no, no, no, no, no, no</p><p><span style=\"color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; font-size: 13px;\">No, no, no, no, no.</span></p><p><br></p><p><span style=\"color: rgb(0, 0, 0); font-family: Helvetica, Arial, sans-serif; font-size: 13px;\"><span class=\"ql-cursor\">﻿</span></span></p><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook3.id)

note4 = Note.create!(
  title: "Today:",
  body: "<ul><li>Go gift shopping</li><li>Buy milk.</li><li>Laundry</li><li>Call Mom back</li><li>Get a haircut</li><li>Start prepping dinner for tomorrow</li><li>Send out holiday cards</li><li>Stop by Jake's birthday party.</li><li>Get winter clothes from storage.</li><li>OH AND BUY MILK.</li></ul><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook1.id)

note5 = Note.create!(
  title: "Next Week:",
  body: "<ul><li>Buy plane ticket</li><li>Get Car washed</li><li>Work on project </li><li>Shop for a new Suit.</li><li>Coordinate Plans with Jen</li><li>Read assigned book</li><li>Sort through email inbox to clear clutter</li><li>Oh, <span style=\"background-color: rgb(102, 163, 224);\">BUY MILK</span></li></ul><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook1.id)

note6 = Note.create!(
  title: "Tuesday Notes",
  body: "<ul><li>Buy plane ticket</li><li>Get Car washed</li><li>Work on project </li><li>Shop for a new Suit.</li><li>Coordinate Plans with Jen</li><li>Read assigned book</li><li>Sort through email inbox to clear clutter</li><li>Oh, <span style=\"background-color: rgb(102, 163, 224);\">BUY MILK</span></li></ul><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook1.id)

note7 = Note.create!(
  title: "JaVaScRiPt",
  body: "<p>-Great Resource is the Mozilla Developer Network for JavaScript docs</p><p>-JS is prototype based</p><p>-Not everything is an object! ( ie Primitives)</p><p>-Falsey values =&gt; 0, \"\", NaN, null, false, -0</p><p>-Triple equals! ===</p><p>-No implicit returns (exception: one line fat arrow functions)</p><p>-var --&gt; function scoped</p><p>-let, const --&gt; block scoped</p><p>-const can't be re-assigned</p><p>-JavaScript has Hoisting: takes the variable declaration and brings to top of function ==&gt; but NOT the assignment of the value</p><p>-Ways to call a function:</p><ul><li>function style</li><li>method style</li><li>constructor style</li><li>call</li><li>apply</li><li>(arrow function)</li></ul><p>-Closures and Callbacks</p><p>-Callback will always be invoked<strong><em> </em></strong><strong style=\"color: rgb(107, 36, 178);\"><em>function style</em></strong><span style=\"color: rgb(0, 0, 0);\"></span></p><p><br></p><p><br></p><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook2.id)

note8 = Note.create!(
  title: "CATFACTS",
  body: "<ol><li>Cats are the most popular pet in the United States</li><li>There are cats who have <span style=\"font-size: 18px;\">survived falls from over 32 stories</span></li><li>Cats sleep over <span style=\"color: rgb(0, 71, 178);\">70%</span> of their lives</li><li>A cat has been <span style=\"font-size: 32px;\">mayor</span> of Talkeetna, Alaska, for 15 years. His name is <span style=\"color: rgb(255, 153, 0);\">Stubbs</span></li><li><span style=\"color: rgb(0, 0, 0);\">Cats cant taste sweetness</span></li><li>The worlds richest cat is worth <span style=\"color: rgb(102, 185, 102);\">$13 million</span> after his human left her fortune to him</li><li>A cat's brain is 90% similar to a human's </li><li>A cat can jump                            up to sixteen times its length....</li><li>Black cats are bad luck in the United States, but they are good luck in the UK and Australia</li><li> The technical term for hairball is a <span style=\"color: rgb(61, 20, 10); background-color: rgb(255, 235, 204);\">\"bezoar\"</span><span style=\"color: rgb(0, 0, 0); background-color: rgb(255, 255, 255);\"></span></li><li><br></li></ol><p><br></p><p><br></p><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook4.id)

note9 = Note.create!(
  title: "Grocery List",
  body: "<ul><li>milk</li><li>bananas</li><li>granola</li><li>eggs</li><li>tomato</li><li>cheese</li><li>tortillas</li><li>chicken</li><li>chili powder</li><li>tea</li><li>honey</li><li>arugula</li><li>potato...</li></ul><p><br></p><p><br></p><p><br></p>",
  author_id: guest.id,
  notebook_id: notebook1.id)

note10 = Note.create!(
  title: "What is JSX?",
  body: "<p>JSX is a JavaScript syntax extension that resembles HTML and XML. Code written in this syntax has improved readability and ease of development.</p><p><br></p><p>Even though it looks like HTML, JSX is still JS at the core. as such you can interpolate pain JS into JSX using {} between element tags or for attribute values. </p><p><br></p><p>JSX cannot be directly interpreted by browsers, JSX code must be passed through a preprocessor, such as Babel, that transpiles it into good ol vanilla JS.</p>",
  author_id: guest.id,
  notebook_id: notebook2.id)

note1 = Note.create!(
  title: 'Welcome to Feathernote!',
  body: "<p>Remembering everything is hard. Feathernote was designed so you don't have to. This awesome note-taking app lets you organize your notes into specific <strong>notebooks </strong>for easy browsing, <span style=\"background-color: rgb(255, 255, 255);\">rich-text editing so you can really </span><span style=\"background-color: rgb(255, 255, 102);\">highlight</span><span style=\"background-color: rgb(255, 255, 255);\"> what you want to </span><strong style=\"background-color: rgb(255, 255, 255); color: rgb(153, 51, 255);\"><em><u>stand out</u></em></strong><span style=\"background-color: rgb(255, 255, 255); color: rgb(0, 0, 0);\">.</span></p><p><br></p><p><br></p><p><strong style=\"background-color: rgb(255, 255, 255); color: rgb(102, 185, 102);\">Core Things To Play Around With:</strong></p><ul><li><span style=\"color: rgb(102, 185, 102);\">notes</span></li><li><span style=\"color: rgb(102, 185, 102);\">notebooks</span></li><li><span style=\"color: rgb(102, 185, 102);\">tags</span></li></ul><p><br></p><p><span style=\"color: rgb(0, 0, 0);\">Take a look around! Start by hitting the </span><span style=\"color: rgb(102, 185, 102);\">+ </span><span style=\"color: rgb(0, 0, 0);\">to add a New Note.</span></p>",
  author_id: guest.id,
  notebook_id: notebook5.id)




tag1 = Tag.create!(name: "list", author_id: guest.id)
tag2 = Tag.create!(name: "color", author_id: guest.id)
tag3 = Tag.create!(name: "smile!", author_id: guest.id)
tag4 = Tag.create!(name: "food", author_id: guest.id)
tag5 = Tag.create!(name: "code", author_id: guest.id)

tagging1 = Tagging.create!(tag_id: tag1.id, note_id: note1.id)
tagging2 = Tagging.create!(tag_id: tag1.id, note_id: note2.id)
tagging3 = Tagging.create!(tag_id: tag1.id, note_id: note4.id)
tagging4 = Tagging.create!(tag_id: tag1.id, note_id: note5.id)
tagging5 = Tagging.create!(tag_id: tag1.id, note_id: note6.id)
tagging6 = Tagging.create!(tag_id: tag1.id, note_id: note8.id)
tagging7 = Tagging.create!(tag_id: tag1.id, note_id: note9.id)
tagging8 = Tagging.create!(tag_id: tag2.id, note_id: note1.id)
tagging9 = Tagging.create!(tag_id: tag2.id, note_id: note2.id)
tagging10 = Tagging.create!(tag_id: tag2.id, note_id: note3.id)
tagging11 = Tagging.create!(tag_id: tag2.id, note_id: note6.id)
tagging12 = Tagging.create!(tag_id: tag2.id, note_id: note8.id)
tagging13 = Tagging.create!(tag_id: tag3.id, note_id: note1.id)
tagging14 = Tagging.create!(tag_id: tag3.id, note_id: note2.id)
tagging15 = Tagging.create!(tag_id: tag3.id, note_id: note3.id)
tagging16 = Tagging.create!(tag_id: tag3.id, note_id: note8.id)
tagging17 = Tagging.create!(tag_id: tag4.id, note_id: note4.id)
tagging18 = Tagging.create!(tag_id: tag4.id, note_id: note5.id)
tagging19 = Tagging.create!(tag_id: tag4.id, note_id: note9.id)
tagging20 = Tagging.create!(tag_id: tag5.id, note_id: note7.id)
tagging21 = Tagging.create!(tag_id: tag5.id, note_id: note10.id)
