class AddSpecialsToLoyalties < ActiveRecord::Migration
  def change
    add_column :loyalties, :specials, :text
    add_column :loyalties, :group_id, :integer
  end
end
