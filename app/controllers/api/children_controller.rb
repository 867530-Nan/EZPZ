class Api::ChildrenController < ApplicationController
  before_action :set_child, only: [:update, :destroy]

  def index
    render json: current_user.children
  end

  def create
    @user = User.find(params[:user_id])
    
    child = @user.children.new(child_params)
    if child.save
      render json: child
    else
      render json: { errors: child.errors.full_messages }, status: :bad_request
    end
  end

  def update
    if @child.update(child_params)
      render json: @child
    else
      render json: { errors: @child.errors.full_messages }, status: :bad_request
    end
  end

  def destroy
    @child.destroy
  end

  private
    def set_child
      @child = Children.find(params[:id])
    end

    def child_params
      params.require(:child).permit(:age, realInterest: [])
    end
end
