import React from 'react'

const SideCardPackageNew = (props) => {
  return (
    <div className="shadow d-flex align-items-center gap-16 mb-16 p-8 rounded-8" >
    <div className="img rounded-8" style={{width:"100px",height:"80px"}}>
      <img src={props.image} alt="" />
    </div>
    <div className="w-50">
      <h6 className="fw-medium">{props.name}</h6>
      <p className="clamp-2 small text-cGray400">{props.short_description}</p>
    </div>
  </div>
  )
}

export default SideCardPackageNew