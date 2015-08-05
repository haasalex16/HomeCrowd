json.id       @bar.id
json.name     @bar.name
json.address  @bar.address
json.number   @bar.number
json.website  @bar.website
json.teams    @bar.loyalties do |loyalty|
  json.id           loyalty.team.id
  json.name         loyalty.team.name
  json.league       loyalty.team.league
  json.specials       loyalty.specials

  json.alumni       loyalty.alumni
  json.hc_verified  loyalty.hc_verified
  json.icon         loyalty.team.icon_url
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
