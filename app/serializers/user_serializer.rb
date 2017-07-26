class UserSerializer < ActiveModel::Serializer
  attributes :id, :provider, :uid, :name, :nickname, :email, :zipcode, :image_url
end
