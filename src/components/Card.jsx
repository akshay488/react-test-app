export default function Clint(props) {
  
    return(
    <div className=" col-3 card shadow d-flex flex-row align-content-stretch pe-0">
        <div className="w-75 d-flex align-items-center justify-content-center">
            <div><img src={`images/${props.pic}`} alt="" className="rounded-circle border d-block m-auto" width='100px'/>
            <h3 className="text-center">{props.fullname}</h3>
            <p className="text-center">{props.country}</p>
        </div>
            
        </div>
        <div className="w-25 bg-success text-white rounded-end">
            <span>4</span>
            <span>4</span>
            <span>4</span>
            <span>4 </span>
        </div>
</div>
    )
}