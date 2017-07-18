class Api::PhotosController < ApplicationController

  def create
    auth = {
      cloud_name: ENV['CLOUDINARY_CLOUD_NAME'],
      api_key: ENV['CLOUDINARY_API_KEY'],
      api_secret: ENV['CLOUDINARY_API_SECRET']
    }

    uploaded_photo_name = params.keys.first
    uploaded_file = params[uploaded_photo_name]

    begin
      cloud_photo = Cloudinary::Uploader.upload(uploaded_file, auth)
      binding.pry
      @picture = cloud_photo['url']
      curent_user.image_url.push(@picture)
      current_user.save
      render json: current_user
    rescue => e
      binding.pry
      render json: { errors: e }, status: :bad_request
    end
  end
end
