class Group < ActiveRecord::Base
  has_many :loyalties
  belongs_to :team

  has_many :bars,
    through: :loyalties,
    source: :bar
end
