class Child < ApplicationRecord
  validates_presence_of :name, :age
  belongs_to :user
end
