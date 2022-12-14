import React from "react";

const CardGrid = () => {
	return (
<div class="container text-center pb-5">
  <div class="row gx-5">
    <div class="col-3">
        <div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/400/300?random=1" className="card-img-top w-100" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
    
    <div class="col-3">
        <div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/400/300?random=2" className="card-img-top w-100" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>

    <div class="col-3">
        <div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/400/300?random=3" className="card-img-top w-100" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>

    <div class="col-3">
        <div className="card" style={{width: "18rem"}}>
        <img src="https://picsum.photos/400/300?random=4" className="card-img-top w-100" alt="..."></img>
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>

  </div>
</div>

);
};

export default CardGrid;