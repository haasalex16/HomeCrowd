json.array! @loyalties do |loyalty|
  json.id loyalty.id
  json.name loyalty.bar.name
  json.address loyalty.bar.address
  json.number loyalty.bar.number
  json.lat loyalty.bar.lat
  json.lng  loyalty.bar.lng
  json.website loyalty.bar.website
  json.icon loyalty.team.icon_url
  json.loyalty loyalty.team.name
  json.league loyalty.team.league
  json.hc_verified loyalty.hc_verified
  json.alumni loyalty.alumni

end
