class AddLoyaltyToBars < ActiveRecord::Migration
  def change
    add_column :bars, :loyalty, :string
  end
end
