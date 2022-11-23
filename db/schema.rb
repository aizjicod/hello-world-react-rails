ActiveRecord::Schema[7.0].define(version: 2022_11_23_023501) do
  enable_extension "plpgsql"

  create_table "messages", force: :cascade do |t|
    t.string "text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
