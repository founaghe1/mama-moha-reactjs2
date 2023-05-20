import 'bootstrap/dist/css/bootstrap.css';

export const Menu = () =>{
    return(
        <>
        <div className="menu">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h1>Row1 Colone 1</h1>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h1>Row1 Colone 2</h1>
                    </div>
                </div>
                {/* row 2 */}
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-12">
                        <h1>Row2 Colone 1</h1>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h1>Row2 Colone 2</h1>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};