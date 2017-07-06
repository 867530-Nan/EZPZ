class Api::ActivitiesController < ApplicationController
  before_action :set_activity, only: (:update, :destroy)

  def index
    render json: Activity.all
  end

  def create
    activity = activity.new(activity_params)
    if activity.save
      render json: activity
    else
      render json: { errors: activities.errors.full_messges }, status: :bad_request
    end
  end

  def update
    if @activity.update(activity_params)
      render json: activity
    else
      render json: { errors: @activity.errors.full_messages }, status: :bad_request
  end

  def destroy
    @activity.destroy
  end

  private

  def activity_params
    params.require(:activity).permit(:name, :time, :date, :description, :location, :age, :inside, :url)
  end

  def set_activity
    @activity = Activity.find(params[:id])
  end
end
