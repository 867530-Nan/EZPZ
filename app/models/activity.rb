class Activity < ApplicationRecord
  validates_presence_of :date, :time
  has_many :user_activities, dependent: :destroy
  has_many :users, through: :user_activities
  validates :date, uniqueness: { scope: :time
                                 message: "cannot have an activity at the same time" }
end
