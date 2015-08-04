# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150804065425) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bars", force: :cascade do |t|
    t.string   "name",            null: false
    t.string   "address",         null: false
    t.float    "lat",             null: false
    t.float    "lng",             null: false
    t.string   "number",          null: false
    t.string   "website"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "google_place_id"
  end

  add_index "bars", ["lat"], name: "index_bars_on_lat", using: :btree
  add_index "bars", ["lng"], name: "index_bars_on_lng", using: :btree

  create_table "groups", force: :cascade do |t|
    t.string   "name",       null: false
    t.integer  "team_id",    null: false
    t.string   "assoc",      null: false
    t.string   "website"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "loyalties", force: :cascade do |t|
    t.integer  "bar_id",                      null: false
    t.integer  "team_id",                     null: false
    t.boolean  "alumni",      default: false, null: false
    t.boolean  "hc_verified", default: false, null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.text     "specials"
    t.integer  "group_id"
  end

  add_index "loyalties", ["bar_id"], name: "index_loyalties_on_bar_id", using: :btree
  add_index "loyalties", ["team_id"], name: "index_loyalties_on_team_id", using: :btree

  create_table "teams", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "icon_url",   null: false
    t.string   "league",     null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "teams", ["icon_url"], name: "index_teams_on_icon_url", using: :btree
  add_index "teams", ["league"], name: "index_teams_on_league", using: :btree
  add_index "teams", ["name"], name: "index_teams_on_name", unique: true, using: :btree

end
