class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password, :passwordConfirmation, :name, :nickname, :zipcode
end
