

function CommonBanner(props) {
    return (
      <div>
          <div className="bg-[url('/images/subheaderbg.jpg')] bg-no-repeat bg-cover bg-center py-10 mb-10">
                  <h1 className=" container text-blue-900 text-center text-4xl font-bold mx-auto">{props.title}</h1>
          </div>
      </div> 
    )
  }
  
  export default CommonBanner