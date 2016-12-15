class Api::NotebooksController < ApplicationController
  def index
    @notebooks = current_user.notebooks
    render :index
  end

  def show
    @notebook = current_user.notebooks.find(params[:id])
    render :show
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id

    if @notebook.save
      render :show
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = current_user.notebooks.find(params[:id])
    if @notebook.destroy
      @notebooks = current_user.notebooks
      render :index
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def notebook_params
    params.require(:notebook).permit(:title)
  end

end
