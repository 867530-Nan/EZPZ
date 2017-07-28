class Child < ApplicationRecord

  validates_presence_of :age, :realInterest

  belongs_to :user
end
