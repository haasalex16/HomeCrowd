class Team < ActiveRecord::Base
  has_many :loyalties
  has_many :bars,
    through: :loyalties,
    source: :bar

  has_many :groups
end
