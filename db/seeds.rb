# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bar.create({
  name: 'Ainsworth Park',
  address: '111 E 18th St, New York, NY 10003',
  number: '(212) 673-2467',
  website: 'http://ainsworthparknyc.com/',
  notes: 'Sounds For All Football.  No Sound For Most Basketball',
  alumni: false,
  longitude: -73.987783,
  latitude: 40.737025,
  })

Bar.create({
  name: 'Professor Thoms',
  address: '219 2nd Ave., New York, NY',
  number: '(212) 260-9480',
  website: 'http://www.professorthoms.com/',
  notes: 'Sounds For All Football.  No Sound For Most Basketball',
  alumni: true,
  longitude: -73.987783,
  latitude: 40.737025,
  })
