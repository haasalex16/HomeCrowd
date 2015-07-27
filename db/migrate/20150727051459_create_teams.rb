class CreateTeams < ActiveRecord::Migration
  def change
    create_table :teams do |t|
      t.string :name, null: false
      t.string :icon_url, null: false
      t.string :league, null: false
      t.timestamps null: false
    end
    add_index :teams, :name, unique: true
    add_index :teams, :icon_url
    add_index :teams, :league
  end
end
