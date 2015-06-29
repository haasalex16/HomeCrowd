class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :number, null: false
      t.string :website, :notes
      t.boolean :alumni
      t.float :longitude, :latitude

      t.timestamps null: false
    end
    add_index :bars, :longitude
    add_index :bars, :latitude
  end
end
