class CreateChildren < ActiveRecord::Migration[5.1]
  def change
    create_table :children do |t|
      t.integer :age
      t.string :name
      t.string :interestOne
      t.string :interestTwo
      t.string :interestThree
      t.string :interestFour
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
