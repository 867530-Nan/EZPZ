class Api::UserActivitiesController < ApplicationController
  before_action :set_user_activities, only: :destroy
  def index
    render json: current_user.user_activities.all
  end

  def create
    user_activities = current_user.user_activities.new(user_activities)
    if user_activities.save
      render json: user_activities
    else
      render json: { errors: user_activities.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    @user_activities.destroy
  end

  private

  def set_user_activities
    @user_activities = current_user.user_activities.find(params[:id])
  end
end
