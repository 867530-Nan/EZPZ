class User < ActiveRecord::Base
  # Include default devise modules.
  serialize :children, JSON
  has_many :user_activities, dependent: :destroy
  has_many :activities, through: :user_activities
  has_many :children, dependent: :destroy
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end