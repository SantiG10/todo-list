class ChangeNameCompleted < ActiveRecord::Migration[5.0]
  def change
    remove_column :tasks, :completed, :boolean
    add_column :tasks, :complete, :boolean, default: false
  end
end
