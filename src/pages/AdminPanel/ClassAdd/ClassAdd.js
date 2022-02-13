import React from "react";
import "./ClassAdd.css";

function ClassAdd() {
  return (
    <div className="class-add">
      <div className="class-add-container">
        <div className="class-add-title">Class add activation</div>
        <div className="class-add-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter the science name
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Science serial number
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Enter the science name
              </label>
              <select class="form-select" aria-label="Default select example">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ClassAdd;
