class CreateLoyalties < ActiveRecord::Migration
  def change
    create_table :loyalties do |t|
      t.integer :bar_id, null: false
      t.integer :team_id, null: false
      t.boolean :alumni, null: false, default: false
      t.boolean :hc_verified, null: false, default: false
      t.timestamps null: false
    end
    add_index :loyalties, :bar_id
    add_index :loyalties, :team_id
  end
end
