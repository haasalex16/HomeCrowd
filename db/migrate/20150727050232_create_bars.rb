class CreateBars < ActiveRecord::Migration
  def change
    create_table :bars do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :number, null: false
      t.string :website
      t.timestamps null: false
    end
    add_index :bars, :address, unique: true
    add_index :bars, :lat
    add_index :bars, :lng
  end
end
