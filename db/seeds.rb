months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
days = [*1..31]

1.times do
  User.create(
    name: 'test',
    nickname: 'test',
    zipcode: 'test',
    email: 'test@test.com',
    password: 'password',
    street_address: 'test',
    city: 'test',
    state: 'test'
  )
end

1.times do
  Activity.create(
    name: 'Trolls - Movie in the Park',
    date: 'August 4, 2017',
    time: '9:00 PM',
    description: 'Movie will begin at dusk. The movie will be Trolls. Bring your lawn chairs & blankets!! Concessions will be available.',
    location: 'Centennial Park',
    address:'5405 West 3100 SouthWest Valley City, UT 84120',
    cost: 'Free',
    inside: false,
    age: 'all ages',
    month: 'August',
    url: nil

  )
end

1.times do
  Activity.create(
    name: 'WorldStage Free Concert ft. World Travelers',
    date: 'August 7, 2017',
    time: '7:30 PM',
    description:'Doors open at 7PM; concert begins at 7:30 PM. Every summer since 2005 the Utah Cultural Celebration Center has presented the WorldStage! Summer Concert Series – an outdoor musical and cultural experience for the whole family, all summer long. The 2017 series presents a vibrant and exciting cross section of entertainment, featuring classical, jazz, rock, international folk, and country music! Concerts are Monday nights, July 10 through August 14, 2017 (no concert July 24). Doors/gates open at 7:00 p.m. with performances starting at 7:30 p.m. Presented in part by West Valley City, Salt Lake County Zoo, Arts, and Parks, Utah Division of Arts and Museums, and Century Link.',
    location: 'Utah Cultural Celebration Center',
    address:'1355 West 3100 South West Valley City, UT 84119',
    inside: false,
    cost: 'Free',
    month: 'August',
    age: 'All Ages',
    url: nil
  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station',
    date: 'August 10, 2017',
    time: '5:00 PM - 9:00 PM',
    description:
    'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.',
    location: 'Fairbourne Station',
    address: '2810 West 3590 South West Valley City, UT 84119',
    url: 'https://www.facebook.com/thefoodtruckleague',
    month: 'August',
    cost: 'No Cost',
    inside: false,
    age: 'All Ages'
)
end

1.times do
  Activity.create(
    name: 'Bicycle Safety Rodeo',
    date: 'August 14, 2017',
    time:
    '4:30 PM - 6:30 PM',
    location:
    'Family Fitness Center',
    address:
    '5415 West 3100 South
    West Valley City, UT 84120',
    description: 'Bike Safety Rodeos are designed to help educate riders about riding bicycles. These rodeos are a great benefit to children to learn about and practice safe riding practices. We encourage and invite participation in our Bike Rodeos and enjoy conducting them for the kids. The focus of the Bike Safety Rodeo program is to increase rider safety and awareness for bicyclists. As such children must already have basic bicycle riding skills. As an essential requirement to participate we ask that children be old enough to ride a bicycle without training wheels. Please understand, safety is our number one concern. If children aren’t able to ride unassisted they may be asked to not participate. Please download this participation waiver form. Every child must have one completed prior to participation in the rodeo. We look forward to seeing you at our events!',
    cost: 'No Cost',
    month: 'August',
    inside: false,
    url: 'http://www.wvc-ut.gov/1609/Bicycle-Safety-Rodeo',
    age: 'All Ages'
  )
end

1.times do
  Activity.create(
    name: 'WorldStage Free Concert ft. Artie Hemphill & The Iron Horse Band',
    date: 'August 14, 2017',
    time: '7:30 PM',
    description:
    'Doors open at 7PM; concert begins at 7:30 PM. Every summer since 2005 the Utah Cultural Celebration Center has presented the WorldStage! Summer Concert Series – an outdoor musical and cultural experience for the whole family, all summer long. The 2017 series presents a vibrant and exciting cross section of entertainment, featuring classical, jazz, rock, international folk, and country music! Concerts are Monday nights, July 10 through August 14, 2017 (no concert July 24). Doors/gates open at 7:00 p.m. with performances starting at 7:30 p.m. Presented in part by West Valley City, Salt Lake County Zoo, Arts, and Parks, Utah Division of Arts and Museums, and Century Link.',
    location: 'Utah Cultural Celebration Center',
    address:'1355 West 3100 South West Valley City, UT 84119',
    cost: 'Free',
    month: 'August',
    inside: false,
    url: nil

  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station',
    date: 'August 17, 2017',
    month: 'August',
    time: '5:00 PM - 9:00 PM',
    description:
    'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.',
    location: 'Fairbourne Station',
    address: '2810 West 3590 South West Valley City, UT 84119',
    url: 'https://www.facebook.com/thefoodtruckleague',
    cost: 'Free',
    inside: false,
    age: 'all ages'

  )
end

1.times do
  Activity.create(
    name: 'National Night Out: Community Heroes Celebration',
    date: 'August 17, 2017',
    month: 'August',
    time: '5:00 PM - 8:00 PM',
    location: 'Fairbourne Station Promenade',
    address:'2810 West 3590 South West Valley City, UT 84119',
    cost: 'Free',
    description: 'The event will be a family friendly night of entertainment and helpful information. Safety information displays from approximately 20 vendors Kids activities (facepainting, balloons, bounce houses and more) Visits from McGruff the Crime Dog, Nat the National Night Out Knight, Grizzbee and some other superhero friends! Live entertainment featuring The Otter Creek Duo Food trucks (regular prices apply) Emergency vehicle displays WVCPD K9 demonstration and much more. Please park at West Valley City Hall, 3600 South Constitution Boulevard. Stay after the event for a movie in the park featuring Fantastic 4',
    inside: true,
    age: 'all ages',
    url: nil
  )
end

1.times do
  Activity.create(
    name: 'Summer at the Station Free Outdoor Concert ft. The Otter Creek Duo',
    date: 'August 17, 2017',
    month: 'August',
    time: '6:30 PM',
    description:
      'In conjunction with National Night Out: Community Heroes Celebration. Come out and enjoy the Folk hits of The Otter Creek Duo! Bring your lawn chairs and blankets.',
    location: 'Fairbourne Station',
    address: '2810 West 3590 South West Valley City, UT 84119',
    url: nil,
    cost: 'Free',
    inside: false,
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: 'Wasatch International Food Festival',
    date: 'August 18, 2017',
    month: 'August',
    time: '5:00 PM - 10:00 PM',
    description:
      'On August 18th and 19th, the Utah Cultural Celebration Center is hosting the second annual Wasatch International Food Festival at our facility in West Valley City. From the hip, gastronomic scenes of downtown Salt Lake City and Park City to the traditional ethnic offerings of the West Side\'s diverse community, the Wasatch is home to some of the greatest and most diverse food in the region. The Wasatch International Food Festival celebrates haute cuisine, street food, and everything in between. We want to dish up these rich and diverse menus with you, with a side of music and fun. ',
    location: 'Utah Cultural Celebration Center',
    address: '1355 West 3100 South West Valley City, UT 84119',
    url: 'http://www.foodfestutah.org/',
    cost: 'Regular Admission: $5 Group of 5: $20 Group of 10: $40',
    inside: false,
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: 'Wasatch International Food Festival',
    date: 'August 19, 2017',
    month: 'August',
    time: '12:00 PM - 8:00 PM',
    description:
      'On August 18th and 19th, the Utah Cultural Celebration Center is hosting the second annual Wasatch International Food Festival at our facility in West Valley City. From the hip, gastronomic scenes of downtown Salt Lake City and Park City to the traditional ethnic offerings of the West Side\'s diverse community, the Wasatch is home to some of the greatest and most diverse food in the region. The Wasatch International Food Festival celebrates haute cuisine, street food, and everything in between. We want to dish up these rich and diverse menus with you, with a side of music and fun. ',
    location: 'Utah Cultural Celebration Center',
    address: '1355 West 3100 South West Valley City, UT 84119',
    url: 'http://www.foodfestutah.org/',
    cost: 'Regular Admission: $5 Group of 5: $20 Group of 10: $40',
    inside: false,
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station',
    date: 'August 24, 2017',
    month: 'August',
    time: '5:00 PM - 9:00 PM',
    description:
      'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.',
    location: 'Fairbourne Station',
    address: '2810 West 3590 South West Valley City, UT 84119',
    url: 'http://www.foodfestutah.org/',
    cost: 'Free',
    inside: false,
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station',
    date: 'August 31, 2017',
    month: 'August',
    time: '5:00 PM - 9:00 PM',
    description:
      'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.',
    location: 'Fairbourne Station',
    address: '2810 West 3590 South West Valley City, UT 84119',
    url: 'http://www.foodfestutah.org/',
    cost: 'Free',
    inside: false,
    age: 'all ages'
  )
end

1.times do
Activity.create(
    location: 'Ogden Ampitheater',
    date: 'July 24, 2017',
    day: 24,
    month: 'July',
    year: 2017,
    time: '7:00pm',
    age: 'All Ages',
    name: 'Monday Night Movies - High Noon',
    interest: ['Movies', 'Imagination'],
    description: 'Grab your blankets and chairs and bring your family down for free Movies every Monday night. Visit the Backstage Bistro for savory meals. Doors at 7:00, movie starts at dusk. PG | 1h 25min A marshall, personally compelled to face a returning deadly enemy, finds that his own town refuses to help him.',
    inside: false,
    url: 'http://www.ogdencity.com/Calendar.aspx?EID=397&month=7&year=2017&day=19&calType=0'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 1, 2017',
    day: 1,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: 'All Day',
    age: 'All Ages',
    name: 'National Night Out Against Crime',
    interest: ['Movies', 'Imagination'],
    description: '',
    url: 'http://www.ogdencity.com/Calendar.aspx?EID=419&month=7&year=2017&day=19&calType=0'
    )
end
1.times do
Activity.create(
    location: '',
    address: 'On the corner of 26th and Washington Blvd',
    date: 'August 2, 2017',
    day: 2,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '12:00 - 1:30pm',
    age: 'All Ages',
    name: 'Tunes @ Noon',
    interest: ['Movies', 'Imagination'],
    description: 'Bring your lunch and your friends every Wednesday for Tunes at Noon! Performances take place every Wednesday, June 7th through August 9th. Local performances take place on the South East lawn of the Ogden Municipal Center. (26th and Washington Blvd.) Artists TBD, stay tuned for more information!',
    url: 'http://www.ogdencity.com/Calendar.aspx?EID=389&month=7&year=2017&day=19&calType=0'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street, Ogden, UT 84401',
    day: 4,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:00pm',
    age: 'All Ages',
    name: 'First Friday Art Stroll Jamz',
    interest: ['Movies', 'Imagination'],
    description: 'Bring your lunch and your friends every Wednesday for Tunes at Noon! Performances take place every Wednesday, June 7th through August 9th. Local performances take place on the South East lawn of the Ogden Municipal Center. (26th and Washington Blvd.) Artists TBD, stay tuned for more information!',
    url: 'http://www.ogdencity.com/Calendar.aspx?EID=420&month=7&year=2017&day=19&calType=0'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street, Ogden, UT 84401',
    date: 'August 5, 2017',
    day: 5,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '12:00 - 8:00pm',
    age: 'All Ages',
    name: 'Ogden Pride Festival',
    interest: ['Movies', 'Imagination'],
    description: 'Ogden Pride, Inc., invites you to "Rise Together With PRIDE" at the 3rd annual Ogden Pride Festival on Aug. 5, 2017! Bring your family, bring your friends to this FREE community celebration. Sign up now to volunteer, perform, donate or become a sponsor.',
    url: 'http://www.ogdencity.com/Calendar.aspx?EID=421&month=7&year=2017&day=19&calType=0'
    )
end
1.times do
Activity.create(
    location: 'On the Corner of 26th and Washington Blvd',
    address: '2549 Washington Boulevard Ogden, UT 84401',
    date: 'August 9, 2017',
    day: 9,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '12:00 - 1:30pm',
    age: 'All Ages',
    name: 'Tunes @ Noon',
    interest: ['Movies', 'Imagination'],
    description: 'Bring your lunch and your friends every Wednesday for Tunes at Noon! Performances take place every Wednesday, June 7th through August 9th. Local performances take place on the South East lawn of the Ogden Municipal Center. (26th and Washington Blvd.) Artists TBD, stay tuned for more information!',
    url: 'http://www.ogdencity.com/Calendar.aspx?EID=390&month=7&year=2017&day=19&calType=0'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 12,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 13,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 14,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 15,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 16,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 17,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 18,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 19,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 20,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 21,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 22,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 23,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 24,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 25,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Ogden Amphitheater',
    address: '343 E 25th Street Ogden, UT 84401',
    date: 'August 12, 2017 - August 26, 2017',
    day: 26,
    month: 'August',
    year: 2017,
    cost: '$15.00',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Good Company Theater presents In the Heights',
    interest: ['Movies', 'Imagination'],
    description: 'In The Heights by Quiara Alegría Hudes and Lin-Manuel Miranda The universal story of a vibrant community in New York\'s Washington Heights neighborhood – a place where the coffee from the corner bodega is light and sweet, the windows are always open and the breeze carries the rhythm of three generations of music. It\'s a community on the brink of change, full of hopes, dreams and pressures, where the biggest struggles can be deciding which traditions you take with you, and which ones you leave behind. ? Presented at Ogden Amphitheater ? August 12-26 ? This musical contains loud music, and some adult situations. Discrection is advised.',
    url: 'https://www.goodcotheatre.com/in-the-heights'
    )
end
1.times do
Activity.create(
    location: 'Saint Joseph High School Parking Lot',
    address: '1790 Lake Street Ogden, UT 84401',
    date: 'August 22, 2017',
    day: 22,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '6:00 - 9:00pm',
    age: 'All Ages',
    name: 'The 4th Tuesday Trail Dig',
    interest: ['Movies', 'Imagination'],
    description: "The Front Climbing Club and Ogden Trails Network have partnered to lead monthly trail projects every 4th Tuesday of the month from now through September. Join us every month to get your hands dirty, learn about the trail systems and how to repair and rehabilitate them.",
    url: 'https://www.volunteersignup.org/3XAC4'
    )
end

Activity.create(
    location: 'The Gallivan Center',
    address: ' 239 Main St, Salt Lake City, UT 84111',
    date: 'July 31, 2017',
    day: 31,
    month: 'July',
    year: 2017,
    cost: 'Free',
    time: '8:30',
    age: 'All Ages',
    name: 'Movie - 0Close Encounters of the Third Kind',
    interest: ['Movies', 'Imagination'],
    description: "The Gallivan Center is thrilled to present the FREE 2017 Monday Night Movies series. This year's theme: A Summer of Spielberg! July 3: Jurassic Park July 10: Jaws July 17: Raiders of the Lost Ark July 31: Close Encounters of the Third Kind Movies start at dusk. Low back chairs, blankets, pillows and food are allowed. And don't forget about the Gallivan Center's concessions stand offering all kinds of munchies and drinks as well! Sponsorship packages available!",
    url: 'http://www.thegallivancenter.com/calendar'
    )

Activity.create(
    location: 'The Gallivan Center',
    address: '239 Main St, Salt Lake City, UT 84111',
    date: 'July 31, 2017',
    day: 31,
    month: 'July',
    year: 2017,
    cost: 'Free',
    time: '12:00pm',
    age: 'All Ages',
    name: 'Lunch Bunch Concert Series',
    interest: ['Music', 'Musical Instruments'],
    description: '',
    url: 'http://www.thegallivancenter.com/calendar'
    )

Activity.create(
    location: 'Holladay City Hall Park',
    address: '4570 S 2300 E, Holladay, UT 84117',
    date: 'July 29, 2017',
    day: 29,
    month: 'July',
    year: 2017,
    cost: 'Free',
    time: '8:00-10:00pm',
    age: 'All Ages',
    name: 'Night on Broadway',
    interest: ['Music', 'Musical Instruments'],
    description: 'Night on Broadway – Featuring Michael Chipman & Melinda Kirigin-Voss',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Gallivan Center Stage',
    address: '239 Main St, Salt Lake City, UT 84111',
    date: 'August 3, 2017',
    day: 3,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '7:30-10:00pm',
    age: 'All Ages',
    name: 'David Halliday & The Jazz Vespers Quartet',
    interest: ['Music', 'Musical Instruments'],
    description: 'Night on Broadway – Featuring Michael Chipman & Melinda Kirigin-Voss',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Holladay City Hall Park',
    address: '4570 S 2300 E, Holladay, UT 84117',
    date: 'August 5, 2017',
    day: 5,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:00-10:00pm',
    age: 'All Ages',
    name: 'Free Concert - Excellence in the Community - JOE MUSCOLINO BAND',
    interest: ['Music', 'Musical Instruments'],
    description: '',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Gallivan Center Stage',
    address: '239 Main St, Salt Lake City, UT 84111',
    date: 'August 8, 2017',
    day: 8,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '7:00pm',
    age: 'All Ages',
    name: 'Night Star Jazz Orchestra',
    interest: ['Music', 'Musical Instruments'],
    description: 'Dance lessons start at 7:00, Music starts at 7:30, Free!',
    url: 'http://excellenceconcerts.org/',
    )

Activity.create(
    location: 'Holladay City Hall Park',
    address: '4570 S 2300 E, Holladay, UT 84117',
    date: 'August 12, 2017',
    day: 12,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:00 - 10:30pm',
    age: 'All Ages',
    name: 'Philip Kuehn Orchestra',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free Outdoor Concert!',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'The County Library: Viridian Event Calendar',
    address: '8030 S 1825 W, West Jordan, Utah 84088',
    date: 'August 12, 2017',
    day: 12,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:30 - 10:00pm',
    age: 'All Ages',
    name: 'Island Time II',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free Outdoor Concert!',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Holladay City Hall Park',
    address: '4570 S 2300 E, Holladay, UT 84117',
    date: 'August 19, 2017',
    day: 19,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:00pm',
    age: 'All Ages',
    name: 'Night Star Jazz Orchestra',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free Outdoor Concert!',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Gallivan Center Stage',
    address: '239 Main St, Salt Lake City, UT 84111',
    date: 'August 24, 2017',
    day: 24,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '7:30 - 10:30pm',
    age: 'All Ages',
    name: 'Changing Lanes Experience',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free, Live Music',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Holladay City Hall Park',
    address: '4570 S 2300 E, Holladay, UT 84117',
    date: 'August 26, 2017',
    day: 26,
    month:'August',
    year: 2017,
    cost: 'Free',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: ' Fly Me To The Moon',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free, Live Music',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'Gallivan Center Stage',
    address: '239 Main St, Salt Lake City, UT 84111',
    date: 'August 31, 2017',
    day: 26,
    month:'August',
    year: 2017,
    cost: 'Free',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: ' Fly Me To The Moon',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free, Live Music',
    url: 'http://excellenceconcerts.org/'
    )

Activity.create(
    location: 'HighPoint Park',
    address: '7851 S 1000 E, Sandy, UT 84094',
    date: 'July 28, 2017',
    day: 28,
    month: 'July',
    year: 2017,
    cost: 'Free',
    time: '7:30 - 10:00pm',
    age: 'All Ages',
    name: 'Movies in the Park - Hercules',
    interest: ['Music', 'Musical Instruments'],
    description: 'Hercules at Highpoint Park',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/970/746'
    )

Activity.create(
    location: 'HighPoint Park',
    address: '11400 South 1700 East, Sandy, Utah 84092',
    date: 'August 4, 2017',
    day: 4,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '7:30 - 10:00pm',
    age: 'All Ages',
    name: 'Movies in the Park - Zootopia',
    interest: ['Music', 'Musical Instruments'],
    description: 'Zootopia at Highpoint Park',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/972/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 4,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 5,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 6,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 7,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 8,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 9,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746',
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 10,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 11,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Sandy Amphitheater',
    address: '9400 South 1300 East | Sandy, UT 84094',
    date: 'August 4, 2017 - August 12, 2017',
    day: 12,
    month: 'August',
    year: 2017,
    cost: 'Pricing Depends on Seating',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'Beauty and the Beast - A Musical',
    interest: ['Performing Arts', 'Imagination'],
    description: 'A tale as Old as Time - One of the best selling Arts guild musicals of all time. Be sure to get your tickets early to this magical experience.',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/912/746'
    )

Activity.create(
    location: 'Ampthitheater Park',
    address: '9400 South 1300 East, Sandy, Utah 84094',
    date: 'August 19, 2017',
    day: 19, 
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:00 - 10:00pm',
    age: 'All Ages',
    name: 'International Folk Festival - FREE!',
    interest: ['Music', 'Musical Instruments'],
    description: 'Free Events, no tickets required',
    url: 'http://sandy.utah.gov/Home/Components/Calendar/Event/956/746'
    )

Activity.create(
    location: 'Heritage Park',
    address: '10800 S Redwood Rd, South Jordan, UT 84095',
    date: 'August 3, 2017',
    day: 3,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '7:00am - 12:30pm',
    age: 'All Ages',
    name: '2017 Chalk Art Contest',
    interest: ['Reading', 'Drawing', 'Creative Arts', 'Being Imaginative'],
    description: '',
    url: 'http://www.sjc.utah.gov/event/2017-chalk-art-contest/?instance_id=181'
    )

Activity.create(
    location: 'Heritage Park',
    address: '10800 S Redwood Rd, South Jordan, UT 84095',
    date: 'August 11, 2017',
    day: 11,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '8:00pm - 11:00pm',
    age: 'All Ages',
    name: 'Sights & Sounds of Summer Movie - Fantastic Beasts and Where to Find Them',
    interest: ['Being Imaginative', 'Creative Arts', 'Movies'],
    description: 'Movies in the Park',
    url: 'http://www.sjc.utah.gov/event/sights-sounds-of-summer-movie-fantastic-beasts/?instance_id=220'
    )

Activity.create(
    location: 'Gale Center of History & Culture',
    address: '10300 Beckstead Ln, South Jordan, UT 84095',
    date: 'August 29, 2017',
    day: 29,
    month: 'August',
    year: 2017,
    cost: 'Free',
    time: '10:00 - 11:00am',
    age: 'All Ages',
    name: 'Terrific Tuesday - August Cookie Decorating',
    interest: ['Cooking / Baking'],
    description: '',
    url: 'http://www.sjc.utah.gov/event/terrific-tuesday-cookie-decorating/?instance_id=262'
    )





