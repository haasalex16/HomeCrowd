class RemoveAddressValidatorFromBars < ActiveRecord::Migration
  def change
    remove_index(:bars, :name => 'index_bars_on_address')
  end
end
