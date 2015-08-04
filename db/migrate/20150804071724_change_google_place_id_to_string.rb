class ChangeGooglePlaceIdToString < ActiveRecord::Migration
  def change
    change_column :bars, :google_place_id, :string
  end
end
