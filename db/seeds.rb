months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
days = [*1..31]

1.times do
  Acitivity.create(
    name: 'Movie in the Park'
    date: 'August 4, 2017'
    time: '9:00 PM'
    description: 'Movie will begin at dusk. The movie will be Trolls. Bring your lawn chairs & blankets!! Concessions will be available.'
    location: 'Centennial Park'
    address:'5405 West 3100 SouthWest Valley City, UT 84120'
    cost: 'Free'
    inside: false
    age: 'all ages'
    month: 'August'
    url: nil

  )
end

1.times do
  Activity.create(
    name: 'WorldStage Free Concert ft. World Travelers'
    date: 'August 7, 2017'
    time: '7:30 PM'
    description:'Doors open at 7PM; concert begins at 7:30 PM. Every summer since 2005 the Utah Cultural Celebration Center has presented the WorldStage! Summer Concert Series – an outdoor musical and cultural experience for the whole family, all summer long. The 2017 series presents a vibrant and exciting cross section of entertainment, featuring classical, jazz, rock, international folk, and country music! Concerts are Monday nights, July 10 through August 14, 2017 (no concert July 24). Doors/gates open at 7:00 p.m. with performances starting at 7:30 p.m. Presented in part by West Valley City, Salt Lake County Zoo, Arts, and Parks, Utah Division of Arts and Museums, and Century Link.'
    location: 'Utah Cultural Celebration Center'
    address:'1355 West 3100 South West Valley City, UT 84119'
    inside: false
    cost: 'Free'
    month: 'August'
    age: 'All Ages'
    url: nil
  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station'
    date: 'August 10, 2017'
    time: '5:00 PM - 9:00 PM'
    description:
    'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.'
    location: 'Fairbourne Station'
    address: '2810 West 3590 South West Valley City, UT 84119'
    url: 'https://www.facebook.com/thefoodtruckleague'
    month: 'August'
    cost: 'No Cost'
    inside: false
    age: 'All Ages'
)
end

1.times do
  Activity.create(
    name: 'Bicycle Safety Rodeo'
    date: 'August 14, 2017'
    time:
    '4:30 PM - 6:30 PM'
    location:
    'Family Fitness Center'
    address:
    '5415 West 3100 South
    West Valley City, UT 84120'
    description: 'Bike Safety Rodeos are designed to help educate riders about riding bicycles. These rodeos are a great benefit to children to learn about and practice safe riding practices. We encourage and invite participation in our Bike Rodeos and enjoy conducting them for the kids. The focus of the Bike Safety Rodeo program is to increase rider safety and awareness for bicyclists. As such children must already have basic bicycle riding skills. As an essential requirement to participate we ask that children be old enough to ride a bicycle without training wheels. Please understand, safety is our number one concern. If children aren’t able to ride unassisted they may be asked to not participate. Please download this participation waiver form. Every child must have one completed prior to participation in the rodeo. We look forward to seeing you at our events!'
    cost: 'No Cost'
    month: 'August'
    inside: false
    url: 'http://www.wvc-ut.gov/1609/Bicycle-Safety-Rodeo'
    age: 'All Ages'
  )
end

1.times do
  Activity.create(
    name: 'WorldStage Free Concert ft. Artie Hemphill & The Iron Horse Band'
    date: 'August 14, 2017'
    time: '7:30 PM'
    description:
    'Doors open at 7PM; concert begins at 7:30 PM. Every summer since 2005 the Utah Cultural Celebration Center has presented the WorldStage! Summer Concert Series – an outdoor musical and cultural experience for the whole family, all summer long. The 2017 series presents a vibrant and exciting cross section of entertainment, featuring classical, jazz, rock, international folk, and country music! Concerts are Monday nights, July 10 through August 14, 2017 (no concert July 24). Doors/gates open at 7:00 p.m. with performances starting at 7:30 p.m. Presented in part by West Valley City, Salt Lake County Zoo, Arts, and Parks, Utah Division of Arts and Museums, and Century Link.'
    location: 'Utah Cultural Celebration Center'
    address:'1355 West 3100 South West Valley City, UT 84119'
    cost: 'Free'
    month: 'August'
    inside: false
    url: nil

  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station'
    date: 'August 17, 2017'
    month: 'August'
    time: '5:00 PM - 9:00 PM'
    description:
    'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.'
    location: 'Fairbourne Station'
    address: '2810 West 3590 South West Valley City, UT 84119'
    url: 'https://www.facebook.com/thefoodtruckleague'
    cost: 'Free'
    inside: false
    age: 'all ages'

  )
end

1.times do
  Activity.create(
    name: 'National Night Out: Community Heroes Celebration'
    date: 'August 17, 2017'
    month: 'August'
    time: '5:00 PM - 8:00 PM'
    location: 'Fairbourne Station Promenade'
    address:'2810 West 3590 South West Valley City, UT 84119'
    cost: 'Free'
    description: 'The event will be a family friendly night of entertainment and helpful information. Safety information displays from approximately 20 vendors Kids activities (facepainting, balloons, bounce houses and more) Visits from McGruff the Crime Dog, Nat the National Night Out Knight, Grizzbee and some other superhero friends! Live entertainment featuring The Otter Creek Duo Food trucks (regular prices apply) Emergency vehicle displays WVCPD K9 demonstration and much more. Please park at West Valley City Hall, 3600 South Constitution Boulevard. Stay after the event for a movie in the park featuring Fantastic 4'
    inside: true
    age: 'all ages'
    url: nil
  )
end

1.times do
  Activity.create(
    name: 'Summer at the Station Free Outdoor Concert ft. The Otter Creek Duo'
    date: 'August 17, 2017'
    month: 'August'
    time: '6:30 PM'
    description:
      'In conjunction with National Night Out: Community Heroes Celebration. Come out and enjoy the Folk hits of The Otter Creek Duo! Bring your lawn chairs and blankets.'
    location: 'Fairbourne Station'
    address: '2810 West 3590 South West Valley City, UT 84119'
    url: nil
    cost: 'Free'
    inside: false
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: 'Wasatch International Food Festival'
    date: 'August 18, 2017'
    month: 'August'
    time: '5:00 PM - 10:00 PM'
    description:
      'On August 18th and 19th, the Utah Cultural Celebration Center is hosting the second annual Wasatch International Food Festival at our facility in West Valley City. From the hip, gastronomic scenes of downtown Salt Lake City and Park City to the traditional ethnic offerings of the West Side\'s diverse community, the Wasatch is home to some of the greatest and most diverse food in the region. The Wasatch International Food Festival celebrates haute cuisine, street food, and everything in between. We want to dish up these rich and diverse menus with you, with a side of music and fun. '
    location: 'Utah Cultural Celebration Center'
    address: '1355 West 3100 South West Valley City, UT 84119'
    url: 'http://www.foodfestutah.org/'
    cost: 'Regular Admission: $5 Group of 5: $20 Group of 10: $40'
    inside: false
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name:
    date: 'August 18, 2017'
    month: 'August'
    time: '9:00 PM'
    description: 'TBA'
    location: 'Fairbourne Station'
    address: '2810 West 3590 South West Valley City, UT 84119'
    url: 'http://www.foodfestutah.org/'
    cost: 'Free'
    inside: false
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: 'Wasatch International Food Festival'
    date: 'August 19, 2017'
    month: 'August'
    time: '12:00 PM - 8:00 PM'
    description:
      'On August 18th and 19th, the Utah Cultural Celebration Center is hosting the second annual Wasatch International Food Festival at our facility in West Valley City. From the hip, gastronomic scenes of downtown Salt Lake City and Park City to the traditional ethnic offerings of the West Side\'s diverse community, the Wasatch is home to some of the greatest and most diverse food in the region. The Wasatch International Food Festival celebrates haute cuisine, street food, and everything in between. We want to dish up these rich and diverse menus with you, with a side of music and fun. '
    location: 'Utah Cultural Celebration Center'
    address: '1355 West 3100 South West Valley City, UT 84119'
    url: 'http://www.foodfestutah.org/'
    cost: 'Regular Admission: $5 Group of 5: $20 Group of 10: $40'
    inside: false
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station'
    date: 'August 24, 2017'
    month: 'August'
    time: '5:00 PM - 9:00 PM'
    description:
      'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.'
    location: 'Fairbourne Station'
    address: '2810 West 3590 South West Valley City, UT 84119'
    url: 'http://www.foodfestutah.org/'
    cost: 'Free'
    inside: false
    age: 'all ages'
  )
end

1.times do
  Activity.create(
    name: '#ThursdayLeague Food Trucks at Fairbourne Station'
    date: 'August 31, 2017'
    month: 'August'
    time: '5:00 PM - 9:00 PM'
    description:
      'Join The Food Truck League every Thursday from 5 - 9 PM at Fairbourne Station for #ThursdayLeague #FoodatFairbourne! Schedule is subject to change and cancellations may not be announced or reflected on West Valley City website or via email. Check https://www.facebook.com/thefoodtruckleague for specific dates and times.'
    location: 'Fairbourne Station'
    address: '2810 West 3590 South West Valley City, UT 84119'
    url: 'http://www.foodfestutah.org/'
    cost: 'Free'
    inside: false
    age: 'all ages'
  )
end
