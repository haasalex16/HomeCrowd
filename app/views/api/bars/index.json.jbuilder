json.array! @bars do | bar |
  json.id       bar.id
  json.name     bar.name
  json.address  bar.address
  json.number   bar.number
  json.teams    bar.loyalties do |loyalty|
    json.id           loyalty.team.id
    json.name         loyalty.team.name
    json.league       loyalty.team.league
    json.alumni       loyalty.alumni
    json.hc_verified  loyalty.hc_verified
  end
end
