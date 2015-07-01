class RemoveColumnsFromBars < ActiveRecord::Migration
  def change
    remove_column :bars, :longitude
    remove_column :bars, :latitude
  end
end
