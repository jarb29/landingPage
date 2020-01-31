import React from 'react';




export default function Cards(props) {
    return(
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="card h-100">
                <img className="card-img-top" src={props.data.img} Alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{props.data.title}</h5>
                  <p className="card-text">{props.data.description}</p>
                  <div className='card-footer'>
                  <a href="https://www.wikipedia.org/" className="btn btn-primary">Find Out More!</a>
                </div>
              </div>
            </div> 
          </div>
    );
}


