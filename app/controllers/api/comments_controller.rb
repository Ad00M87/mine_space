class Api::CommentsController < ApplicationController
  before_action :get_comment, only: [:destroy]
  def index
    render json: current_user.post.comments.all
  end

  def destroy
    @comment.destroy
  end

  private
    def get_comment
      @comment = current_user.post.comments.find(params[:id])
    end
    
end
