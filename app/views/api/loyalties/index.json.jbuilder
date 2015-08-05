json.array! @loyalties do |loyalty|
  json.id       loyalty.id
  json.bar_id   loyalty.bar.id
  json.name     loyalty.bar.name
  json.address  loyalty.bar.address
  json.number   loyalty.bar.number
  json.lat      loyalty.bar.lat
  json.lng      loyalty.bar.lng
  json.website  loyalty.bar.website
  json.icon     loyalty.team.icon_url
  json.loyalty  loyalty.team.name
  json.league   loyalty.team.league
  json.hc_verified loyalty.hc_verified
  json.alumni   loyalty.alumni
  json.specials   loyalty.specials
  if loyalty.group_id
    json.group    loyalty.group.name
    json.group_assoc    loyalty.group.assoc
    json.group_site    loyalty.group.website
  else
    json.set!    'group', loyalty.group_id
    json.set!    'group_assoc', loyalty.group_id
    json.set!    'group_site', loyalty.group_id
  end
end
