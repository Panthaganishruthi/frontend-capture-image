const ImgCard = ({details}) => {
  return (
    <div className='gallary-items'>
      <img src={details.value.mapValue.fields.txtVal.stringValue}/>
      <p>{details.value.mapValue.fields.geoLocation.mapValue.fields.city.stringValue}, {details.value.mapValue.fields.geoLocation.mapValue.fields.regionName.stringValue
}, {details.value.mapValue.fields.geoLocation.mapValue.fields.countryCode.stringValue}, {
    details.value.mapValue.fields.geoLocation.mapValue.fields.zip.stringValue
}</p>
    </div>
  )
}

export default ImgCard
