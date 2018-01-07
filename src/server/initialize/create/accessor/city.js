module.exports = function createCityAccessor($) {

  return Object.freeze({
    binaryStatus: $('./create/methods/city/binary-status')(),
    districtCount: $('./create/methods/city/district-count')(),
    retrievedDistrictCount: $('./create/methods/city/retrieved-district-count')(),
    districtsByDistrictID: $('./create/methods/city/districts-by-district-id')($),
    entityCounts: $('./create/methods/city/entity-counts')(),
    districtIDsByEntityID: $('./create/methods/city/district-ids-by-entity-id')($),
    entityCountsByDistrictID: $('./create/methods/city/entity-counts-by-district-id')(),
    $
  })
}
