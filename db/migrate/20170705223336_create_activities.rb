class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table :activities do |t|
      t.string :date
      t.string :url
      t.datetime :time
      t.string :name
      t.text :description
      t.boolean :inside, default: false
      t.integer :age
      t.string :location
      t.string :interest

      t.timestamps
    end
  end
end
