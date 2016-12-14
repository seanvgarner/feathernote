class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :name, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    
    add_index :tags, :author_id
  end
end
