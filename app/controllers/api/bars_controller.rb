class Api::BarsController < ApplicationController

  wrap_parameters false

  def create
    @bar = Bar.new(bar_params)
    if @bar.save
      render json: @bar
    else
      render json: @bar.errors, status: 422
    end
  end

  def show
    @bar = Bar.find(params[:id])
    render json: @bar
  end

  def index
    @bars = Bar.all
    render :index
  end

  def destroy
  end

  private
    def bar_params
      params.require(:bar).permit(:name,
                                  :address,
                                  :number,
                                  :website,
                                  :lng,
                                  :lat)
    end

end
