import React from 'react'

function User({user}) {
  return (
    <section className="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
            <div className="row g-0">
              <div className="col-md-4 gradient-custom text-center text-white" style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F115-1150152_default-profile-picture-avatar-png-green.png&f=1&nofb=1&ipt=2099f2a11b19b7f4c35cc5ad97a8dd5167dd5d9a2f75c9701b97f14e6260c880&ipo=images" alt="Avatar" className="img-fluid my-5" style={{ width: "80px" }} />
                <h5>{user.name}</h5>
                <p>{user.username}</p>
                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{user.email}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Phone</h6>
                      <p className="text-muted">{user.phone}</p>
                    </div>
                  </div>
                  <h6>Company</h6>
                  <p className="text-muted">{user.company.bs}</p>
                  <p className="text-muted">{user.company.catchPhrase}</p>
                  <p className="text-muted">{user.company.name}</p>

                  <hr className="mt-0 mb-4" />
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Address</h6>
                      <p className="text-muted">{user.address.city}</p>
                      <p className="text-muted">{user.address.geo.lat}</p>
                      <p className="text-muted">{user.address.street}</p>

                    </div>
                    <div className="col-6 mb-3">
                      <h6>Website</h6>
                      <p className="text-muted">{user.website}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
}


export default User