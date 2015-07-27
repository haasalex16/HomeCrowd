class Loyalty < ActiveRecord::Base
  belongs_to :bar
  belongs_to :team

  validates_uniqueness_of :bar_id, scope: :team_id, message: "Your bar is already affiliated with that team."

end
