import React, {Component} from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default class AgripreneurCreate extends Component {
    render(){
        return (
            <div className="wrapper">
            <Header />
            <Sidebar />

<main class="page-content">
<div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
  <div class="breadcrumb-title pe-3">Agripreneur</div>
  <div class="ps-3">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb mb-0 p-0">
        <li class="breadcrumb-item"><a href="javascript:;"><i class="bx bx-home-alt"></i></a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Create New</li>
      </ol>
    </nav>
  </div>
  <div class="ms-auto">
    <div class="btn-group">
      <button type="button" class="btn btn-primary">Settings</button>
      <button type="button" class="btn btn-primary split-bg-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">	<span class="visually-hidden">Toggle Dropdown</span>
      </button>
      <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg-end">	<a class="dropdown-item" href="javascript:;">Action</a>
        <a class="dropdown-item" href="javascript:;">Another action</a>
        <a class="dropdown-item" href="javascript:;">Something else here</a>
        <div class="dropdown-divider"></div>	<a class="dropdown-item" href="javascript:;">Separated link</a>
      </div>
    </div>
  </div>
</div>
   

       <div class="card">
							<div class="card-body">
								<div class="p-4 border rounded">
                <form class="was-validated">
										<div class="mb-3">
											<label for="validationTextarea" class="form-label">Textarea</label>
											<textarea class="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
											<div class="invalid-feedback">Please enter a message in the textarea.</div>
										</div>
										<div class="form-check mb-3">
											<input type="checkbox" class="form-check-input" id="validationFormCheck1" required />
											<label class="form-check-label" for="validationFormCheck1">Check this checkbox</label>
											<div class="invalid-feedback">Example invalid feedback text</div>
										</div>
										<div class="form-check">
											<input type="radio" class="form-check-input" id="validationFormCheck2" name="radio-stacked" required />
											<label class="form-check-label" for="validationFormCheck2">Toggle this radio</label>
										</div>
										<div class="form-check mb-3">
											<input type="radio" class="form-check-input" id="validationFormCheck3" name="radio-stacked" required />
											<label class="form-check-label" for="validationFormCheck3">Or toggle this other radio</label>
											<div class="invalid-feedback">More example invalid feedback text</div>
										</div>
										<div class="mb-3">
											<select class="form-select" required aria-label="select example">
												<option value="">Open this select menu</option>
												<option value="1">One</option>
												<option value="2">Two</option>
												<option value="3">Three</option>
											</select>
											<div class="invalid-feedback">Example invalid select feedback</div>
										</div>
										<div class="mb-3">
											<input type="file" class="form-control" aria-label="file example" required />
											<div class="invalid-feedback">Example invalid form file feedback</div>
										</div>
										<div class="mb-3">
											<button class="btn btn-primary" type="submit" disabled>Submit form</button>
										</div>
									</form>
								</div>
							</div>						
       </div>
       
</main>
<Footer />
</div>
)
    }
}