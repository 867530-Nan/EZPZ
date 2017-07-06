class Api::LogsController < ApplicationController
  before_action :set_log, only: [:update, :destroy]

  def index
    render json: current_user.logs
  end

  def create
    log = current_user.logs.new(log_params)
    if logs.save
      render json: log
    else
      render json: { errors: log.errors.full_messages }, status: :bad_request
    end
  end

  def update
    if @log.update(log_params)
      render json: @log
    else
      render json: { errors: @log.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    @log.destroy
  end

  private
    def set_log
      @log = current_user.logs.find(params[:id])
    end

    def log_params
      params.require(:log).permit(:rate, :experience, :description)
    end
end
