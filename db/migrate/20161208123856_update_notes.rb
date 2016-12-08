class UpdateNotes < ActiveRecord::Migration
  def change
    change_column :notes, :body, :string, :null => true
  end
end
