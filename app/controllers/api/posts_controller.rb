class Api::PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_post, only: [:update, :destroy, :show]

  def index
    render json: current_user.posts.all
  end

  def show
    render json: @post
  end

  def create
    @post = current_user.posts.new(post_params)
    if @post.save
      render :show
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def update
    if @post.update(post_params)
      render :show
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @post.destroy
  end

  private

    def get_post
      @post = current_user.posts.find(params[:id])
    end

    def post_params
      params.require(:post).permit(:title, :body, :image)
    end
end
