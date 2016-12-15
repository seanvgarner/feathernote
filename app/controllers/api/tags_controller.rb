class Api::TagsController < ApplicationController

  def index
    @tags = current_user.tags
    render :index
  end

  def create
    @tag = Tag.find_by(name: tag_params[:name], author_id: current_user.id) || Tag.new(name: tag_params[:name])
    @tag.author_id ||= current_user.id

    if @tag.save
      Tagging.create!(tag_id: @tag.id, note_id: tag_params[:note_id].to_i )
      render :show
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
    @tag = Tag.find(params[:id])
    if @tag.destroy
      @tags = Tag.all
      render :index
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy_tagging
    @tag = Tag.find(params[:id])
    @tagging = @tag.taggings.select { |tagging| tag_params[:note_id] == tagging.note_id.to_s }

    if @tagging[0].destroy
      render json: @tagging[0]
    else
      render json: @tagging[0].errors.full_messages, status: 422
    end
  end

  def tag_params
    params.require(:tag).permit(:name, :note_id)
  end
end
