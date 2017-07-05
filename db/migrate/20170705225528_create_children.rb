class CreateChildren < ActiveRecord::Migration[5.1]
  def change
    create_table :children do |t|
      t.integer :age
      t.string :name
      t.string :interest
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
