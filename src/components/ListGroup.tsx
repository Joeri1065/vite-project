function ListGroup(){
    const cities = ['Rotterdam', 'Paris', 'Manila' ]
    return (

        cities.length !== 0 ?
        <>
        <h1>Cities</h1>
    <ul className="list-group">
        {cities.map( 
            (city) => {
                return <li key={city} onClick={() => console.log(city)} className="list-group-item">{city}</li>
            }
        )}
  </ul>
  </> : "No Cities"
)
}

export default ListGroup;