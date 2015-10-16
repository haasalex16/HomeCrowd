class Api::LoyaltiesController < ApplicationController

  wrap_parameters false

  def show
    @loyalty = Loyalty.find(params[:id])
    render json: @loyalty
  end

  def index
    @loyalties = Loyalty.all.includes(:bar, :team, :group)
    render :index
  end

  def create
    @loyalty = Loyalty.new(loyalty_params);
    if @loyalty.save
      render json: @loyalty
    else
      render json: @loyalty.errors.messages, status: 422
    end
  end

  private
    def loyalty_params
      params.require(:loyalty).permit(:bar_id,
                                  :team_id,
                                  :number,
                                  :alumni,
                                  :hc_verified)
    end

end
