class Bar < ActiveRecord::Base
  has_many :loyalties
  has_many :teams,
    through: :loyalties,
    source: :team

  has_many :groups,
    through: :loyalties,
    source: :group
end
