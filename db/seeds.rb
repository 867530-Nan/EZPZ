months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
days = [*1..31]


200.times do
  Activity.create(
    location: Faker::Pokemon.location,
    day: days.sample,
    month: months.sample,
    year: 2017,
    time: Time.now,
    age: Faker::Number.between(1,18),
    name: Faker::Pokemon.name,
    interest: Faker::Music.instrument,
    description: Faker::Lorem.sentence(2),
    inside:Faker::Boolean.boolean,
    url:Faker::Internet.url
)
end
