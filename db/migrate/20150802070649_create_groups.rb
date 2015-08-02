class CreateGroups < ActiveRecord::Migration
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.integer :team_id, null: false
      t.string :assoc, null: false
      t.string :website

      t.timestamps null: false
    end
  end
end
