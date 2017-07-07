class Api::ChildrenController < ApplicationController
  before_action :set_child, only: [:update, :destroy]

  def index
    render json: current_user.children
  end

  def create
    child = current_user.children.new(child_params)
    if children.save
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
      params.require(:child).permit(:name, :age, :interest)
    end
end
