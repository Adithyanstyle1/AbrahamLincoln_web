import Image from './Abraham_Lincoln_O-77_matte_collodion_print.jpg'

const Home = () => {
    return (
        <>
        <header class="py-4 bg-black"><h1>Adithyan</h1></header>
        <div class="container p-5">
            <div class="row">
                <div className="col-4">
                    <h1>Aithyan</h1>

                </div>
                <div className="col-4">
                    <img src={Image} class="img-fluid" alt="image"></img>

                </div>
                <div className="col-4">
                    <h1>Aithyan</h1>

                </div>
            </div>
        </div>
      
       
       
        </>
    )
}
export default Home
