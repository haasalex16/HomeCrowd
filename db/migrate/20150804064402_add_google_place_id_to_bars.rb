class AddGooglePlaceIdToBars < ActiveRecord::Migration
  def change
    add_column :bars, :google_place_id, :integer
  end
end
