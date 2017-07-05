class CreateLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :logs do |t|
      t.string :rate
      t.string :experience
      t.text :description

      t.timestamps
    end
  end
end
