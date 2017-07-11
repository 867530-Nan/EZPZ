class Child < ApplicationRecord
  validates_presence_of :age
  belongs_to :user
end
