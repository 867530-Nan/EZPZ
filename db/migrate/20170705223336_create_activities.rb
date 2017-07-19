class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :month
      t.integer :day
      t.integer :year
      t.string :date
      t.string :url
      t.datetime :time
      t.string :name
      t.float :cost
      t.text :description
      t.boolean :inside, default: false
      t.string :age
      t.string :location
      t.string :address
      t.string :interest

      t.timestamps
    end
  end
end
