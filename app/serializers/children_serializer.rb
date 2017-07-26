class ChildrenSerializer < ActiveModel::Serializer
  belongs_to :user
  attributes :id, :age, :realInterest
end
