months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

200.times do
  Activity.create(
    location: Faker::Pokemon.location,
    date: months.sample,
    time: Time.now,
    age: Faker::Number.between(1,18),
    name: Faker::Pokemon.name,
    interest: Faker::Music.instrument,
    description: Faker::Lorem.sentence(2),
    inside:Faker::Boolean.boolean,
    url:Faker::Internet.url
)
end

50.times do
  User.create(
    name:Faker::Name.name,
    nickname:Faker::Name.first_name,
    password: 'password',
    email:Faker::Internet.email,
    zipcode:Faker::Address.zip_code,
    street_address:Faker::Address.street_address,
    city:Faker::Address.city,
    state:Faker::Address.state
)
end

50.times do
  Child.create(
    name: Faker::Name.name,
    user_id: User.all.sample.id,
    age: Faker::Number.between(1,18),
    interestOne: Faker::Music.instrument,
    interestTwo: Faker::Music.instrument,
    interestThree: Faker::Music.instrument,
    interestFour: Faker::Music.instrument,   
  )
end
