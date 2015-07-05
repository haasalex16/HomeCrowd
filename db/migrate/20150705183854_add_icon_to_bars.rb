class AddIconToBars < ActiveRecord::Migration
  def change
    add_column :bars, :icon, :string
    add_column :bars, :hc_verified, :boolean
    add_column :bars, :league, :string
  end
end
